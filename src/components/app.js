import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';



import NavigationContainer from './navigation/navigation-container';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Blog from './pages/blog';
import PortfolioDetail from './portfolio/portfolio-detail';
import Auth from "./pages/auth";
import NoMatch from "./pages/no-match";




export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN"
    }

    this.handleSuccessfulLogin=this.handleSuccessfulLogin.bind(this);
    this.handleUnSuccessfulLogin=this.handleUnsuccessfulLogin.bind(this);
  }

  handleSuccessfulLogin(){
    this.setState({
      loggedInStatus: "LOGGED_IN"
    })
  }


  handleUnsuccessfulLogin(){
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN"
    })
  }

  checkLoginStatus(){
      return axios
        .get("https://api.devcamp.space/logged_in", {withCredentials: true
      })
        .then(response => {
          console.log("logged_in return", response);
        });
  }

  componentDidMount() {
    this.checkLoginStatus();
  }

  render() {
   
    return (
      <div className="container">
        <Router>
          <div>
            <NavigationContainer />

            <h2>{this.state.loggedInStatus}</h2>
            <Switch>
              <Route
                exact
                path="/"
                activeClassName="nav-link-active"
                component={Home}
              />
              <Route
                exact
                path="/auth"
                activeClassName="nav-link-active"
                render={props => (
                  <Auth{...props}
                  handleSuccessfulLogin={this.handleSuccessfulLogin}
                  handleUnSuccessfulLogin={this.handleUnsuccessfulLogin}/>
                )}
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
              <Route path="/portfolio/:slug" component={PortfolioDetail} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
