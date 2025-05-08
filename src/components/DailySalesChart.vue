<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import { store } from '../store';
import BaseChart from './BaseChart.vue';
import Table from './Table.vue';

type DayOption = 60 | 30 | 14 | 7;
const selectedDay = computed({
  get: () => store.getters['salesAnalytics/selectedDay'],
  set: (value: DayOption) => store.commit('salesAnalytics/SET_SELECTED_DAY', value)
});
const isLoading = ref(false);
const isTableLoading = ref(false);
const error = ref<string | null>(null);

const dailySalesData = computed(() => store.getters['salesAnalytics/dailySalesData']);
const selectedDates = ref<string[]>([]);

const handlePointClick = async (date: string) => {
  const existingIndex = selectedDates.value.indexOf(date);
  
  if (existingIndex !== -1) {
    selectedDates.value.splice(existingIndex, 1);
  } else {
    if (selectedDates.value.length >= 2) {
      selectedDates.value.shift();
    }
    selectedDates.value.push(date);
  }

  try {
    isTableLoading.value = true;
    const [firstDate, secondDate] = selectedDates.value;
    await store.dispatch('salesAnalytics/fetchDailySalesSkuList', {
      salesDate: firstDate,
      salesDate2: secondDate || '',
      pageNumber: 1
    });
  } catch (error) {
    console.error('Error in fetchDailySalesSkuList:', error);
  } finally {
    isTableLoading.value = false;
  }
};

const chartData = computed(() => {
  if (!dailySalesData.value?.Data?.item) {
    return {
      dates: [],
      fbaAmount: [],
      fbmAmount: [],
      profit: [],
      fbaShippingAmount: []
    };
  }

  const dates: string[] = [];
  const fbaAmount: number[] = [];
  const fbmAmount: number[] = [];
  const profit: number[] = [];
  const fbaShippingAmount: number[] = [];

  dailySalesData.value.Data.item.forEach((item: { 
    date: string, 
    fbaAmount: number, 
    fbmAmount: number, 
    profit: number,
    fbaShippingAmount: number 
  }) => {
    dates.push(item.date);
    fbaAmount.push(item.fbaAmount);
    fbmAmount.push(item.fbmAmount);
    profit.push(item.profit);
    fbaShippingAmount.push(item.fbaShippingAmount);
  });

  return {
    dates,
    fbaAmount,
    fbmAmount,
    profit,
    fbaShippingAmount
  };
});

watch(selectedDay, () => {
  fetchData();
});

const fetchData = async () => {
  isLoading.value = true;
  error.value = null;
  try {
    await store.dispatch('salesAnalytics/fetchDailySalesOverview', {
      day: selectedDay.value
    });
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'An error occurred while fetching data';
  } finally {
    isLoading.value = false;
  }
};

fetchData();
</script>

<template>
  <div class="bg-white rounded-lg p-6">
    <div class="flex justify-end items-center mb-6">
      <div class="flex space-x-4">
        <select v-model="selectedDay"
          class="border border-gray-300 rounded-lg px-4 py-2 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          :disabled="isLoading">
          <option :value="60">Last 60 Days</option>
          <option :value="30">Last 30 Days</option>
          <option :value="14">Last 14 Days</option>
          <option :value="7">Last 7 Days</option>
        </select>
      </div>
    </div>

    <div class="mb-6">
      <BaseChart
        :data="chartData"
        :is-loading="isLoading"
        :error="error"
        :selected-dates="selectedDates"
        @point-click="handlePointClick"
        @update:selected-dates="selectedDates = $event"
      />
    </div>

    <div v-if="selectedDates.length > 0" class="mt-8">
      <Table :is-loading="isTableLoading" />
    </div>
  </div>
</template>