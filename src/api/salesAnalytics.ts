import { httpService } from './index';


interface DailySalesParams {
  customDateData: null;
  day: 60 | 30 | 14 | 7;
  excludeYoYData: boolean;
  marketplace: string;
  requestStatus: number;
  sellerId: string;
}

interface DailySalesSkuListParams {
  marketplace: string;
  sellerId: string;
  salesDate: string;
  salesDate2: string;
  pageSize: number;
  pageNumber: number;
  isDaysCompare: number;
}

interface SkuRefundRateParams {
  marketplace: string;
  sellerId: string;
  skuList: string[];
  requestedDay: number;
}

export const salesAnalyticsApi = {
  getDailySalesOverview(params: DailySalesParams) {
    return httpService.post('/data/daily-sales-overview', params);
  },
  getDailySalesSkuList(params: DailySalesSkuListParams) {
    return httpService.post('/data/daily-sales-sku-list', params);
  },
  getSkuRefundRate(params: SkuRefundRateParams) {
    return httpService.post('/data/get-sku-refund-rate', params);
  }
}; 