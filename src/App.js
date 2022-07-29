import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./pages/landingPage/LandingPage";

function App() {
  return (
      <Router>
          <div className="App">
              <div className="content">
                  <Switch>
                      <Route exact path="/">
                          <LandingPage />
                      </Route>
                  </Switch>
              </div>

          </div>
      </Router>
  );
}

export default App;
