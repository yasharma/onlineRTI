import React, {Component} from 'react';
import {Navbar, Nav, NavItem} from "react-bootstrap";
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import AuthButton from './AuthButton';
import Login from '../Login/login';
import SignUp from '../Login/SignUp';
import {connect} from 'react-redux';
import { SHOW_LOGIN_POPUP } from '../../constant';

class Header extends Component {
	constructor() {
		super();
		this.state = {
			showSignUpDialog: false,
		}
	}
	showDialog(name) {
		let _state = (name === 'showLoginDialog') ? true : false,
		_opp = name === 'showLoginDialog' ? 'showSignUpDialog' : 'showLoginDialog';
		this.props.dispatch({
			type: SHOW_LOGIN_POPUP,
			displayLoginPopup: _state
		});
	
		this.setState({[name]: true, [_opp]: false});		
	}
	hideDialog(name) {
		
		if( name === 'showLoginDialog') {
			this.props.dispatch({
				type: SHOW_LOGIN_POPUP,
				displayLoginPopup: false
			})
		} else {
			this.setState({[name]: false});
		}	
	}
	render() {
		const {token, dispatch, showLoginDialog} = this.props;
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
				<Login show={showLoginDialog} 
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
	token: state.auth.token,
	showLoginDialog: state.loginPopup.displayLoginPopup
});

export default connect(mapStateToProps)(Header);