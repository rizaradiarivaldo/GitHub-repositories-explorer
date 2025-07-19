import { fetchAPI } from "@/helpers/axios.interceptor";
import { apiSlice } from "../api/apiSlice";
import type { TItems, TRepo, TUserWithRepos } from "./usersApiTypes";

const apiStore = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getListUsers: builder.query<TUserWithRepos[], string>({
      query: (username) => ({
        url: `/search/users?q=${username}&per_page=5`,
        method: 'GET',
      }),
      transformResponse: async (response: { items: TItems }): Promise<TUserWithRepos[]> => {
        const usersWithRepos = await Promise.all(
          response.items.map(async (user) => {
            try {
              const res = await fetchAPI.get<TRepo[]>(`/users/${user.login}/repos`);
              return {
                ...user,
                repos: res.data,
              };
            } catch (error) {
              console.log(error)
              return {
                ...user,
                repos: [],
              };
            }
          })
        );

        return usersWithRepos;
      },
    }),
  }),
});

export const { useLazyGetListUsersQuery } = apiStore;
