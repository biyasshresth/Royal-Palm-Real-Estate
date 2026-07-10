 import { Blog } from "@/types/blogs/blog";
import CoreApiService from "../core/CoreApiService";
import { APIResponse } from "@/types/APIResponse";
 
export default class BlogService extends CoreApiService {
  constructor() {
    super("");
  }
  async getBlogs() {
    return this.get<APIResponse<Blog[]>>("blog");
  }
  async getbyId(id: string) {
    return this.get<APIResponse<Blog>>(`blog/${id}`);
  }
}