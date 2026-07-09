// src/utils/authToken.ts
import Cookies from "universal-cookie";

const cookies = new Cookies();
const COOKIE_NAME = "x-access-token";

export const storeToken = (token: string): void => {
  cookies.set(COOKIE_NAME, token, {
    path: "/",
    secure: import.meta.env.VITE_ENV === "production",
    sameSite: "strict",
    maxAge: 60 * 60 * 60, // 1 minutes
  });
};

export const getToken = (): string | null => {
  return cookies.get(COOKIE_NAME) || null;
};

export const clearToken = (): void => {
  cookies.remove(COOKIE_NAME, { path: "/" });
};
