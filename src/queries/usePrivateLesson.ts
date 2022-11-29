import { QueryClient, useMutation, useQuery } from '@sveltestack/svelte-query';
import type { SortBy } from 'src/enums/SortBy';
import type { SortDirection } from 'src/enums/SortDirection';
import type { JobOffer } from 'src/models/JobOffer';
import type { PaginateResults } from 'src/models/PaginateResults';
import type { PrivateLesson, PrivateLessonPost } from 'src/models/PrivateLesson';
import axiosInstance from '../api/Axios';

export const useGetPrivateLesson = (
	direction: SortDirection,
	page: number,
	pageSize: number,
	sortBy: SortBy,
	contain?: string,
	category?: string,
	location?: string
) => {
	return useQuery<PaginateResults<PrivateLesson>>(
		['PrivateLesson', direction, page, pageSize, sortBy, contain, category, location],
		() => fetchPrivateLesson(direction, page, pageSize, sortBy, contain, location),
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
	category?: string,
	location?: string
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
		onError?: () => void;
		onSettled?: () => void;
	}
) => {
	return useMutation((data: PrivateLessonPost) => postPrivateLesson(data), {
		onSuccess: () => {
			if (callbacks?.onSuccess) callbacks.onSuccess();
		},
		onError: () => {
			if (callbacks?.onError) callbacks.onError();
		},
		onSettled: () => {
			if (callbacks?.onSettled) callbacks.onSettled();
		}
	});
};

const postPrivateLesson = async (data: PrivateLessonPost) => {
	return await axiosInstance.post<PrivateLessonPost>(`/privateLessons`, data, {
		headers: { 'Content-Type': 'application/json' }
	});
};
