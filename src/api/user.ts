import { httpService } from './index';


export const userApi = {
  getUserInfo(Email: string) {
    const payload = JSON.stringify({
      email: Email
    });
    return httpService.post(`/user/user-information`, payload);
  },
  logout() {
    return httpService.post(`/user/logout`);
  }
}; 