export type TUser = {
  login: string;
  id: number;
};

export type TItems = TUser[];

export type TRepo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
};

export type TUserWithRepos = TUser & {
  repos: TRepo[];
};