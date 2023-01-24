import { useMutation, useQuery } from '@sveltestack/svelte-query';
import type { AxiosError, AxiosResponse } from 'axios';
import axiosInstance from 'src/api/Axios';

export const useGetUserImage = (filename: string) => {
	return useQuery(
		['UserImage', filename],
		() => fetchUserImage(filename),
		{
			enabled: filename !== undefined
		}
	);
};

const fetchUserImage = async (
	filename: string
) => {
	const response = await axiosInstance.get(`/users/image/${filename}`, {
	});
	return response.data;
};

export const usePostUserImage = (
	userId: string,
	callbacks?: {
		onSuccess?: (response: string) => void;
		onError?: (error: AxiosError, context: File) => void;
		onSettled?: () => void;
	}
) => {
	return useMutation<any, any, File, any>(
		(data: File) => {
			return postUserImage(data, userId);
		},
		{
			onSuccess: (response: AxiosResponse<string, any>) => {
				if (callbacks?.onSuccess) callbacks.onSuccess(response.data);
			},
			onError: (error, context) => {
				if (callbacks?.onError) callbacks.onError(error as AxiosError, context as File);
			},
			onSettled: () => {
				if (callbacks?.onSettled) callbacks.onSettled();
			}
		}
	);
};

const postUserImage = async (data: File, userId: string) => {
	const formData = new FormData();
	formData.append('image', data, data.name);

	return await axiosInstance.post(`/users/image/${userId}`, formData, {
		headers: { 'Content-Type': 'multipart/form-data' }
	});
};
