import React from 'react';
import {Navbar, Nav, NavItem} from "react-bootstrap";
import { Link, NavLink } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

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
					<LinkContainer to="/about-us">
						<NavItem eventKey={1}>About</NavItem>
					</LinkContainer>
					<NavItem eventKey={2}>My RTis</NavItem>
					<NavItem eventKey={2}>Pricing</NavItem>
					<NavItem eventKey={2}>Teams</NavItem>
					<LinkContainer to="/contact-us">
						<NavItem eventKey={2}>Contact</NavItem>
					</LinkContainer>	
				</Nav>
				
			</Navbar.Collapse>
		</Navbar>
		<Nav className="header-right-menu">
			<LinkContainer to="/apply-now">
				<NavItem eventKey={1}>Apply Now</NavItem>
			</LinkContainer>
			<LinkContainer to="/login">
				<NavItem eventKey={1}>Login</NavItem>
			</LinkContainer>
		</Nav>
	</header>	
);
export default Header;