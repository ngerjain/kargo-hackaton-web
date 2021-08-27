import "styles/global.css";
import { QueryClient, QueryClientProvider } from "react-query";

import Home from "pages";
import Login from "pages/login";
import Trucks from "pages/trucks";
import { RadioButton } from "components";
import { Navbar } from "components/navbar";
import Drivers from "pages/drivers";
import Shipments from "pages/shipments";

function App(): JSX.Element {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        {/* <Home /> */}
        {/* <Login /> */}
        {/* <Trucks /> */}
        {/* <Drivers /> */}
        <Shipments />
      </div>
    </QueryClientProvider>
  );
}

export default App;
