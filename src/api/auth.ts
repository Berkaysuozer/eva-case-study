import { httpService } from './index';
import type { LoginCredentials } from '../types/auth';

export const authApi = {
  login(credentials: LoginCredentials) {
    return httpService.post(`/oauth/token`, credentials);
  }
}; 