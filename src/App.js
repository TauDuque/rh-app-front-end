import React, { useEffect, useContext, useReducer } from "react";
import { Home, NewWorker, SingleWorker, Workers } from "./pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Loading, Navbar, SideMenu } from "./components";

/* 

<Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/newworker">
            <NewWorker />
          </Route>
          <Route exact path="singleworker">
            <SingleWorker />
          </Route>
          <Route exact path="workers">
            <Workers />
          </Route>
        </Switch>
      </Router>
*/

function App() {
  return (
    <div className="main-container">
      <NewWorker />
    </div>
  );
}

export default App;
