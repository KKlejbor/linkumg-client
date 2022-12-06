import { useMutation, QueryClient } from '@sveltestack/svelte-query';
import type { AxiosError } from 'axios';
import axiosInstance from 'src/api/Axios';
import type { StudentPost } from 'src/models/Student';

export const usePostStudent = (
	queryClient: QueryClient,
	callbacks?: {
		onSuccess?: () => void;
		onError?: (error: AxiosError) => void;
		onSettled?: () => void;
	}
) => {
	return useMutation((data: StudentPost) => postStudent(data), {
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

const postStudent = async (data: StudentPost) => {
	return await axiosInstance.post<StudentPost>(`/colleges`, data, {
		headers: { 'Content-Type': 'application/json' }
	});
};
