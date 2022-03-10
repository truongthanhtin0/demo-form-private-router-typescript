import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import PrivateLayout from "./Layouts/PrivateLayout";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Product } from "./pages/Product";
import { Profile } from "./pages/Profile";
import { Register } from "./pages/Register";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />

          <PrivateLayout path="/product" component={Product} />
          <PrivateLayout path="/profile" component={Profile} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
