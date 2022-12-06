import { useMutation, QueryClient } from '@sveltestack/svelte-query';
import type { AxiosError } from 'axios';
import axiosInstance from 'src/api/Axios';
import type { CompanyPost } from 'src/models/Company';

export const usePostCompany = (
	queryClient: QueryClient,
	callbacks?: {
		onSuccess?: () => void;
		onError?: (error: AxiosError) => void;
		onSettled?: () => void;
	}
) => {
	return useMutation((data: CompanyPost) => postCompany(data), {
		onSuccess: () => {
			if (callbacks?.onSuccess) callbacks.onSuccess();
		},
		onError: (error: AxiosError) => {
			if (callbacks?.onError) callbacks.onError(error);
		},
		onSettled: () => {
			if (callbacks?.onSettled) callbacks.onSettled();
		}
	});
};

const postCompany = async (data: CompanyPost) => {
	return await axiosInstance.post<CompanyPost>(`/companies`, data, {
		headers: { 'Content-Type': 'application/json' }
	});
};
