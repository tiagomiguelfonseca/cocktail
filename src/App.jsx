import { QueryClientProvider } from 'react-query';
import { queryClient } from "./utils/Query/queryClient";
import MainRouter from './router/Router';
import Theme from "./utils/Theme/Theme";
import { ReactQueryDevtools } from 'react-query/devtools'

function App() {
  return (
      <QueryClientProvider client={queryClient}>
        <Theme>
          <MainRouter />
        </Theme>
        <ReactQueryDevtools initialIsOpen={true} />
      </QueryClientProvider>
    
  );
}

export default App;
