import { useQuery } from '@sveltestack/svelte-query';
import type { SortBy } from 'src/enums/SortBy';
import type { SortDirection } from 'src/enums/SortDirection';
import type { Announcement } from 'src/models/Announcement';
import type { PaginateResults } from 'src/models/PaginateResults';
import axiosInstance from '../api/Axios';

export const useGetAnnouncement = (
	direction: SortDirection,
	page: number,
	pageSize: number,
	sortBy: SortBy
) => {
	return useQuery<PaginateResults<Announcement>>(
		['Announcement', direction, page, pageSize, sortBy],
		() => fetchAnnouncement(direction, page, pageSize, sortBy),
		{
			enabled: direction !== undefined
		}
	);
};

const fetchAnnouncement = async (
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
