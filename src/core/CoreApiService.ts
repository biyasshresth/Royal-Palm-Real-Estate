import type { AuthUser } from "types/auth/UserLogin";
import { storeToken } from "../utils/authToken";
import axios, {
  type AxiosInstance,
  type AxiosRequestConfig,
  type AxiosResponse,
} from "axios";
import { APIResponse } from "types/APIResponse";
import Cookies from "universal-cookie";

const cookies = new Cookies();

interface CustomAxiosInstance extends AxiosInstance {
  get<T = unknown>(url: string, config?: AxiosRequestConfig): Promise<T>;
  post<T = unknown>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ): Promise<T>;
  put<T = unknown>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ): Promise<T>;
  delete<T = unknown>(url: string, config?: AxiosRequestConfig): Promise<T>;
}

// axios instance
const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true,
  headers: {
    Accept: "application/json",
  },
}) as CustomAxiosInstance;

// ✅ Handle request globally
// apiClient.interceptors.request.use((config) => {
//   const token = cookies.get("x-access-token");
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });
apiClient.interceptors.request.use((config) => {
  const token = cookies.get("x-access-token");
  if (!config.url?.includes("refresh-token") && token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// ✅ Handle response globally
apiClient.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data;
  },
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const { data } = await apiClient.post<APIResponse<AuthUser>>(
          "admin/refresh-token",
          {
            remember: true,
            refresh_token: cookies.get("x-refresh-token"),
          }
        );
        console.log("newToken", data);
        storeToken(data.accessToken);
        originalRequest.headers.Authorization = `Bearer ${data.accessToken}`;
        return axios(originalRequest);
      } catch (error) {
        console.log("error", error);
        window.dispatchEvent(new Event("forceLogout"));
        return Promise.reject(error);
      }
    }

    const errorInfo = {
      message: error.response?.data?.message || error.message,
      status: error.response?.status,
      data: error.response?.data,
    };
    return Promise.reject(errorInfo);
  }
);

class CoreApiService {
  protected static staticClient = apiClient;

  protected resource: string;

  constructor(resource: string) {
    this.resource = resource;
  }

  protected query<T>(
    path: string = "",
    params: AxiosRequestConfig = {}
  ): Promise<T> {
    const url = this.buildUrl(path);
    return apiClient.get<T>(url, params);
  }

  protected get<T>(path: string = ""): Promise<T> {
    const url = this.buildUrl(path);
    return apiClient.get<T>(url);
  }

  protected post<T>(
    path: string = "",
    data: unknown,
    config?: AxiosRequestConfig
  ): Promise<T> {
    const url = this.buildUrl(path);
    return apiClient.post<T>(url, data, config);
  }

  protected put<T>(
    path: string = "",
    data: unknown,
    config?: AxiosRequestConfig
  ): Promise<T> {
    const url = this.buildUrl(path);
    return apiClient.put<T>(url, data, config);
  }

  protected delete<T>(path: string = ""): Promise<T> {
    const url = this.buildUrl(path);
    return apiClient.delete<T>(url);
  }

  private buildUrl(path: string): string {
    return path ? `${this.resource}/${path}` : this.resource;
  }
}

export default CoreApiService;

export { apiClient };
