export interface User {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
  permanent_address: string;

  phone: string;
  date_of_birth: string;
}

export interface UserView extends User {
  id: number;
}
