import { QueryClient, useMutation, useQuery } from '@sveltestack/svelte-query';
import type { SortBy } from 'src/enums/SortBy';
import type { SortDirection } from 'src/enums/SortDirection';
import type { User } from 'src/models/Admin';
import type { PaginateResults } from 'src/models/PaginateResults';
import { pageSize } from 'src/utils/globalState';
import { get, type Writable } from 'svelte/store';
import axiosInstance from '../api/Axios';
import type { AxiosError } from 'axios';
import type { SearchUser } from '../models/User';
import type { AxiosResponse } from 'axios';

export const invalidateUser = (queryClient: QueryClient) => {
	queryClient.invalidateQueries('Users');
};

export const useGetUsers = (
	direction: SortDirection,
	page: Writable<number>,
	sortBy: SortBy,
	searchBodyState: Writable<SearchUser>
) => {
	return useQuery<PaginateResults<User>>(
		['Users', direction, page, sortBy],
		() => fetchUsers(direction, get(page), get(pageSize), get(searchBodyState).type, get(searchBodyState).email, sortBy),
		{
			enabled: direction !== undefined
		}
	);
};

const fetchUsers = async (
	direction: SortDirection,
	page: number,
	pageSize: number,
	userType: string,
	email: string,
	sortBy: SortBy
) => {
	const response = await axiosInstance.get<PaginateResults<User>>('/users', {
		params: {
			direction: direction,
			type: userType,
			email: email,
			page: page,
			pageSize: pageSize,
			sortBy: sortBy
		}
	});
	return response.data;
};

export const banUser = async(uuid: string) => {
	return await axiosInstance.patch<string>(`/users/ban/${uuid}`);
};


export const usePostCreateCollege = (
	queryClient: QueryClient,
	callbacks?: {
		onSuccess?: (response: any) => void;
		onError?: (error: AxiosError) => void;
		onSettled?: () => void;
	}
) => {
	return useMutation<any, any, any, any>(
		(data: any) => {
			return postLogin(data);
		},
		{
			onSuccess: (response: AxiosResponse<any, any>) => {
				if (callbacks?.onSuccess) callbacks.onSuccess(response.data);
			},
			onError: (error: AxiosError) => {
				if (callbacks?.onError) callbacks.onError(error);
			},
			onSettled: () => {
				if (callbacks?.onSettled) callbacks.onSettled();
			}
		}
	);
};

const postLogin = async (data: any) => {
	return await axiosInstance.post<any>(`/colleges`, data, {
		headers: { 'Content-Type': 'application/json' }
	});
};