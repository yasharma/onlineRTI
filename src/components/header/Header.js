import React from 'react';
import {Navbar, Nav, NavItem, Modal, Button, Form} from "react-bootstrap";
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import FieldGroup from '../FieldGroup';


class Header extends React.Component {
	constructor () { 
		super();
		this.state = {
			showLoginModal: false,
			showSignupModal: false,
			user: {
				email: '',
				password: ''
			}
		};	
	}

	close (modal) {
		if( modal === 'login' ) {
			this.setState({ showLoginModal: false });
		} else {
			this.setState({ showSignupModal: false });
		}
	}

	login(event) {
		event.preventDefault();
		console.log(this.state.user);
		console.log(event.target.value);
	}

	signup(event) {
		event.preventDefault();
		console.log(this.state.user);
		console.log(event.target.value);
	}

	open (modal) {
		if( modal === 'login' ) {
			this.close('signup');
			this.setState({ showLoginModal: true });
		} else {
			this.close('login');
			this.setState({ showSignupModal: true });
		}
	}
	render() {
		return (
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
					<NavItem onClick={() => this.open('login')} eventKey={1}>Login</NavItem>
				</Nav>
				{/* ================================================================================ */}
				{/* ================================LOGIN=========================================== */}
				{/* ================================================================================ */}
				<Modal className="login-popup" show={this.state.showLoginModal} onHide={() => this.close('login')}>
			    	<Modal.Header closeButton>
			        	<Modal.Title>Login</Modal.Title>
			        </Modal.Header>
			        <Form onClick={(e) => this.login(e)}>
				        <Modal.Body>
				            <FieldGroup
								id="Email"
								type="email"
								label="Email address"
								name="email"
								value={this.state.user.email}
								placeholder="Enter email"
							/>
							<FieldGroup
								id="Password"
								type="password"
								label="Password"
								name="password"
								value={this.state.user.password}
								placeholder="Enter password"
							/>
				        </Modal.Body>
				        <Modal.Footer>
				        	<Button bsStyle="primary" type="submit" className="btn-info btn-block" onClick={() => this.close()}>Login</Button>
				        	<p><a href onClick={() => this.open('signup')}>Don't have an account?</a></p>
				        </Modal.Footer>
				    </Form>    
			    </Modal>

			    {/* ================================================================================ */}
				{/* ================================SIGNUP========================================== */}
				{/* ================================================================================ */}
				<Modal className="login-popup" show={this.state.showSignupModal} onHide={() => this.close('signup')}>
			    	<Modal.Header closeButton>
			        	<Modal.Title>SignUp</Modal.Title>
			        </Modal.Header>
			        <Form onClick={(e) => this.signup(e)}>
				        <Modal.Body>
				            <FieldGroup
								id="Email"
								type="email"
								label="Email address"
								name="email"
								value={this.state.user.email}
								placeholder="Enter email"
							/>
							<FieldGroup
								id="Password"
								type="password"
								label="Password"
								name="password"
								value={this.state.user.password}
								placeholder="Enter password"
							/>
							<FieldGroup
								id="Password"
								type="password"
								label="Confirm Password"
								name="password"
								value={this.state.user.password}
								placeholder="Enter password"
							/>
				        </Modal.Body>
				        <Modal.Footer>
				        	<Button bsStyle="primary" type="submit" className="btn-info btn-block" onClick={() => this.close()}>SignUp</Button>
				        	<p><a href onClick={() => this.open('login')}>Already have an account?</a></p>
				        </Modal.Footer>
				    </Form>    
			    </Modal>
			</header>    
		);
	}	
}	
export default Header;