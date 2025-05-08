<template>
  <div class="mt-4">
    <div v-if="loading" class="flex justify-center items-center p-4">
      <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
    </div>
    <div v-else-if="error" class="text-red-500 p-4">
      {{ error }}
    </div>
    <div v-else-if="!skuList || skuList.length === 0" class="text-gray-600 p-4 font-semibold">
    </div>
    <div v-else>
      <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-gray-600 tracking-wider">
                Image
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-gray-600 tracking-wider">
                Product Name
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-gray-600 tracking-wider">
                SKU
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-gray-600 tracking-wider">
                <div v-if="selectedDate1" v-html="formatDateHeader(selectedDate1)"></div>
              </th>
              <th v-if="selectedDate2" scope="col" class="px-6 py-3 text-left text-xs font-bold text-gray-600 tracking-wider">
                <div v-html="formatDateHeader(selectedDate2)"></div>
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-bold text-gray-600 tracking-wider">
                Refund Rate
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="item in skuList" :key="item.sku" class="hover:bg-gray-50">
              <td class="px-6 py-4 whitespace-nowrap">
                <img 
                  :src="item.imageUrl" 
                  :alt="item.productName"
                  class="h-16 w-16 object-contain"
                  @error="handleImageError"
                />
              </td>
              <td class="px-6 py-4">
                <div class="text-sm text-gray-600 font-semibold">{{ item.productName }}</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-600 font-semibold">{{ item.sku }}</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-cyan-600 font-semibold text-right">
                  <div>${{ formatNumber(item.amount) }} / {{ item.qty }}</div>
                  <div class="text-cyan-600 font-semibold text-right">${{ formatNumber(item.amount / item.qty) }}</div>
                </div>
              </td>
              <td v-if="selectedDate2" class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-green-600 font-semibold text-right">
                  <div>${{ formatNumber(item.amount2) }} / {{ item.qty2 }}</div>
                  <div class="text-green-600 font-semibold text-right">${{ formatNumber(item.amount2 / item.qty2) }}</div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-600 font-semibold">
                  {{ getRefundRate(item.sku) }}
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <!-- Pagination -->
      <div class="flex justify-end items-end px-4 py-3 bg-white border-t border-gray-200">
        <div class="flex items-center gap-4">
          <button 
            v-if="currentPage > 1"
            @click="handlePageChange(currentPage - 1)" 
            :disabled="loading"
            class="group inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-blue-600 border-2 border-blue-600 rounded-md shadow-sm transition-all duration-200 hover:bg-blue-700 hover:border-blue-700 hover:shadow-md disabled:opacity-70 disabled:cursor-wait"
          >
            <svg v-if="!loading" class="w-5 h-5 mr-2 text-white group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
            <svg v-else class="animate-spin w-5 h-5 mr-2 text-white" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span>Previous Page</span>
          </button>

          <button 
            v-if="canGoNext"
            @click="handlePageChange(currentPage + 1)" 
            :disabled="loading"
            class="group inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-blue-600 border-2 border-blue-600 rounded-md shadow-sm transition-all duration-200 hover:bg-blue-700 hover:border-blue-700 hover:shadow-md disabled:opacity-70 disabled:cursor-wait"
          >
            <span>Next Page</span>
            <svg v-if="!loading" class="w-5 h-5 ml-2 text-white group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
            <svg v-else class="animate-spin w-5 h-5 ml-2 text-white" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, watch } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'Table',
  props: {
    isLoading: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const store = useStore();
    const currentPage = ref(1);
    const pageSize = 10;
    
    const skuList = computed(() => {
      const data = store.getters['salesAnalytics/skuListData'];
      return data?.Data?.item?.skuList || [];
    });

    const refundRates = computed(() => {
      return store.getters['salesAnalytics/skuRefundRates'] || [];
    });

    const selectedDate1 = computed(() => {
      const data = store.getters['salesAnalytics/skuListData'];
      return data?.Data?.item?.selectedDate;
    });

    const selectedDate2 = computed(() => {
      const data = store.getters['salesAnalytics/skuListData'];
      return data?.Data?.item?.selectedDate2;
    });

    const selectedDay = computed(() => {
      return store.getters['salesAnalytics/selectedDay'];
    });

    const loading = computed(() => props.isLoading || store.getters['salesAnalytics/loading']);
    const error = computed(() => store.getters['salesAnalytics/error']);

    watch(selectedDay, () => {
      store.commit('salesAnalytics/SET_SKU_LIST_DATA', null);
      currentPage.value = 1;
    });

    const canGoNext = computed(() => {
      return skuList.value.length === pageSize;
    });

    const handlePageChange = async (page: number) => {
      if (page < 1) return;
      if (page > currentPage.value && !canGoNext.value) return;
      
      try {
        await store.dispatch('salesAnalytics/fetchDailySalesSkuList', {
          salesDate: selectedDate1.value,
          salesDate2: selectedDate2.value,
          pageNumber: page,
          pageSize
        });
        currentPage.value = page;
      } catch (error) {
        console.error('Error fetching SKU list:', error);
      }
    };

    const handleImageError = (event: Event) => {
      const img = event.target as HTMLImageElement;
      img.src = '/placeholder-image.png';
    };

    const formatDateHeader = (date: string) => {
      return `${date}<br>Sales / Units<br>Avg. Selling Price`;
    };

    const formatNumber = (num: number) => {
      return num.toFixed(2);
    };

    const getRefundRate = (sku: string) => {
      const refundData = refundRates.value.Data.find((item: any) => item.sku?.sku === sku);
      return refundData ? `${refundData.refundRate.toFixed(2)}%` : '0.00%';
    };

    watch(skuList, (newList) => {
      if (!newList || newList.length === 0) {
        currentPage.value = 1;
      }
    });

    watch([selectedDate1, selectedDate2], () => {
      currentPage.value = 1;
    });

    return {
      skuList,
      loading,
      error,
      handleImageError,
      selectedDate1,
      selectedDate2,
      formatDateHeader,
      formatNumber,
      getRefundRate,
      currentPage,
      canGoNext,
      handlePageChange
    };
  }
});
</script> 