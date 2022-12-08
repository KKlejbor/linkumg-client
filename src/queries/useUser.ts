import { type QueryClient, useMutation } from '@sveltestack/svelte-query';
import type { AxiosError, AxiosResponse } from 'axios';
import axiosInstance from 'src/api/Axios';
import type { Login, LoginResponse, RegisterCompany, RegisterStudent } from 'src/models/User';

export const usePostLogin = (
	queryClient: QueryClient,
	callbacks?: {
		onSuccess?: (response: LoginResponse) => void;
		onError?: (error: AxiosError) => void;
		onSettled?: () => void;
	}
) => {
	return useMutation<any, any, Login, any>(
		(data: Login) => {
			return postLogin(data);
		},
		{
			onSuccess: (response: AxiosResponse<LoginResponse, any>) => {
				if (callbacks?.onSuccess) callbacks.onSuccess(response.data);
			},
			onError: (error: AxiosError) => {
				if (callbacks?.onError) callbacks.onError(error);
			},
			onSettled: () => {
				if (callbacks?.onSettled) callbacks.onSettled();
			}
		}
	);
};

const postLogin = async (data: Login) => {
	return await axiosInstance.post<Login>(`/users/login`, data, {
		headers: { 'Content-Type': 'application/json' }
	});
};

// user activate
export const useUserActivate = (
	queryClient: QueryClient,
	callbacks?: {
		onSuccess?: (data: boolean) => void;
		onError?: (error: AxiosError) => void;
		onSettled?: () => void;
	}
) => {
	return useMutation<any, any, any, any>(
		(data: string) => {
			return patchUserActivate(data);
		},
		{
			onSuccess: (response: AxiosResponse<boolean, any>) => {
				if (callbacks?.onSuccess) callbacks.onSuccess(true);
			},
			onError: (error: AxiosError) => {
				if (callbacks?.onError) callbacks.onError(error);
			},
			onSettled: () => {
				if (callbacks?.onSettled) callbacks.onSettled();
			}
		}
	);
};

const patchUserActivate = async (data: string) => {
  return await axiosInstance.patch(`/users/activate/${data}`);
}


// student register
export const usePostRegisterStudent = (
	queryClient: QueryClient,
	callbacks?: {
		onSuccess?: (data: string) => void;
		onError?: (error: AxiosError) => void;
		onSettled?: () => void;
	}
) => {
	return useMutation<any, any, RegisterStudent, any>(
		(data: RegisterStudent) => {
			return postRegisterStudent(data);
		}, {
			onSuccess: (response: AxiosResponse<string, any>) => {
				if (callbacks?.onSuccess) callbacks.onSuccess(response.data);
			},
			onError: (error: AxiosError) => {
				if (callbacks?.onError) callbacks.onError(error);
			},
			onSettled: () => {
				if (callbacks?.onSettled) callbacks.onSettled();
			}
		}
	)
};

const postRegisterStudent = async (data: RegisterStudent) => {
	return await axiosInstance.post<RegisterStudent>(`/students`, data, {
		headers: { 'Content-Type': 'application/json' }
	})
}

// company register
export const usePostRegisterCompany = (
	queryClient: QueryClient,
	callbacks?: {
		onSuccess?: (data: string) => void;
		onError?: (error: AxiosError) => void;
		onSettled?: () => void;
	}
) => {
	return useMutation<any, any, RegisterCompany, any>(
		(data: RegisterCompany) => {
			return postRegisterCompany(data);
		}, {
			onSuccess: (response: AxiosResponse<string, any>) => {
				if (callbacks?.onSuccess) callbacks.onSuccess(response.data);
			},
			onError: (error: AxiosError) => {
				if (callbacks?.onError) callbacks.onError(error);
			},
			onSettled: () => {
				if (callbacks?.onSettled) callbacks.onSettled();
			}
		}
	)
};

const postRegisterCompany = async (data: RegisterCompany) => {
	return await axiosInstance.post<RegisterCompany>(`/companies`, data, {
		headers: { 'Content-Type': 'application/json' }
	})
}