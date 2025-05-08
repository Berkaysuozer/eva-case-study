import { Module } from 'vuex';

interface UserState {
  userData: any | null;
}

const state: UserState = {
  userData: null,
};

const mutations = {
  SET_USER_DATA(state: UserState, data: any) {
    state.userData = data;
  },
  CLEAR_USER_DATA(state: UserState) {
    state.userData = null;
  }
};

const actions = {
  setUserData({ commit }: { commit: Function }, data: any) {
    commit('SET_USER_DATA', data);
  },
  clearUserData({ commit }: { commit: Function }) {
    commit('CLEAR_USER_DATA');
  }
};

const getters = {
  userData: (state: UserState) => state.userData,
};

const userModule: Module<UserState, any> = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};

export default userModule; 