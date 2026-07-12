import { UserCredentials, UserLogin } from "@/types/User";
import CoreApiService from "../../core/CoreApiService";
import { APIResponse, APIResponseWithMessage } from "@/types/APIResponse";
   
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
