import { useMutation, QueryClient } from '@sveltestack/svelte-query';
import type { AxiosError } from 'axios';
import axiosInstance from 'src/api/Axios';
import type { StudentRegisterDto } from 'src/models/Student';

export const usePostStudent = (
	queryClient: QueryClient,
	callbacks?: {
		onSuccess?: () => void;
		onError?: (error: AxiosError) => void;
		onSettled?: () => void;
	}
) => {
	return useMutation((data: StudentRegisterDto) => postStudent(data), {
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

const postStudent = async (data: StudentRegisterDto) => {
	return await axiosInstance.post<StudentRegisterDto>(`/colleges`, data, {
		headers: { 'Content-Type': 'application/json' }
	});
};
