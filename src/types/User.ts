export interface User {
  first_name: string;
  middle_name?: string;
  last_name: string;
  email: string;
  password: string;
  confirm_password: string;
  mobile_number: string;
  date_of_birth: string;
  address_line1: string;
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
