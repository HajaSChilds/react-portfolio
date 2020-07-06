import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import NavigationContainer from './navigation/navigation-container';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Blog from './pages/blog';
import PortfolioDetail from './portfolio/portfolio-detail';
import NoMatch from "./pages/no-match";




export default class App extends Component {
 

  render() {
   
    return (
      <div className="container">
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
