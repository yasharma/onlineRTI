import React from 'react';

const Banner = () => (
	<div>
	<div className="home-banner clearfix">
      <div className="home-banner-wrapper"></div>
      <div className="display-table">
        <div className="display-table-cell">
            <div className="home-banner-content">
              <h2 className="banner-head">File and track RTI to any central or state government office in India</h2>
              <div className="search-form">
                <input type="text"  className="form-control" placeholder="Search for RTI types -  Eg: Exam Copy"/>
                <button type="button" className="btn btn-info search-btn">Search</button>
              </div>
              <div className="tag-line">
                <span>Didn't find your RTI Type ? Click on <a>"New RTI Query"</a></span>
              </div>
            </div>
        </div>
      </div>
      <div className="social-links">
        <ul>
          <li><a className="facebook">&nbsp;<i className="fa fa-facebook" aria-hidden="true"></i></a></li>
          <li><a className="twitter">&nbsp;<i className="fa fa-twitter" aria-hidden="true"></i></a></li>
          <li><a className="googleplus">&nbsp;<i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
          <li><a className="linkedin">&nbsp;<i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
          <li><a className="instagram">&nbsp;<i className="fa fa-instagram" aria-hidden="true"></i></a></li>
        </ul>
      </div>
    </div>
	</div>
);

export default Banner;