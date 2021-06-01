import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import SignUp from "./pages/SignUp/SignUp";
import Login from "./pages/Login/Login";
import "./styles/App.scss";
import Settings from "./pages/Settings/Settings";
import Profile from "./pages/Profile/Profile";

function App() {
  return (
    <Router>
      <Route path="/dashboard" exact component={Dashboard} />
      <Route path="/settings" exact component={Settings} />
      <Route path="/profile" exact component={Profile} />
      <Route path="/login" exact component={Login} />
      <Route path="/sign-up" exact component={SignUp} />
      <Route path="/" exact component={Login} />
    </Router>
  );
}

export default App;
