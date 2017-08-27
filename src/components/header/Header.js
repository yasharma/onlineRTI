import React from 'react';
import {Navbar, Nav, NavItem, Modal, Button, Form} from "react-bootstrap";
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import FieldGroup from '../FieldGroup';
import {FormErrors} from '../FormErrors';

class Header extends React.Component {
	constructor () { 
		super();
		this.state = {
			showLoginModal: false,
			showSignupModal: false,
			showSuccessModal: false,
			email: '',
			password: '',
			confirm_password: '',
			formErrors: { email:'', password: '', confirm_password: ''},
			emailValid: false,
			passwordValid: false,
			formValid: false,
			passwordMatch: false
		};	
	}

	close (modal) {
		this.setState({
			email: '',
			password: '',
			confirm_password: '',
			formErrors: { email:'', password: '', confirm_password: ''}
		});
		if( modal === 'login' ) {
			this.setState({ showLoginModal: false });
		} else if(modal === 'signup') {
			this.setState({ showSignupModal: false });
		} else if(modal === 'success') {
			this.setState({ showSuccessModal: false });
		}
	}

	login(event) {
		event.preventDefault();
		console.log(this.state.email);
		console.log(this.state.password);
		this.open('success');
	}

	signup(event) {
		event.preventDefault();
		console.log(this.state.email);
		console.log(this.state.password);
		console.log(this.state.confirm_password);
	}

	open (modal) {
		if( modal === 'login' ) {
			this.close('signup');
			this.setState({ showLoginModal: true });
		} else if (modal === 'signup') {
			this.close('login');
			this.setState({ showSignupModal: true });
		} else if (modal === 'success') {
			this.close('login');
			this.close('signup');
			this.setState({ showSuccessModal: true });
		}
	}

	handleUserInput (e) {
  		const name = e.target.name;
  		const value = e.target.value;
  		this.setState({[name]: value}, () => { this.validateField(name, value) });	
	}

	errorClass(error) {
   		return(error.length === 0 ? null : 'error');
	}

	validateField(fieldName, value) {
		let fieldValidationErrors = this.state.formErrors;
  		let emailValid = this.state.emailValid;
		let passwordValid = this.state.passwordValid;
		let passwordMatch = this.state.passwordMatch;

  		switch(fieldName) {
    		case 'email':
      		emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
      		fieldValidationErrors.email = emailValid ? '' : 'Email is invalid';
      		break;

    		case 'password':
      		passwordValid = value.length >= 6;
      		fieldValidationErrors.password = passwordValid ? '': 'Password must be atleast 6 characters long';
      		break;

      		case 'confirm_password':
      		passwordMatch = value === this.state.password;
      		fieldValidationErrors.confirm_password = passwordMatch ? '': 'Confirm password and password does not match';
      		break;

    		default:
      		break;
  		}

  		this.setState({
			formErrors: fieldValidationErrors,
            emailValid: emailValid,
            passwordValid: passwordValid,
            passwordMatch: passwordMatch
        }, 
        this.validateForm);
	}

	validateForm() {
		if(this.state.passwordMatch){
			this.setState({formValid: this.state.emailValid && this.state.passwordValid && this.state.passwordMatch});
		} else {
			this.setState({formValid: this.state.emailValid && this.state.passwordValid});		
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
			        <Form onSubmit={(e) => this.login(e)}>
				        <Modal.Body>
				        	<FormErrors formErrors={this.state.formErrors} />
				            <FieldGroup
								id="Email"
								type="email"
								label="Email address"
								name="email"
								validationState={this.errorClass(this.state.formErrors.email)}
								value={this.state.email}
								onChange={(e) => this.handleUserInput(e)}
								placeholder="Enter email"
							/>
							<FieldGroup
								id="Password"
								type="password"
								label="Password"
								name="password"
								validationState={this.errorClass(this.state.formErrors.password)}
								value={this.state.password}
								onChange={(e) => this.handleUserInput(e)}
								placeholder="Enter password"
							/>
				        </Modal.Body>
				        <Modal.Footer>
				        	<Button bsStyle="primary" type="submit" className="btn-info btn-block" disabled={!this.state.formValid}>Login</Button>
				        	<p><a onClick={() => this.open('signup')}>Don't have an account?</a></p>
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
			        <Form onSubmit={(e) => this.signup(e)}>
				        <Modal.Body>
				        	<FormErrors formErrors={this.state.formErrors} />
				            <FieldGroup
								id="Email"
								type="email"
								label="Email address"
								name="email"
								validationState={this.errorClass(this.state.formErrors.email)}
								value={this.state.email}
								onChange={(e) => this.handleUserInput(e)}
								placeholder="Enter email"
							/>
							<FieldGroup
								id="Password"
								type="password"
								label="Password"
								name="password"
								validationState={this.errorClass(this.state.formErrors.password)}
								value={this.state.password}
								onChange={(e) => this.handleUserInput(e)}
								placeholder="Enter password"
							/>
							<FieldGroup
								id="ConfirmPassword"
								type="password"
								label="Confirm Password"
								name="confirm_password"
								validationState={this.errorClass(this.state.formErrors.confirm_password)}
								value={this.state.confirm_password}
								onChange={(e) => this.handleUserInput(e)}
								placeholder="Enter password again"
							/>
				        </Modal.Body>
				        <Modal.Footer>
				        	<Button bsStyle="primary" type="submit" className="btn-info btn-block" disabled={!this.state.formValid}>SignUp</Button>
				        	<p><a onClick={() => this.open('login')}>Already have an account?</a></p>
				        </Modal.Footer>
				    </Form>    
			    </Modal>

				{/* ================================================================================ */}
				{/* ================================SIGNUP========================================== */}
				{/* ================================================================================ */}
				<Modal show={this.state.showSuccessModal} onHide={() => this.close('success')}>
					<Modal.Header closeButton>
				    	<Modal.Title>Confirm</Modal.Title>
				    </Modal.Header>
			        <Modal.Body>
			        	<p>Your account has been registered successfully!!</p><br />
			        	<p>Kindly check your inbox/spam and verify your email address.</p>
			        </Modal.Body>
			    </Modal>
			</header>    
		);
	}	
}	
export default Header;