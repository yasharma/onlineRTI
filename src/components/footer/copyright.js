import React from 'react';

// The Header creates links that can be used to navigate
// between routes.
const Copyright = (props) => (
	 <div className="copyRight clearfix">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12 col-xs-12">
            <ul className="text-center">
              <li><a>{props.data.copyright}</a></li>
              <li><a>Terms &amp; Conditions</a></li>
            </ul>
          </div>
          {/*<div className="col-md-4 col-sm-6 col-xs-12 text-right">
            <span>Powered By: <text>Webpristine Technology</text></span>
          </div>*/}
        </div>
      </div>
    </div>
);

export default Copyright;