import { store } from '../store';
import { salesAnalyticsApi } from '../api/salesAnalytics';

export interface SalesDataParams {
  marketplace: string;
  sellerId: string;
}

export interface DailySalesOverviewParams extends SalesDataParams {
  day: 60 | 30 | 14 | 7;
  customDateData?: string | null;
  excludeYoYData?: boolean;
  requestStatus?: number;
}

export interface DailySalesSkuListParams extends SalesDataParams {
  salesDate: string;
  salesDate2?: string;
  pageSize?: number;
  pageNumber?: number;
  isDaysCompare?: number;
}

export interface SkuRefundRateParams extends SalesDataParams {
  skuList: string[];
  requestedDay?: number;
}

export interface ApiResponse<T> {
  data: T;
  status: number;
  message?: string;
}

class SalesAnalyticsService {
  async getDailySalesOverview(params: DailySalesOverviewParams): Promise<ApiResponse<any>> {
    try {
      const payload = {
        customDateData: params.customDateData ?? null,
        day: params.day,
        excludeYoYData: params.excludeYoYData ?? true,
        marketplace: params.marketplace,
        requestStatus: params.requestStatus ?? 0,
        sellerId: params.sellerId
      };

      const response = await salesAnalyticsApi.getDailySalesOverview(payload);
      store.dispatch('salesAnalytics/setDailySalesData', response.data);
      return response;
    } catch (error) {
      console.error('Error fetching daily sales overview:', error);
      throw error;
    }
  }

  async getDailySalesSkuList(params: DailySalesSkuListParams): Promise<ApiResponse<any>> {
    try {
      const payload = {
        marketplace: params.marketplace,
        sellerId: params.sellerId,
        salesDate: params.salesDate,
        salesDate2: params.salesDate2 || '',
        pageSize: params.pageSize || 10,
        pageNumber: params.pageNumber || 1,
        isDaysCompare: params.isDaysCompare || 0
      };

      const response = await salesAnalyticsApi.getDailySalesSkuList(payload);
      return response;
    } catch (error) {
      console.error('Error fetching daily sales SKU list:', error);
      throw error;
    }
  }

  async getSkuRefundRate(params: SkuRefundRateParams): Promise<ApiResponse<any>> {
    try {
      const payload = {
        marketplace: params.marketplace,
        sellerId: params.sellerId,
        skuList: params.skuList,
        requestedDay: params.requestedDay || 30,
        pageNumber: 1,
        pageSize: 10
      };

      const response = await salesAnalyticsApi.getSkuRefundRate(payload);
      return response;
    } catch (error) {
      console.error('Error fetching SKU refund rates:', error);
      throw error;
    }
  }
}

export const salesAnalyticsService = new SalesAnalyticsService(); 