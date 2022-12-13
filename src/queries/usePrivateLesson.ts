import { QueryClient, useMutation, useQuery } from '@sveltestack/svelte-query';
import type { SortBy } from 'src/enums/SortBy';
import type { SortDirection } from 'src/enums/SortDirection';
import type { PaginateResults } from 'src/models/PaginateResults';
import type { PrivateLesson, PrivateLessonPost, SearchPrivateLesson } from 'src/models/PrivateLesson';
import { pageSize } from 'src/utils/globalState';
import type { Writable } from 'svelte/store';
import { get } from 'svelte/store';
import axiosInstance from '../api/Axios';
import type { AxiosError } from 'axios';


export const invalidatePrivateLesson = (queryClient: QueryClient) => {
	queryClient.invalidateQueries('PrivateLesson');
};

export const useGetPrivateLesson = (
	direction: SortDirection,
	page: Writable<number>,
	sortBy: SortBy,
	searchBodyState: Writable<SearchPrivateLesson>
) => {
	return useQuery<PaginateResults<PrivateLesson>>(
		['PrivateLesson', direction, page, sortBy, searchBodyState],
		() => fetchPrivateLesson(direction, get(page), get(pageSize), sortBy, get(searchBodyState).contain, get(searchBodyState).location, get(searchBodyState).category),
		{
			enabled: direction !== undefined
		}
	);
};

const fetchPrivateLesson = async (
	direction: SortDirection,
	page: number,
	pageSize: number,
	sortBy: SortBy,
	contain?: string,
	location?: string,
	category?: string
) => {
	const response = await axiosInstance.get<PaginateResults<PrivateLesson>>('/privateLessons', {
		params: {
			direction: direction,
			page: page,
			pageSize: pageSize,
			sortBy: sortBy,
			contain: contain,
			location: location,
			category: category
		}
	});
	return response.data;
};

export const usePostPrivateLesson = (
	queryClient: QueryClient,
	callbacks?: {
		onSuccess?: () => void;
		onError?: (error: AxiosError) => void;
		onSettled?: () => void;
	}
) => {
	return useMutation((data: PrivateLessonPost) => postPrivateLesson(data), {
		onSuccess: () => {
			if (callbacks?.onSuccess) callbacks.onSuccess();
		},
		onError: (error : AxiosError) => {
			if (callbacks?.onError) callbacks.onError(error);
		},
		onSettled: () => {
			if (callbacks?.onSettled) callbacks.onSettled();
			invalidatePrivateLesson(queryClient);
		}
	});
};

const postPrivateLesson = async (data: PrivateLessonPost) => {
	return await axiosInstance.post<PrivateLessonPost>(`/privateLessons`, data, {
		headers: { 'Content-Type': 'application/json' }
	});
};


export const usePatchPrivateLesson = (
	queryClient: QueryClient,
	id: string,
	callbacks?: {
		onSuccess?: () => void;
		onError?: (error : AxiosError) => void;
		onSettled?: () => void;
	}
) => {
	return useMutation((data: PrivateLessonPost) => patchPrivateLesson(data, id), {
		onSuccess: () => {
			if (callbacks?.onSuccess) callbacks.onSuccess();
			invalidatePrivateLesson(queryClient);
		},
		onError: (error : AxiosError) => {
			if (callbacks?.onError) callbacks.onError(error);
		},
		onSettled: () => {
			if (callbacks?.onSettled) callbacks.onSettled();
		}
	});
};

const patchPrivateLesson = async (data: PrivateLessonPost, id: string) => {
	return await axiosInstance.patch<PrivateLessonPost>(`/privateLessons/${id}`, data, {
		headers: { 'Content-Type': 'application/json' }
	});
};

export const useDeletePrivateLesson = (
	queryClient: QueryClient,
	callbacks?: {
		onSuccess?: () => void;
		onError?: () => void;
		onSettled?: () => void;
	}
) => {
	return useMutation(
		(jobOfferId: string) => {
			return deletePrivateLesson(jobOfferId);
		},
		{
			onSuccess: () => {
				if (callbacks?.onSuccess) callbacks.onSuccess();
				invalidatePrivateLesson(queryClient);
			},
			onError: () => {
				if (callbacks?.onError) callbacks.onError();
			},
			onSettled: () => {
				if (callbacks?.onSettled) callbacks.onSettled();
			}
		}
	);
};

const deletePrivateLesson = async (privateLessonId: string) => {
	return await axiosInstance.delete(`/privateLessons/${privateLessonId}`);
};
