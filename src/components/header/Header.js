import React, {Component} from 'react';
import {Navbar, Nav, NavItem} from "react-bootstrap";
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import AuthButton from './AuthButton';
import Login from '../Login/login';
import SignUp from '../Login/SignUp';
import {connect} from 'react-redux';

class Header extends Component {
	constructor() {
		super();
		this.state = {
			showLoginDialog: false,
			showSignUpDialog: false,
		}
	}
	showDialog(name) {
		let _opp = name === 'showLoginDialog' ? 'showSignUpDialog' : 'showLoginDialog';
		this.setState({[name]: true, [_opp]: false});
	}
	hideDialog(name) {
		this.setState({[name]: false});
	}
	render() {
		const {token, dispatch} = this.props;
		return (
			<div>
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
								<LinkContainer to="/blog">
									<NavItem eventKey={1}>Blog</NavItem>
								</LinkContainer>
								{token &&
								<LinkContainer to="/myrti">
									<NavItem eventKey={2}>My RTis</NavItem>
								</LinkContainer>	
								}
								<NavItem eventKey={2}>Pricing</NavItem>
								<NavItem eventKey={2}>Teams</NavItem>
								<LinkContainer to="/contact-us">
									<NavItem eventKey={2}>Contact</NavItem>
								</LinkContainer>	
							</Nav>
						</Navbar.Collapse>
					</Navbar>
					<div className="header-right-menu">
						<LinkContainer to="/apply-now">
							<NavItem eventKey={1}>Apply Now</NavItem>
						</LinkContainer>
						<AuthButton token={token} dispatch={dispatch} showLogin={() => this.showDialog('showLoginDialog')}/>
					</div>
				</header>
				<Login show={this.state.showLoginDialog} 
				showSignUpDialog={() => this.showDialog('showSignUpDialog')}
				hideDialog={() => this.hideDialog('showLoginDialog')}/>
				<SignUp show={this.state.showSignUpDialog} 
				showLoginDialog={() => this.showDialog('showLoginDialog')}
				hideDialog={() => this.hideDialog('showSignUpDialog')}/>
			</div>    
		);
	}	
}	

const mapStateToProps = (state) => ({
	token: state.auth.token
});

export default connect(mapStateToProps)(Header);