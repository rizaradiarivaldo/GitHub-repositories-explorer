## ATask Repositories

A React web application to search for GitHub users and display a list of their repositories.

### Key Features

- **Search GitHub Users:**
  - Input a username to search for a GitHub user.
  - Displays the user's profile along with their repositories.
- **Repository Details:**
  - Each repository shows its name, description, star count, and fork count.
  - Includes a direct link to the repository page on GitHub.
- **Modern UI:**
  - Uses Accordion, Button, Input, and Skeleton components for an interactive interface.
- **Loading State:**
  - Skeleton loader while fetching data.

### Main Code Structure

- `src/components/ui/pages/search-repo.tsx` — Main page for user and repository search.
- `src/store/` — State management using Redux Toolkit and RTK Query.
- `src/helpers/axios.interceptor.ts` — API request configuration and interceptor using Axios.
- `src/lib/utils.ts` — Utility function for merging classNames.

### Third Party Libraries & Tools

- **React** — Core UI library.
- **Redux Toolkit & RTK Query** — State management and data fetching.
- **Axios** — HTTP client for communicating with the GitHub API.
- **Vite** — Build tool and dev server.
- **Tailwind CSS + shadcn** — Utility-first styling framework.

🚀 [Explore Application](https://rizaradiarivaldo.github.io/GitHub-repositories-explorer)
