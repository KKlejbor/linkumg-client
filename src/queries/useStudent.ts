import { useMutation, QueryClient } from '@sveltestack/svelte-query';
import type { AxiosError } from 'axios';
import axiosInstance from 'src/api/Axios';
import type { StudentPatch, StudentPost } from 'src/models/Student';
import { invalidateUser } from './useUser';

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
	return await axiosInstance.post<StudentPost>(`/students`, data, {
		headers: { 'Content-Type': 'application/json' }
	});
};

export const usePatchStudent = (
	queryClient: QueryClient,
	callbacks?: {
		onSuccess?: () => void;
		onError?: () => void;
		onSettled?: () => void;
	}
) => {
	return useMutation((data: StudentPatch) => patchStudent(data), {
		onSuccess: () => {
			if (callbacks?.onSuccess) callbacks.onSuccess();
		},
		onError: () => {
			if (callbacks?.onError) callbacks.onError();
		},
		onSettled: () => {
			if (callbacks?.onSettled) callbacks.onSettled();
			invalidateUser(queryClient);
		}
	});
};

const patchStudent = async (data: StudentPatch) => {
	return await axiosInstance.patch<StudentPatch>(`/students`, data, {
		headers: { 'Content-Type': 'application/json' }
	});
};