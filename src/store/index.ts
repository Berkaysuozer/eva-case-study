import { createStore } from 'vuex';
import VuexPersistence from 'vuex-persist';
import user from './modules/user';
import salesAnalytics from './modules/salesAnalytics';
import oauth from './modules/oauth';

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  reducer: (state: any) => ({
    oauth: state.oauth,
    user: state.user,
    salesAnalytics: state.salesAnalytics
  })
});

export const store = createStore({
  modules: {
    user,
    salesAnalytics,
    oauth
  },
  plugins: [vuexLocal.plugin]
});
