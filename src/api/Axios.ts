import axios from 'axios';
import { get } from 'svelte/store';
import { storagedAuth } from './Auth';

const axiosInstance = axios.create({
	baseURL: 'http://localhost:8080'
});

axiosInstance.interceptors.request.use((config) => {
	const accessToken = get(storagedAuth) != null ? get(storagedAuth)?.accessToken : null;
	if (accessToken != null) 
        config.headers!.Authorization = `Bearer ${accessToken}`;
	return config;
});

export default axiosInstance;
