import CoreApiService from "../../core/CoreApiService";
import { APIResponse, APIResponseWithMessage } from "types/APIResponse";
import { UserCredentials } from "types/auth/UserLogin";
import { UserLogin } from "types/User";

export default class UserService extends CoreApiService {
  constructor() {
    super("");
  }

  async login(data: UserCredentials) {
    return this.post<APIResponse<UserLogin>>("login", data);
  }
  async logout() {
    return this.get<APIResponseWithMessage>("logout");
  }
}
