import React, { Component } from 'react';
import moment from 'moment';
import Axios from "axios";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import NavigationContainer from './navigation/navigation-container';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Blog from './pages/blog';
import PortfolioDetail from './portfolio/portfolio-detail';
import NoMatch from "./pages/no-match";




export default class App extends Component {
  constructor() {
    super();

    this.getPortfolioItems = this.getPortfolioItems.bind(this);
  }
  
  getPortfolioItems() {
    const axios = require("axios");

    axios
      .get("https://hajasc.devcamp.space/portfolio/portfolio_items")
      .then(response => {
        // handle success
        console.log("response-data:", response);
      })
      .catch(error => {
        // handle error
        console.log(error);
      })
      
  }

  render() {
    this.getPortfolioItems();
    return (
      <div className="app">
        <h1>Haja's React Portfolio</h1>
        <div>{moment().format("MMMM Do YYYY, h:mm:ss a")}</div>
        <Router>
          <div>
            <NavigationContainer />
            <Switch>
              <Route
                exact
                path="/"
                activeClassName="nav-link-active"
                component={Home}
              />
              <Route
                path="/about-me"
                activeClassName="nav-link-active"
                component={About}
              />
              <Route
                path="/contact"
                activeClassName="nav-link-active"
                component={Contact}
              />
              <Route
                path="/blog"
                activeClassName="nav-link-active"
                component={Blog}
              />
              <Route path="/portfolio/:slug" component={PortfolioDetail}/>
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
