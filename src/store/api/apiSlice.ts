import { type AxiosRequestConfig, type Method, AxiosError, } from 'axios';
import { type BaseQueryFn, createApi, } from '@reduxjs/toolkit/query/react';
import { fetchAPI } from '@/helpers/axios.interceptor';

type AxiosBaseQueryArgs = {
  url: string;
  method: Method;
  data?: AxiosRequestConfig['data'];
  params?: AxiosRequestConfig['params'];
};

type AxiosBaseQueryError = {
  status?: number;
  data: any;
};

export const axiosBaseQuery =
  ({ baseUrl }: { baseUrl: string } = { baseUrl: '' }): BaseQueryFn<AxiosBaseQueryArgs, unknown, AxiosBaseQueryError> =>
    async ({ url, method, data, params }) => {
      try {
        const result = await fetchAPI({
          url: baseUrl + url,
          method,
          data,
          params,
        });
        return { data: result.data };
      } catch (axiosError) {
        const err = axiosError as AxiosError;
        return {
          error: {
            status: err.response?.status,
            data: err.response?.data ?? err.message,
          },
        };
      }
    };

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: axiosBaseQuery({
    baseUrl: import.meta.env.VITE_APP_BASE_URL_API,
  }),
  tagTypes: ['Users', 'Repositories'],
  endpoints: () => ({}),
});