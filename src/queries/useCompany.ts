import { useMutation, QueryClient } from '@sveltestack/svelte-query';
import type { AxiosError } from 'axios';
import axiosInstance from 'src/api/Axios';
import type { CompanyPatch, CompanyPost } from 'src/models/Company';
import { invalidateUser } from './useUser';

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

export const usePatchCompany = (
	queryClient: QueryClient,
	callbacks?: {
		onSuccess?: () => void;
		onError?: (error: AxiosError) => void;
		onSettled?: () => void;
	}
) => {
	return useMutation((data: CompanyPatch) => patchCompany(data), {
		onSuccess: () => {
			if (callbacks?.onSuccess) callbacks.onSuccess();
		},
		onError: (error: AxiosError) => {
			if (callbacks?.onError) callbacks.onError(error);
		},
		onSettled: () => {
			if (callbacks?.onSettled) callbacks.onSettled();
			invalidateUser(queryClient);
		}
	});
};

const patchCompany = async (data: CompanyPatch) => {
	return await axiosInstance.patch<CompanyPatch>(`/companies`, data, {
		headers: { 'Content-Type': 'application/json' }
	});
};
