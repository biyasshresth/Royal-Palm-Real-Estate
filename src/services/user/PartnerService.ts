import CoreApiService from "../../core/CoreApiService";
import { APIResponse,APIResponseWithMessage } from "types/APIResponse" ;
import { Partners } from "types/auth/Partners";

export default class PartnerService extends CoreApiService {
  constructor(){
    super("");
  }
  async  getPartners() {
    return this.get<APIResponse<Partners[]>>("partnership");
  }
    async getbyId(id: string) {
      return this.get<APIResponse<Partners>>(`partners/${id}`);
    }
  }
 

  

