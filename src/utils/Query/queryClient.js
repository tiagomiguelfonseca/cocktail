import { QueryClient } from "react-query";


const queryClientConfig = {
  defaultOptions: {
    queries: {
      retry: 200,
      staleTime: 1000 * 30, // 30 seconds
      cacheTime: 5000,
      refetchOnMount: "always",
      refetchOnWindowFocus: "always",
      refetchOnReconnect: "always",
      refetchInterval: 1000 * 30, //30 seconds
      refetchIntervalInBackground: false,
      suspense: false,
      setTimeout: 0,
    },
    mutations: {
      retry: 2,
    },
  },
};
export const queryClient = new QueryClient(queryClientConfig);
