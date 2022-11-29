import { QueryClient, useMutation, useQuery } from '@sveltestack/svelte-query';
import type { SortBy } from 'src/enums/SortBy';
import type { SortDirection } from 'src/enums/SortDirection';
import type { JobOffer, JobOfferPost } from 'src/models/JobOffer';
import type { PaginateResults } from 'src/models/PaginateResults';
import axiosInstance from '../api/Axios';

export const invalidateJobOffer = (queryClient: QueryClient) => {
	queryClient.invalidateQueries('jobOffers');
};

export const useGetJobOffers = (
	direction: SortDirection,
	page: number,
	pageSize: number,
	sortBy: SortBy,
	contain?: string,
	location?: string,
	salaryDown?: string,
	salaryUp?: string
) => {
	return useQuery<PaginateResults<JobOffer>>(
		['jobOffers', direction, page, pageSize, sortBy, contain, location, salaryDown, salaryUp],
		() =>
			fetchJobOffers(direction, page, pageSize, sortBy, contain, location, salaryDown, salaryUp),
		{
			enabled: direction !== undefined
		}
	);
};

const fetchJobOffers = async (
	direction: SortDirection,
	page: number,
	pageSize: number,
	sortBy: SortBy,
	contain?: string,
	location?: string,
	salaryDown?: string,
	salaryUp?: string
) => {
	const response = await axiosInstance.get<PaginateResults<JobOffer>>('/jobOffers', {
		params: {
			direction: direction,
			page: page,
			pageSize: pageSize,
			sortBy: sortBy,
			contain: contain,
			location: location,
			salaryDown: salaryDown,
			salaryUp
		}
	});
	return response.data;
};

export const usePostJobOffers = (
	queryClient: QueryClient,
	callbacks?: {
		onSuccess?: () => void;
		onError?: () => void;
		onSettled?: () => void;
	}
) => {
	return useMutation((data: JobOfferPost) => postJobOffers(data), {
		onSuccess: () => {
			if (callbacks?.onSuccess) callbacks.onSuccess();
			invalidateJobOffer(queryClient);
		},
		onError: () => {
			if (callbacks?.onError) callbacks.onError();
		},
		onSettled: () => {
			if (callbacks?.onSettled) callbacks.onSettled();
		}
	});
};

const postJobOffers = async (data: JobOfferPost) => {
	return await axiosInstance.post<JobOfferPost>(`/jobOffers`, data, {
		headers: { 'Content-Type': 'application/json' }
	});
};

export const usePatchJobOffers = (
	queryClient: QueryClient,
	id: string,
	callbacks?: {
		onSuccess?: () => void;
		onError?: () => void;
		onSettled?: () => void;
	}
) => {
	return useMutation((data: JobOfferPost) => patchJobOffers(data, id), {
		onSuccess: () => {
			if (callbacks?.onSuccess) callbacks.onSuccess();
			invalidateJobOffer(queryClient);
		},
		onError: () => {
			if (callbacks?.onError) callbacks.onError();
		},
		onSettled: () => {
			if (callbacks?.onSettled) callbacks.onSettled();
		}
	});
};

const patchJobOffers = async (data: JobOfferPost, id: string) => {
	return await axiosInstance.patch<JobOfferPost>(`/jobOffers/${id}`, data, {
		headers: { 'Content-Type': 'application/json' }
	});
};

export const useDeleteJobOffers = (
	queryClient: QueryClient,
	callbacks?: {
		onSuccess?: () => void;
		onError?: () => void;
		onSettled?: () => void;
	}
) => {
	return useMutation(
		(jobOfferId: string) => {
			return deleteJobOffers(jobOfferId);
		},
		{
			onSuccess: () => {
				if (callbacks?.onSuccess) callbacks.onSuccess();
				invalidateJobOffer(queryClient);
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

const deleteJobOffers = async (jobOfferId: string) => {
	return await axiosInstance.delete(`/jobOffers/${jobOfferId}`);
};
