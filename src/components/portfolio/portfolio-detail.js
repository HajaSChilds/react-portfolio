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

       
        const bannerImageStyles = {
          backgroundImage: 'url(' + banner_image_url + ')',
          width: '100%',
          height: '100%',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',        
        };  

      return (
        <div className="portfolio-detail-wrapper">
          <div className="banner">
            {' '}
            <img style={bannerImageStyles} />
          </div>
          <h2>{name}</h2>
          <div className="site-link">
            {' '}
            <a href={url} target="_blank" rel="noopener">
              View Project
            </a>
          </div>
          <div className="description">
            <p>
              Type of Project: {''}
              {category}
            </p>
            <p>{description}</p>
          </div>
        </div>
      );
    }
}