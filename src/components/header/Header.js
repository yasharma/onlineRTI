import React from 'react';
import {Navbar, Nav, NavItem} from "react-bootstrap";
import { Link } from 'react-router-dom';

const Header = () => (
	<header>
		<Navbar fluid collapseOnSelect>
			<Navbar.Header>
				<Navbar.Brand>
					<Link to="/">online <span>RTI</span></Link>
				</Navbar.Brand>
			  	<Navbar.Toggle />
			</Navbar.Header>
			<Navbar.Collapse>
				<Nav>
					<NavItem eventKey={1} href="">About</NavItem>
					<NavItem eventKey={2} href="">My RTi’s</NavItem>
					<NavItem eventKey={2} href="">Pricing</NavItem>
					<NavItem eventKey={2} href="">Teams</NavItem>
					<NavItem eventKey={2} href="">Contact</NavItem>
				</Nav>
				
			</Navbar.Collapse>
		</Navbar>
		<ul className="header-right-menu">
			<li className="active"><a href="/">Apply Now</a></li>
			<li><Link to="/login">Login</Link></li>
		</ul>
	</header>	
);
export default Header;