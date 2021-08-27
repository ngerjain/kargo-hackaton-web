import "styles/global.css";
import { QueryClient, QueryClientProvider } from "react-query";

import Home from "pages";
import Login from "pages/login";
import Trucks from "pages/trucks";
import { RadioButton } from "components";
import { Navbar } from "components/navbar";
import Drivers from "pages/drivers";
import Shipments from "pages/shipments";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Redirect } from "react-router";

function App(): JSX.Element {
  const role = localStorage.getItem("role");

  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/driver">
            {role === "transporter" ? <Drivers /> : <Login />}
          </Route>
          <Route path="/truck">
            {role === "transporter" ? <Trucks /> : <Login />}
          </Route>
          <Route path="/shipment">{role ? <Shipments /> : <Login />}</Route>
        </Switch>
      </Router>
      <div className="App"></div>
    </QueryClientProvider>
  );
}

export default App;
