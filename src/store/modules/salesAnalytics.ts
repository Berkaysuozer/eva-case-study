import { salesAnalyticsService } from '../../services/salesAnalytics.service';
import { Module } from 'vuex';
import { salesAnalyticsApi } from '../../api/salesAnalytics';
import { store } from '../index';

type DayOption = 60 | 30 | 14 | 7;

interface SalesAnalyticsState {
  dailySalesData: any;
  loading: boolean;
  selectedDay: DayOption;
  skuListData: any;
  skuRefundRates: any;
}

const state: SalesAnalyticsState = {
  dailySalesData: null,
  loading: false,
  selectedDay: 30,
  skuListData: null,
  skuRefundRates: null
};

const mutations = {
  SET_DAILY_SALES_DATA(state: SalesAnalyticsState, data: any) {
    state.dailySalesData = data;
  },
  SET_LOADING(state: SalesAnalyticsState, loading: boolean) {
    state.loading = loading;
  },
  SET_SELECTED_DAY(state: SalesAnalyticsState, day: DayOption) {
    state.selectedDay = day;
  },
  SET_SKU_LIST_DATA(state: SalesAnalyticsState, data: any) {
    state.skuListData = data;
  },
  SET_SKU_REFUND_RATES(state: SalesAnalyticsState, data: any) {
    state.skuRefundRates = data;
  }
};

const actions = {
  async fetchDailySalesOverview({ commit, state }: { commit: Function, state: SalesAnalyticsState }, { day }: { day: DayOption }) {
    const userData = store.getters['user/userData'];
    
    if (!userData?.store?.[0]) {
      throw new Error('User data is not available. Please login again.');
    }

    try {
      const params = {
        customDateData: null,
        day,
        excludeYoYData: true,
        marketplace: userData.store[0].marketplaceName,
        sellerId: userData.store[0].storeId,
        requestStatus: 0,
      };
      const response = await salesAnalyticsApi.getDailySalesOverview(params);
      commit('SET_DAILY_SALES_DATA', response.data);
      commit('SET_SELECTED_DAY', day);
    } catch (error) {
      console.error('Error fetching daily sales data:', error);
      throw error;
    }
  },
  async fetchDailySalesSkuList({ commit, state }, { salesDate, salesDate2, pageNumber = 1 }) {
    try {
      const userData = store.getters['user/userData'];
      
      if (!userData?.store?.[0]) {
        throw new Error('User data is not available. Please login again.');
      }

      const params = {
        marketplace: userData.store[0].marketplaceName,
        sellerId: userData.store[0].storeId,
        salesDate: salesDate || salesDate2,
        salesDate2: salesDate2 && salesDate ? salesDate2 : '',
        pageSize: 10,
        pageNumber,
        isDaysCompare: salesDate2 && salesDate ? 1 : 0
      };
      
      const response = await salesAnalyticsService.getDailySalesSkuList(params);
      
      commit('SET_SKU_LIST_DATA', response.data);

      if (response.data?.Data?.item?.skuList?.length > 0) {
        try {
          const refundResponse = await salesAnalyticsService.getSkuRefundRate({
            marketplace: userData.store[0].marketplaceName,
            sellerId: userData.store[0].storeId,
            skuList: response.data.Data.item.skuList,
            requestedDay: 60
          });
          commit('SET_SKU_REFUND_RATES', refundResponse.data);
        } catch (refundError) {
          console.error('Error fetching refund rates:', refundError);
        }
      }

      return response.data;
    } catch (error) {
      console.error('Error in fetchDailySalesSkuList:', error);
      throw error;
    }
  },
  async fetchSkuRefundRate({ commit, state }, { skuList, requestedDay = 30 }) {
    try {
      const userData = store.getters['user/userData'];
      
      if (!userData?.store?.[0]) {
        throw new Error('User data is not available. Please login again.');
      }

      const params = {
        marketplace: userData.store[0].marketplaceName,
        sellerId: userData.store[0].storeId,
        skuList,
        requestedDay
      };
      
      const response = await salesAnalyticsService.getSkuRefundRate(params);
      
      commit('SET_SKU_REFUND_RATES', response.data);
      return response.data;
    } catch (error) {
      console.error('Error in fetchSkuRefundRate:', error);
      throw error;
    }
  }
};

const getters = {
  dailySalesData: (state: SalesAnalyticsState) => state.dailySalesData,
  loading: (state: SalesAnalyticsState) => state.loading,
  selectedDay: (state: SalesAnalyticsState) => state.selectedDay,
  skuListData: (state: SalesAnalyticsState) => state.skuListData,
  skuRefundRates: (state: SalesAnalyticsState) => state.skuRefundRates
};

const salesAnalytics: Module<SalesAnalyticsState, any> = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};

export default salesAnalytics; 