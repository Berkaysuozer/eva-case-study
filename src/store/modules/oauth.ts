import { Module } from 'vuex';
import { RootState } from '../index';
import { authService } from '../../services/auth.service';

interface OAuthState {
  accessToken: string | null;
  refreshToken: string | null;
  tokenExpiry: number | null;
  TokenType: string | null;
  isAuthenticated: boolean | null;
}

const state: OAuthState = {
  accessToken: null,
  refreshToken: null,
  tokenExpiry: null,
  TokenType: null,
  isAuthenticated: null,
};

const mutations = {
  SET_ACCESS_TOKEN(state: OAuthState, data: any) {
    state.accessToken = data.AccessToken;
    state.refreshToken = data.refreshToken;
    state.tokenExpiry = data.ExpiresAt;
    state.TokenType = data.TokenType;
    state.isAuthenticated = true;
  },
  CLEAR_TOKENS(state: OAuthState) {
    state.accessToken = null;
    state.refreshToken = null;
    state.tokenExpiry = null;
    state.TokenType = null;
    state.isAuthenticated = false;
  },
  SET_AUTHENTICATED(state: OAuthState, isAuthenticated: boolean) {
    state.isAuthenticated = isAuthenticated;
  },
};

const actions = {
  setAccessToken({ commit }: { commit: Function }, token: string) {
    commit('SET_ACCESS_TOKEN', token);
  },
  async logout({ commit, state }: { commit: Function; state: OAuthState }) {
    try {
      if (!state.accessToken) {
        commit('CLEAR_TOKENS');
        return;
      }
      
      await authService.logout(state.accessToken);
    } catch (error) {
      console.error('Logout failed:', error);
    } finally {
      commit('CLEAR_TOKENS');
      commit('SET_AUTHENTICATED', false);
    }
  }
};

const getters = {
  accessToken: (state: OAuthState) => state.accessToken,
  isAuthenticated: (state: OAuthState) => state.isAuthenticated,
};

const oauth: Module<OAuthState, RootState> = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};

export default oauth; 