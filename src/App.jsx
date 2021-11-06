import './App.css';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query-devtools';
import { queryClient } from "./utils/Query/queryClient";
import MainRouter from './router/Router';
import Theme from "./utils/Theme/Theme";
import ContextProvider from "./components/ContextProvider";

function App() {
  return (
    <ContextProvider>
      <QueryClientProvider client={queryClient}>
        <Theme>
          <MainRouter />
        </Theme>
        <ReactQueryDevtools initialIsOpen={true} />
      </QueryClientProvider>
    </ContextProvider>
  );
}

export default App;
