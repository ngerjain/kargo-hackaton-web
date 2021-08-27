import "styles/global.css";
import { QueryClient, QueryClientProvider } from "react-query";

import Home from "pages";
import Login from "pages/login";

function App(): JSX.Element {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Home />
        {/* <Login /> */}
      </div>
    </QueryClientProvider>
  );
}

export default App;
