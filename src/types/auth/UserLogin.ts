import { UserView } from "@/types/User";

export interface UserCredentials {
  identifier: string;
  password: string;
  remember: boolean;
}

export interface AuthUser {
  accessToken: string;
  refreshToken: string;
  user: UserView;
}
