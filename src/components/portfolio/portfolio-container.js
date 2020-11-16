import React, { Component} from 'react';
import axios from "axios";

import PortfolioItem from './portfolio-item';


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
      if(filter === "CLEAR_FILTERS") {
        this.getPortfolioItems();
      } else {
        this.getPortfolioItems(filter);
      }
    }

    getPortfolioItems(filter = null) { 
      // const axios = require('axios'); 

      axios
        .get("https://hajasc.devcamp.space/portfolio/portfolio_items")
        .then(response => {
          if(filter) {
            this.setState({
              data: response.data.portfolio_items.filter(item => {
                return item.category === filter
              }),
            });
          } else {
            this.setState({
              data: response.data.portfolio_items,
            });
          }
        })
        .catch(error => {
          // handle error
          console.log(error);
        })

  }

    portfolioItems() {
       
        return this.state.data.map(item => {
        
            return <PortfolioItem 
            key = {item.id}
            item = {item}  />;

        });
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
          <div className="homepage-wrapper">
            <div className="filter-links">
              <button
                className="btn"
                onClick={() => this.handleFilter('Business')}
              >
                Business
              </button>
              <button
                className="btn"
                onClick={() => this.handleFilter('Productivity')}
              >
                Productivity
              </button>
              <button
                className="btn"
                onClick={() => this.handleFilter('Entertainment')}
              >
                Entertainment
              </button>
              <button
                className="btn"
                onClick={() => this.handleFilter('CLEAR_FILTERS')}
              >
                All Projects
              </button>
            </div>
            <div className="portfolio-items-wrapper">
              {this.portfolioItems()}
            </div>
          </div>
        );
      }
    }

