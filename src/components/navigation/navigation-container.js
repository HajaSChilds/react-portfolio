import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
 
export default class NavigationComponent extends Component {
    constructor() {
        super();
    }

    render() {
        return(
            <div>
              <NavLink exact to="/">Home</NavLink>
              <NavLink to ="/about-me">About</NavLink>
              <NavLink to="/contact">Contact</NavLink>
              <NavLink to="/blog">Blog</NavLink>
              { true ? <NavLink to="/new-blog">Add Blog</NavLink> : null }
             </div>
            );
    }
}