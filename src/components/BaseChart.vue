<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue';
import Highcharts from 'highcharts';
import HighchartsVue from 'highcharts-vue';

interface ChartData {
  dates: string[];
  fbaAmount: number[];
  fbmAmount: number[];
  profit: number[];
  fbaShippingAmount: number[];
}

interface Props {
  data: ChartData;
  isLoading?: boolean;
  error?: string | null;
  selectedDates?: string[];
  chartOptions?: any;
}

const props = withDefaults(defineProps<Props>(), {
  isLoading: false,
  error: null,
  selectedDates: () => [],
  chartOptions: () => ({})
});
const emit = defineEmits<{
  (e: 'pointClick', date: string): void;
  (e: 'chartReady', chart: Highcharts.Chart): void;
  (e: 'update:selectedDates', dates: string[]): void;
}>();

const chartRef = ref<HTMLElement | null>(null);
const chart = ref<Highcharts.Chart | null>(null);

const formatDate = (date: string | number): string => {
  return typeof date === 'string' ? date : date.toString();
};

const formatTooltip = function(this: any) {
  const points = this.points || [];
  let totalSales = 0;
  
  points.forEach((point: any) => {
    if (point.series.name === 'FBA Amount' || point.series.name === 'FBM Amount') {
      totalSales += point.y || 0;
    }
  });

  const currentDate = this.x;
  const currentData = props.data.dates.findIndex(date => date === currentDate);
  const shipping = currentData !== -1 ? props.data.fbaShippingAmount[currentData] : 0;

  let tooltip = `<div style="margin-bottom : 8px">${currentDate}</div>`;
  points.forEach((point: any) => {
    tooltip += `<div style="margin-bottom: 4px; display: flex; align-items: center; gap: 8px;">
      <span style="display: inline-block; width: 8px; height: 8px; border-radius: 50%; background-color: ${point.color}"></span>
      ${point.series.name}: $${(point.y || 0).toFixed(2)}
    </div>`;
  });
  tooltip += `<div style="margin-top: 4px; display: flex; align-items: center; gap: 8px;">
    <span style="display: inline-block; width: 8px; height: 8px; border-radius: 50%; background-color: #1E40AF"></span>
    Total Sales: $${totalSales.toFixed(2)}
  </div>`;
  tooltip += `<div style="margin-top: 4px; display: flex; align-items: center; gap: 8px;">
    <span style="display: inline-block; width: 8px; height: 8px; border-radius: 50%; background-color: #9F1239"></span>
    Shipping: $${shipping.toFixed(2)}
  </div>`;
  
  return tooltip;
};

const handlePointClick = (date: string) => {
  if (!chart.value) return;
  
  const existingIndex = props.selectedDates.indexOf(date);
  
  if (existingIndex !== -1) {
    chart.value.xAxis[0].removePlotBand('selected-band-' + date);
    emit('pointClick', date);
  } else {
    if (props.selectedDates.length >= 2) {
      const firstDate = props.selectedDates[0];
      chart.value.xAxis[0].removePlotBand('selected-band-' + firstDate);
    }
    emit('pointClick', date);
  }
};

