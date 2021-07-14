import React, { useEffect, useContext, useReducer } from "react";
import { Home, NewWorker, SingleWorker, Workers } from "./pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Loading, Navbar, SideMenu } from "./components";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route>
            <Home />
          </Route>
          <Route>
            <NewWorker />
          </Route>
          <Route>
            <SingleWorker />
          </Route>
          <Route>
            <Workers />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
