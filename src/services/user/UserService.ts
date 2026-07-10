import CoreApiService from "../../core/CoreApiService";
import { APIResponse, APIResponseWithMessage } from "types/APIResponse";
import { UserCredentials } from "types/auth/UserLogin";
import { User, UserLogin } from "types/User";

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
  async register(data: FormData) {
    return this.post<APIResponse<UserLogin>>("signup", data);
  }
}
