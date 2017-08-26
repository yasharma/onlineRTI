import React from 'react';
import {Navbar, Nav, NavItem, Modal, Button, Form} from "react-bootstrap";
import FieldGroup from '../FieldGroup';

class Login extends React.Component {
	constructor () { 
		super();
		this.state = {
			showModal: false,
			user: {
				email: '',
				password: ''
			}
		};	
	}

	close () {
		this.setState({ showModal: false });
	}

	submit(event) {
		event.preventDefault();
	}

	open () {
		this.setState({ showModal: true })
	}
	render () {
		return (
			<Modal className="login-popup" show={this.state.showModal} onHide={() => this.close()}>
		    	<Modal.Header closeButton>
		        	<Modal.Title>Login</Modal.Title>
		        </Modal.Header>
		        <Form onClick={(e) => this.submit(e)}>
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
			        	<p>Don't have an account?</p>
			        </Modal.Footer>
			    </Form>    
		    </Modal>
		); 
	}	   
}

export default Login;