const initChart = () => {
  if (!chartRef.value) return;

  const options = {
    chart: {
      type: 'column',
      backgroundColor: '#ffffff',
      style: {
        fontFamily: 'Inter, system-ui, sans-serif'
      },
      events: {
        click: function(e: any) {
          const xAxis = this.xAxis[0];
          const x = xAxis.toValue(e.chartX);
          const categories = xAxis.categories;
          const index = Math.floor(x + 0.5);
          
          if (categories && index >= 0 && index < categories.length) {
            handlePointClick(categories[index]);
          }
        }
      }
    },
    credits: {
      enabled: false
    },
    title: {
      text: 'Daily Sales',
      align: 'left',
      style: {
        color: '#1f2937',
        fontSize: '20px',
        fontWeight: 'bold'
      }
    },
    xAxis: {
      categories: props.data.dates,
      labels: {
        style: {
          color: '#4b5563',
          fontWeight: 'bold'
        },
        rotation: -30,
        align: 'right',
        formatter: function() {
          return formatDate(this.value);
        }
      },
      lineColor: '#e5e7eb',
      tickColor: '#e5e7eb',
      crosshair: true
    },
    yAxis: {
      title: {
        text: 'Amount ($)',
        style: {
          color: '#4b5563',
          fontWeight: 'bold'
        }
      },
      labels: {
        style: {
          color: '#4b5563',
          fontWeight: 'bold'
        }
      },
      gridLineColor: '#e5e7eb'
    },
    plotOptions: {
      series: {
        cursor: 'pointer',
        stacking: 'normal',
        point: {
          events: {
            click: function() {
              if (!this || !this.category) {
                console.error('Invalid point data');
                return;
              }
              handlePointClick(this.category);
            },
            mouseOver: function() {
              if (!chart.value) return;
              
              chart.value.xAxis[0].removePlotBand('hover-band');
              
              chart.value.xAxis[0].addPlotBand({
                from: this.index - 0.5,
                to: this.index + 0.5,
                color: 'rgba(255, 200, 100, 0.2)',
                id: 'hover-band',
                zIndex: -1
              });
            },
            mouseOut: function() {
              if (!chart.value) return;
              
              if (!props.selectedDates.includes(this.category)) {
                chart.value.xAxis[0].removePlotBand('hover-band');
              }
            }
          }
        }
      },
      column: {
        borderWidth: 0,
        pointPadding: 0.2
      }
    },
    legend: {
      itemStyle: {
        color: '#4b5563',
        fontWeight: 'bold'
      }
    },
    tooltip: {
      backgroundColor: '#ffffff',
      borderColor: '#e5e7eb',
      style: {
        color: '#1f2937',
        fontWeight: 'bold'
      },
      formatter: formatTooltip,
      shared: true,
      useHTML: true
    },
    series: [
      {
        name: 'Profit',
        type: 'column',
        data: props.data.profit,
        color: '#74EBC5'
      },
      {
        name: 'FBA Amount',
        type: 'column',
        data: props.data.fbaAmount,
        color: '#7E86E7'
      },
      {
        name: 'FBM Amount',
        type: 'column',
        data: props.data.fbmAmount,
        color: '#5930E4'
      }
    ],
    ...props.chartOptions
  };

  chart.value = Highcharts.chart(chartRef.value, options);
  emit('chartReady', chart.value);
};

const updatePlotBands = () => {
  if (!chart.value) return;
  
  chart.value.xAxis[0].removePlotBand('hover-band');
  props.selectedDates.forEach(date => {
    chart.value.xAxis[0].removePlotBand('selected-band-' + date);
  });

  props.selectedDates.forEach(date => {
    const index = props.data.dates.indexOf(date);
    if (index !== -1) {
      chart.value.xAxis[0].addPlotBand({
        from: index - 0.5,
        to: index + 0.5,
        color: 'rgba(255, 200, 100, 0.3)',
        id: 'selected-band-' + date,
        zIndex: -1
      });
    }
  });
};

watch(() => props.selectedDates, (newDates) => {
  updatePlotBands();
}, { deep: true });

watch(() => props.data, (newData) => {
  if (chart.value) {
    chart.value.update({
      xAxis: {
        categories: newData.dates
      },
      series: [
        {
          name: 'Profit',
          type: 'column',
          data: newData.profit,
          color: '#74EBC5'
        },
        {
          name: 'FBA Amount',
          type: 'column',
          data: newData.fbaAmount,
          color: '#7E86E7'
        },
        {
          name: 'FBM Amount',
          type: 'column',
          data: newData.fbmAmount,
          color: '#5930E4'
        }
      ]
    });
    updatePlotBands();
  }
}, { deep: true });

onMounted(() => {
  initChart();
});

onUnmounted(() => {
  if (chart.value) {
    chart.value.destroy();
    chart.value = null;
  }
});
</script>

<template>
  <div class="relative">
    <div v-if="isLoading" class="absolute inset-0 bg-white bg-opacity-75 flex items-center justify-center z-10">
      <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
    </div>
    <div v-if="error" class="absolute inset-0 bg-white bg-opacity-75 flex items-center justify-center z-10">
      <div class="text-red-600">{{ error }}</div>
    </div>
    <div ref="chartRef" class="w-full h-[400px]"></div>
  </div>
</template> 