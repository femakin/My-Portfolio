import React from "react";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import About from "./Components/About";
import Project from "./Components/Project";
import Resume from "./Components/Resume";


function App() {
  return (
    <Router>
    <div className="App">
      <div className="container ">
        <div className="row">
          <div className="col-lg-3">
            {/* <Sideb<div className="app_sidebar"></div> */}
            <Sidebar/>
          </div>
          <div className="col-lg-9 app_main-content">
            {/* navbar */}
            <Navbar/>
            <Switch>

            
            <Route exact path="/">
            <About/>
            </Route>
            <Route path="/projects">
              <Project/>
            </Route>
            <Route  path="/resume">
              <Resume/>
            </Route>
            <Route>
              <Redirect to="/" />
            </Route>
            </Switch>
          </div>
        </div>
      </div>
      
    </div>
    </Router>
  );
}

export default App;
