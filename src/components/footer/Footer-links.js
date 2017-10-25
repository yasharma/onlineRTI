import React from 'react';
import { Link } from 'react-router-dom';

// The Header creates links that can be used to navigate
// between routes.
const FooterLinks = ({data, categories}) => (
	<footer className="padding-40 clearfix">
      <div className="container">
          <div className="row">
            <div className="col-sm-4 col-md-4">
                <div className="footer-head">About Us</div>
                <p className="footer-para">
                  {data.site.summary}
                </p>
            </div>
            <div className="col-sm-4 col-md-4 top-xs-mobile-40">
                <div className="footer-head">Provide Services</div>
                <ul className="services-links">
                  {categories.map((value, index) => {
                      return (
                          <li key={index}>
                            <Link to={`/apply/${value.slug}`}>{value.title}</Link>
                          </li>
                      );
                  })}
                </ul>
            </div>
            <div className="col-sm-4 col-md-4 top-mobile-40">
                <ul className="address-list clearfix">
                  <li>
                    <div className="address-icon">
                      <i className="fa fa-map-marker" aria-hidden="true"></i>
                    </div>
                    <div className="address-box">
                        <h2>Address:</h2>
                        <span>{data.site.address}</span>
                    </div>
                  </li>
                  <li>
                    <div className="address-icon">
                      <i className="fa fa-mobile" aria-hidden="true"></i>
                    </div>
                    <div className="address-box">
                        <h2>Phone:</h2>
                        <span><a>{data.site.callus}</a></span>
                    </div>
                  </li>
                  <li>
                  	
                    <div className="address-icon">
                      <i className="fa fa-envelope-o" ></i>
                    </div>
                    <div className="address-box">
                        <h2>Email:</h2>
                        <span><a>{data.site.email}</a></span>
                    </div>
                  </li>
                </ul>
                <div className="share-social-list">
                  <h2>Social:</h2>
                  <ul>
                    {data.socials.map((value, index) => {
                      return (
                        <li key={index}><a href={value.post_link} target="_blank"> &nbsp;
                          <i className={`fa fa-${value.slug}`} aria-hidden="true"></i></a></li>
                      )
                    })}
                  </ul>
                </div>
            </div>
          </div> 
      </div>
    </footer>
);

export default FooterLinks;