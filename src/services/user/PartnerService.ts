import { Partners } from "@/types/auth/Partners";
import CoreApiService from "../../core/CoreApiService";
import { APIResponse } from "@/types/APIResponse";
  
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
 

  

