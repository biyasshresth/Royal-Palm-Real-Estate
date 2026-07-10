export interface APIResponse<T> {
  data: T;
blogs:T;
featured_listings:T
blog:T
  status: string;
  message: string;
}
export interface APIResponseWithMessage {
  status: string;
  message: string;
}
export interface APIPaginateResponse<T> {
  data: T;
  meta: {
    total: number;
    page: number;
    per_page: number;
    last_page: number;
    current_page: number;
  };
}
