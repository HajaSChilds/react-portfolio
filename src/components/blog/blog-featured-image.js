import React, { Component } from 'react';
 
const BlogFeaturedImage = props => {
    if (!props.img) {
        return null;
    }
    
    return (
      <div className="featured-image-wrapper">
        <img src={props.img} alt={props.title} />
      </div>
    );
   
}

export default BlogFeaturedImage;