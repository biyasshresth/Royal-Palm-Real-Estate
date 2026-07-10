 import CoreApiService from "../core/CoreApiService";
import { APIResponse, APIResponseWithMessage } from "types/APIResponse";
import { Property } from "types/auth/Property";
 

export default class PropertyService extends CoreApiService {
  constructor() {
    super("");
  }
  async getall() {
    return this.get<APIResponse<Property[]>>("Property");
  }
  async getbyId(id: string) {
    return this.get<APIResponse<Property>>(`Property/${id}`);
  }
  async create(data: FormData) {
    return this.post<APIResponse<Property>>("Property", data);
  }
  async update(id: string, data: FormData) {
    return this.put<APIResponse<Property>>(`Property/${id}`, data);
  }
  async destroy(id: string) {
    return this.delete<APIResponseWithMessage>(`Property/${id}`);
  }
  async getFeatured() {
    return this.get<APIResponse<Property[]>>("featured");
  }
} 

