import React from 'react';

import ContactPic from '../../../static/assets/images/peaceful-desk.jpg';
import  Github  from '../../../static/assets/images/icons/032-github.png';
import  LinkedIn  from '../../../static/assets/images/icons/052-linkedin.png';
import  StackOverflow  from '../../../static/assets/images/icons/083-stack overflow.png';
import  Dev from '../../../static/assets/images/icons/dev_to_icon.png';
import  Twitter from '../../../static/assets/images/icons/096-twitter.png';
 
export default function Contact() {
  return (
    <div className="contact-page-wrapper">
      <div
        className="page-left"
        style={{
          background: 'url(' + ContactPic + ') no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        alt="Laptop and Plant Image. Photo by Raul Varzar on Unsplash"
      ></div>
      <div className="page-right">
        <h1>Let's Connect</h1>

        <div className="contact-area">
          <a className="handle" href="https://twitter.com/tech_natural">
            <div className="icon">
              <img src={Twitter} alt="Twitter Icon" />
            </div>{' '}
            @tech_natural
          </a>

          <a
            className="handle"
            href="https://www.linkedin.com/in/haja-childs-dev-md/"
          >
            <div className="icon">
              <img src={LinkedIn} alt="LinkedIn Icon" />
            </div>
            haja-childs-dev-md
          </a>

          <a className="handle" href="https://www.dev.to/honeycomb">
            <div className="icon">
              <img src={Dev} alt="Dev.to Icon" />{' '}
            </div>
            @honeycomb
          </a>

          <a className="handle" href="https://www.github.com/HajaSChilds">
            <div className="icon">
              <img src={Github} alt="Github Icon" />
            </div>
            {' '}
            @HajaSChilds
          </a>

          <a className="handle"  href="https://stackoverflow.com/users/7258159/greentea?tab=profile">
            <div className="icon">
              <img src={StackOverflow} alt="Stack Overflow Icon" />
            </div>
            {' '}       
             @greentea
          </a>
        </div>
        <div className="attribution">
          <span>
            Icons made by{' '}
            <a
              href="https://www.flaticon.com/authors/pixel-perfect"
              title="Pixel perfect"
            >
              Pixel perfect{' '}
            </a>
            from{' '}
            <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

