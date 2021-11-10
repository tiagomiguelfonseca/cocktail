import { QueryClient } from "react-query";
import ComponentForEmptyList from "../../components/ComponentForEmptyList";

const queryClientConfig = {
  defaultOptions: {
    queries: {
      retry: 2,
      staleTime: 5000,
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
      retry: (failureCount, error) => {
        return <ComponentForEmptyList />;
      },
    },
  },
};
export const queryClient = new QueryClient(queryClientConfig);
