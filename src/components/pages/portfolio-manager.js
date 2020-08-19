import React, { Component } from 'react'; 
import axios from 'axios';

 
export default class PortfolioManager extends Component {
    constructor() {
        super();

        this.state = {
            portfolioItems: []
        }
    }

    getPortfolioItems() {
        axios.get("https://hajasc.devcamp.space/portfolio/portfolio_items", {withCredentials: true})
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
               <h1>Portfolio form...</h1>
           </div>

           <div className="portfolio-items-section">
               <h1>Portfolio items...</h1>
           </div>
       </div>
     );
    };
}
