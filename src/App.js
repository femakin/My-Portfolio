import React from "react";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import { Route, Switch, Redirect, useLocation } from "react-router-dom";
import About from "./Components/about/About";
import Project from "./Components/Project";
import Resume from "./Components/Resume";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <div className="container app_container">
        <div className="row app_row">
          <div className="col-lg-3">
            {/* <Sideb<div className="app_sidebar"></div> */}
            <Sidebar />
          </div>
          <div className="col-lg-9 app_main-content">
            {/* navbar */}
            <Navbar />
            <AnimatePresence exitBeforeEnter>
              <Switch location={location} key={location.key}>
                <Route exact path="/">
                  <About />
                </Route>
                <Route path="/projects">
                  <Project />
                </Route>
                <Route path="/resume">
                  <Resume />
                </Route>
                <Route>
                  <Redirect to="/" />
                </Route>
              </Switch>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
