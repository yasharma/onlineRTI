import React from 'react';
// import { Link } from 'react-router-dom';

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
	<header>
       	<nav className="navbar navbar-default">
	        <div className="container-fluid">
	            <div className="navbar-header">
	              <button type="button" className="navbar-toggle collapsed" 
	              data-toggle="collapse"  aria-expanded="false">
	                <span className="sr-only">Toggle navigation</span>
	                <span className="icon-bar"></span>
	                <span className="icon-bar"></span>
	                <span className="icon-bar"></span>
	              </button>
	              <a className="navbar-brand" >online <span>RTI</span></a>
	        	</div>
	            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
	              <ul className="nav navbar-nav">
	                <li><a href="/">About</a></li>
	                <li><a href="/">My RTi’s</a></li>
	                <li><a href="/">Pricing</a></li>
	                <li><a href="/">Teams</a></li>
	                <li><a href="/">Contact</a></li>
	              </ul>
		        </div>
	        </div>
	    </nav>
		<ul className="header-right-menu">
			<li className="active"><a href="/">Apply Now</a></li>
			<li><a href="/">Login</a></li>
		</ul>
    </header>
);

export default Header;