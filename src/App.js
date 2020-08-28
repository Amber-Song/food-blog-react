import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import NavBarCity from "./components/NavBarCity";
import MainContentCityManagement from "./components/MainContentCityManagement";
import MainContentIndex from "./components/MainContentIndex";

function App() {
  return (
    <Router>
      <div className="page">
        <Header />
        <NavBarCity />

        <Switch>
          <Route path={`/FoodBlog/:cityName`}>
            <MainContentCityManagement />
          </Route>
          <Route path={`/FoodBlog`}>
            <MainContentIndex />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
