import API from "../constants/api";
import type { LoginData, LoginResponse, RegisterData } from "../models/auth";


export const loginUser = async (data: LoginData): Promise<LoginResponse> => {
  const res = await API.post<LoginResponse>('/login', data);
  return res.data;
};

export const registerUser = async (data: RegisterData): Promise<void> => {
  await API.post('/register', {
    name: data.name,
    email: data.email,
    password: data.password,
    secret: data.adminCode, // mapped from adminCode
  });
};
