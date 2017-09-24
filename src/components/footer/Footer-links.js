import React from 'react';


// The Header creates links that can be used to navigate
// between routes.
const FooterLinks = (props) => (
	<footer className="padding-40 clearfix">
      <div className="container">
          <div className="row">
            <div className="col-sm-4 col-md-4">
                <div className="footer-head">About Us</div>
                <p className="footer-para">
                  {props.data.summary}
                </p>
            </div>
            <div className="col-sm-4 col-md-4 top-xs-mobile-40">
                <div className="footer-head">Provide Services</div>
                <ul className="services-links">
                  {/*<li><a>Passport Delay</a></li>
                  <li><a>Marksheet Verification</a></li>
                  <li><a>IncomeTax Refund</a></li>
                  <li><a>Occupancy Certificate</a></li>
                  <li><a>Pension Application</a></li>
                  <li><a>Police FIR Document</a></li>
                  <li><a>MP Funds Utilization</a></li>
                  <li><a>EPF Transfer Status</a></li>
                  <li><a>MlA Fund Utilization</a></li>
                  <li><a>Home / Land Details</a></li>
                  <li><a>New RTI Query</a></li>
                  <li><a>Exma Answer Copy</a></li>*/}
                  {props.categories.map((value, index) => {
                      return (
                          <li key={index}>
                            <a href={value.slug}>{value.title}</a>
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
                        <span>{props.data.address}</span>
                    </div>
                  </li>
                  <li>
                    <div className="address-icon">
                      <i className="fa fa-mobile" aria-hidden="true"></i>
                    </div>
                    <div className="address-box">
                        <h2>Phone:</h2>
                        <span><a>{props.data.callus}</a></span>
                    </div>
                  </li>
                  <li>
                  	
                    <div className="address-icon">
                      <i className="fa fa-envelope-o" ></i>
                    </div>
                    <div className="address-box">
                        <h2>Email:</h2>
                        <span><a>{props.data.email}</a></span>
                    </div>
                  </li>
                </ul>
                <div className="share-social-list">
                  <h2>Social:</h2>
                  <ul>
                    <li><a> &nbsp;<i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                    <li><a>&nbsp;<i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                    <li><a>&nbsp;<i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                  </ul>
                </div>
            </div>
          </div> 
      </div>
    </footer>
);

export default FooterLinks;