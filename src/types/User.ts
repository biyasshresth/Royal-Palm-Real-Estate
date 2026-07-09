export interface User {
  name: string;
  identifier: string;
  password: string;
  confirm_password: string;
  permanent_address: string;
  phone: string;
  date_of_birth: string;
}

export interface UserView extends User {
  id: number;
}
export interface UserLogin {
  identifier: string;
  password: string;
  mobile_number: string;
  image?: string;
  accessToken: string;
  refreshToken: string;
}
export interface UserCredentials {
  identifier: string;
  password: string;
  remember: boolean;
}
