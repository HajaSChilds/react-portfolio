import React, {Component} from 'react';

import axios from 'axios';
 
export default class PortfolioDetail extends Component{
    constructor(props){
        super(props)

        this.state = {
            currentId: this.props.match.params.slug,
            portfolioItem: {}
        }
      
    }

    getPortfolioItem() {
         axios
           .get(
             `https://hajasc.devcamp.space/portfolio/portfolio_items/${this.state.currentId}`
           )
           .then((response) => {
             console.log('portfolio-detail-response:', response.data);
             this.setState({portfolioItem: response.data.portfolio_item});
           })
           .catch((error) => {
             console.log('portfolioDetailError', error);
           });

    }

    componentDidMount(){
       this.getPortfolioItem();
    }
  

    render(){
        const {banner_image_url, 
               category,
               description,
               logo_url,
               name,
               thumb_image_url,
               url
              } = this.state.portfolioItem;
      return(
         <div>
           <img src={banner_image_url} alt=""/>
           <h2>{name}</h2>
           <p>{description}</p>
       </div>
      );
    }
}