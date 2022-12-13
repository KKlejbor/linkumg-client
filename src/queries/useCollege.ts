import { useMutation, QueryClient } from '@sveltestack/svelte-query';
import type { AxiosError } from 'axios';
import axiosInstance from 'src/api/Axios';
import type { CollegePatch, CollegePost } from 'src/models/College';
import { invalidateUser } from './useUser';


export const usePostCollege = (
	queryClient: QueryClient,
	callbacks?: {
		onSuccess?: () => void;
		onError?: (error: AxiosError) => void;
		onSettled?: () => void;
	}
) => {
	return useMutation((data: CollegePost) => postCollege(data), {
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

const postCollege = async (data: CollegePost) => {
	return await axiosInstance.post<CollegePost>(`/colleges`, data, {
		headers: { 'Content-Type': 'application/json' }
	});
};


export const usePatchCollege = (
	queryClient: QueryClient,
	callbacks?: {
		onSuccess?: () => void;
		onError?: (error: AxiosError) => void;
		onSettled?: () => void;
	}
) => {
	return useMutation((data: CollegePatch) => patchCollege(data), {
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

const patchCollege = async (data: CollegePatch) => {
	return await axiosInstance.patch<CollegePatch>(`/colleges`, data, {
		headers: { 'Content-Type': 'application/json' }
	});
};