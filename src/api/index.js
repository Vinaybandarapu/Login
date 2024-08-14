import ApiClient from './ApiClient';
import UserApi from './UserApi';
// import TrainerApi from './TrainerApi';

export const apiClient = new ApiClient();

const combinedAPI = {
  user: new UserApi(apiClient),
//   trainers: new TrainerApi(apiClient),
};
export default combinedAPI;
