import React, { Component} from 'react';
import axios from "axios";

import PortfolioItem from './portfolio-item';
import { relativeTimeThreshold } from 'moment';

export default class PortfolioContainer extends Component {
    constructor() {
    super();
    
    this.state = {
      pageTitle: "Welcome to my portfolio",
      isLoading: false,
      data: [ ]
      
    };


    this.getPortfolioItems = this.getPortfolioItems.bind(this);

    this.handlePageTitleUpdate = this.handlePageTitleUpdate.bind(this);  

    this.handleFilter = this.handleFilter.bind(this);
    }


    handleFilter(filter) {
        this.setState({
          data: this.state.data.filter(item => {
            return item.category === filter;
          })
        }); 
    }

    getPortfolioItems() { 
      const axios = require('axios'); 

      axios
        .get("https://hajasc.devcamp.space/portfolio/portfolio_items")
        .then(response => {
          // handle success
          console.log("response-data:", response);
          this.setState({
            data: response.data.portfolio_items
          })
        })
        .catch(error => {
          // handle error
          console.log(error);
        })

  }

    portfolioItems() {
       
        return this.state.data.map(item => {

            return <PortfolioItem key={item.id}title={item.name} url={item.url} slug={item.id}  />;

        })
    }

    handlePageTitleUpdate() {
      this.setState ({
        pageTitle: "Something Else"
      });
    }

    componentDidMount() {
        this.getPortfolioItems(); 
    }


    render() {
      if (this.state.isLoading) {
        return <div>Loading..</div>;
      }
     
        return (
          <div>
            <h2>{this.state.pageTitle}</h2>
            <br />
            <button onClick={() => this.handleFilter("eCommerce")}>
              eCommerce
            </button>
            <button onClick={() => this.handleFilter("Scheduling")}>
              Scheduling
            </button>
            <button onClick={() => this.handleFilter("Enterprise")}>
              Enterprise
            </button>

            {this.portfolioItems()}

            <hr />

            <button
              onClick={this.handlePageTitleUpdate.bind(
                this.handlePageTitleUpdate
              )}
            >
              Change Title
            </button>
          </div>
        );
    }
}