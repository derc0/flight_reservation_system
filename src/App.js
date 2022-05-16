import "./App.css";
import React from "react";
import { Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} /> 
      </Switch>
    </div>
  );
}

export default App;
