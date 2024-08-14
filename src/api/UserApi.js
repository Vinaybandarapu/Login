import Base from './BaseApi';
import { getUserId, getUserProfileInfo, saveUserProfileInfo } from '../constants/AsyncStorageHelper';


export default class UserAPI extends Base {


  loginService(intl, data) {
    return this.apiClient.post(intl, 'elearning/public/api/login', data);
  }

  async logoutService() {
    // return this.apiClient.get( intl,'elearning/public/api/logout');
    await saveUserProfileInfo({})
  }
  
  leaderBoards(intl, data) {
    return this.apiClient.post( intl,'elearning/public/api/assessment/leaderboards', data);
  }

}