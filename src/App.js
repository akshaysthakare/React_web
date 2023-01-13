import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import About from "./About";
import Login from './Login';
import Register from "./Register";
import Footer from "./Footer";
import {Route, Switch, Redirect} from "react-router-dom";
import Navbar from "./Navbar";

const App = () => {
  return (
    <>
    <Navbar />
    <Switch>
      <Route exact path="/"  component={Home} />
      <Route exact path="/about"  component={About} />
      <Route exact path="/login"  component={Login} />
      <Route exact path="/register"  component={Register} />
      <Redirect to="/" />
      <Home />
    </Switch>
    <Footer />

    </>
  );
};

export default App;
