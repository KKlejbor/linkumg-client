import { QueryClient, useMutation, useQuery } from '@sveltestack/svelte-query';
import type { SortBy } from 'src/enums/SortBy';
import type { SortDirection } from 'src/enums/SortDirection';
import type { Announcement, AnnouncementPost } from 'src/models/Announcement';
import type { PaginateResults } from 'src/models/PaginateResults';
import { pageSize } from 'src/utils/globalState';
import { get, type Writable } from 'svelte/store';
import axiosInstance from '../api/Axios';

export const invalidateAnnouncement = (queryClient: QueryClient) => {
	queryClient.invalidateQueries('Announcements');
	queryClient.invalidateQueries('Announcement');
};

export const useGetAnnouncements = (
	direction: SortDirection,
	page: Writable<number>,
	sortBy: SortBy
) => {
	return useQuery<PaginateResults<Announcement>>(
		['Announcements', direction, page, sortBy],
		() => fetchAnnouncements(direction, get(page), get(pageSize), sortBy),
		{
			enabled: direction !== undefined
		}
	);
};

const fetchAnnouncements = async (
	direction: SortDirection,
	page: number,
	pageSize: number,
	sortBy: SortBy
) => {
	const response = await axiosInstance.get<PaginateResults<Announcement>>('/announcements', {
		params: {
			direction: direction,
			page: page,
			pageSize: pageSize,
			sortBy: sortBy
		}
	});
	return response.data;
};


export const useGetAnnouncement = (announcementId: string) => {
  return useQuery<Announcement>(
    ['Announcement', announcementId],
    () => fetchAnnouncement(announcementId),
    {
      enabled: announcementId !== undefined
    }
  );
};

const fetchAnnouncement = async (announcementId: string) => {
  const response = await axiosInstance.get<Announcement>(`/announcements/${announcementId}`);
  return response.data;
};

export const usePostAnnouncement = (
	queryClient: QueryClient,
	callbacks?: {
		onSuccess?: () => void;
		onError?: () => void;
		onSettled?: () => void;
	}
) => {
	return useMutation((data: AnnouncementPost) => postAnnouncement(data), {
		onSuccess: () => {
			if (callbacks?.onSuccess) callbacks.onSuccess();
		},
		onError: () => {
			if (callbacks?.onError) callbacks.onError();
		},
		onSettled: () => {
			if (callbacks?.onSettled) callbacks.onSettled();
			invalidateAnnouncement(queryClient);
		}
	});
};

const postAnnouncement = async (data: AnnouncementPost) => {
	return await axiosInstance.post<AnnouncementPost>(`/announcements`, data, {
		headers: { 'Content-Type': 'application/json' }
	});
};

export const usePatchAnnouncement = (
	queryClient: QueryClient,
	id: string,
	callbacks?: {
		onSuccess?: () => void;
		onError?: () => void;
		onSettled?: () => void;
	}
) => {
	return useMutation((data: AnnouncementPost) => patchAnnouncement(data, id), {
		onSuccess: () => {
			if (callbacks?.onSuccess) callbacks.onSuccess();
		},
		onError: () => {
			if (callbacks?.onError) callbacks.onError();
		},
		onSettled: () => {
			if (callbacks?.onSettled) callbacks.onSettled();
			invalidateAnnouncement(queryClient);
		}
	});
};

const patchAnnouncement = async (data: AnnouncementPost, id: string) => {
	return await axiosInstance.patch<AnnouncementPost>(`/announcements/${id}`, data, {
		headers: { 'Content-Type': 'application/json' }
	});
};


export const useDeleteAnnouncement = (
	queryClient: QueryClient,
	callbacks?: {
		onSuccess?: () => void;
		onError?: () => void;
		onSettled?: () => void;
	}
) => {
	return useMutation(
		(announcementId: string) => {
			return deleteAnnouncement(announcementId);
		},
		{
			onSuccess: () => {
				if (callbacks?.onSuccess) callbacks.onSuccess();
				invalidateAnnouncement(queryClient);
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

const deleteAnnouncement = async (announcementId: string) => {
	return await axiosInstance.delete(`/announcements/${announcementId}`);
};
