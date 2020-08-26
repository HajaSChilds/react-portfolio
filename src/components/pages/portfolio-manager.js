import React, { Component } from 'react'; 
import axios from 'axios';

import PortfolioSidebarList from "../portfolio/portfolio-sidebar-list";
import PortfolioForm from '../portfolio/portfolio-form';
 
export default class PortfolioManager extends Component {
    constructor() {
        super();

        this.state = {
            portfolioItems: []
        }

        this.handleSuccessfulFormSubmission=this.handleSuccessfulFormSubmission.bind(this);
        this.handleFormSubmissionError=this.handleFormSubmissionError.bind(this);
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
           <PortfolioSidebarList data={this.state.portfolioItems} />
         </div>
       </div>
     );
    };
}
