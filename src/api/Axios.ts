import axios from 'axios';
import { get } from 'svelte/store';
import { storagedAuth } from './Auth';

const axiosInstance = axios.create({
	baseURL: process.env.NODE_ENV === 'production' ? "/api" : "http://localhost:8080/api"
});

axiosInstance.interceptors.request.use((config) => {
	const accessToken = get(storagedAuth) != null ? get(storagedAuth)?.accessToken : null;
	if (accessToken != null) 
        config.headers!.Authorization = `Bearer ${accessToken}`;
	return config;
});

export default axiosInstance;
