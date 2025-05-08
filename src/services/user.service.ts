import { store } from '../store';
import { userApi } from '../api/user';

class UserService {
  async getUserInformation(Email: string) {
    const response = await userApi.getUserInfo(Email);
    store.dispatch('user/setUserData', response.data.Data.user);
    return response.data;
  }
}

export const userService = new UserService();
