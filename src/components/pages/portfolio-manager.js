import React, { Component } from 'react'; 
import axios from 'axios';

import PortfolioSidebarList from "../portfolio/portfolio-sidebar-list";
import PortfolioForm from '../portfolio/portfolio-form';
 
export default class PortfolioManager extends Component {
    constructor() {
        super();

        this.state = {
            portfolioItems: [],
            portfolioToEdit: {}
        }

        this.handleSuccessfulFormSubmission = this.handleSuccessfulFormSubmission.bind(this);
        this.handleFormSubmissionError = this.handleFormSubmissionError.bind(this);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
        this.handleEditClick = this.handleEditClick.bind(this);
    }

    handleEditClick(portfolioItem) {
      axios.get(`https://https://hajasc.devcamp.space/portfolio/portfolio_items/${portfolioItem.id}`, {withCredentials: true}
      )
      .then(response => {
          this.setState({portfolioToEdit: portfolioItem   
          })
      })
    }
  
  

    handleDeleteClick(portfolioItem){
      axios.delete(`https://hajasc.devcamp.space/portfolio/portfolio_items/${portfolioItem.id}`, {withCredentials: true})
      .then(response => {
        this.setState({
          portfolioItems: this.state.portfolioItems.filter(item => {
            return item.id !== portfolioItem.id;
          })
        })
        return response.data;
      })
      .catch(error => {
          console.log('delete error', error);     
        })
        
      console.log("handleDeleteClick", portfolioItem )
    }

    handleSuccessfulFormSubmission(portfolioItem) {
      this.setState({
        portfolioItems: [portfolioItem].concat(this.state.portfolioItems)
      });
        console.log("handleSuccessfulFormSubmission", portfolioItem)
    }

    handleFormSubmissionError(error) {
        console.log("handleFormSubmissionError", error)
    }

    getPortfolioItems() {
        axios.get("https://hajasc.devcamp.space/portfolio/portfolio_items?order_by=created_at&direction=desc", {withCredentials: true})
        .then(response => {
            this.setState({
                portfolioItems: [...response.data.portfolio_items]
            })
        })
        .catch(error => {
            console.group("error in getPortfolioItems", error);
        })
    }

    componentDidMount() {
        this.getPortfolioItems();
    }


 render() {
     return (
       <div className="pm-wrapper">
         <div className="form-section">
           <PortfolioForm
             handleSuccessfulFormSubmission={
               this.handleSuccessfulFormSubmission
             }
             handleFormSubmissionError={this.handleFormSubmissionError}
           />
         </div>

         <div className="portfolio-items-section">
           <PortfolioSidebarList 
            handleDeleteClick={this.handleDeleteClick}
            data={this.state.portfolioItems}
            handleEditClick={this.handleEditClick} />
         </div>
       </div>
     );
    };
}
