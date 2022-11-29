import { type QueryClient, useMutation } from "@sveltestack/svelte-query";
import type { AxiosError, AxiosResponse } from "axios";
import axiosInstance from "src/api/Axios";
import type { Login, LoginResponse } from "src/models/User";


export const usePostLogin = (queryClient: QueryClient, callbacks?: {
    onSuccess?: (response: LoginResponse) => void,
    onError?: (error: AxiosError) => void,
    onSettled?: () => void  
  }) => {
    return useMutation<any, any, Login, any>(
      (data: Login) => {
        return postLogin(data);
      },
      {
      onSuccess: (response: AxiosResponse<LoginResponse, any>) => {
        if (callbacks?.onSuccess) callbacks.onSuccess(response.data);
      },
      onError: (error:AxiosError) => {
        if (callbacks?.onError) callbacks.onError(error);
      },
      onSettled: () => {
        if (callbacks?.onSettled) callbacks.onSettled();
      }
    });
  }
  
  const postLogin = async (data: Login) => {
   return await axiosInstance.post<Login>(`/users/login`, data, { headers: { 'Content-Type': 'application/json' } });
  };
  