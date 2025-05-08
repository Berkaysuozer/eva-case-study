import type { LoginCredentials, User } from '../types/auth';
import { store } from '../store';
import { authApi } from '../api/auth';
import { userApi } from '../api/user';
import { userService } from './user.service';

const OAUTH_FIELDS = {
  GrantType: 'password',
  Scope: import.meta.env.VITE_OAUTH_SCOPE,
  ClientId: import.meta.env.VITE_OAUTH_CLIENT_ID,
  ClientSecret: import.meta.env.VITE_OAUTH_CLIENT_SECRET,
  RedirectUri: import.meta.env.VITE_OAUTH_REDIRECT_URI
} as const;

class AuthService {
  getToken(): string | null {
    return store.getters['oauth/accessToken'];
  }

  async login(credentials: LoginCredentials): Promise<{ user: User; token: string }> {
    const response = await authApi.login({
      ...credentials,
      ...OAUTH_FIELDS
    });

    if (response.data.ApiStatusCode === 200) {
      store.dispatch('oauth/setAccessToken', response.data.Data);
      await userService.getUserInformation(credentials.Email);
      return response.data;
    } else {
      throw new Error('Login failed');
    }
  }

  async logout(accessToken: string | null) {
    if (!accessToken) return;
    await userApi.logout();
  }
}

export const authService = new AuthService();
