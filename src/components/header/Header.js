import React from 'react';
import {Navbar, Nav, NavItem, Modal, Button, Form} from "react-bootstrap";
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import FieldGroup from '../FieldGroup';


class Header extends React.Component {
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

	close () {this.setState({ showModal: false })}

	submit(event) {
		event.preventDefault();
		console.log(this.state.user);
		console.log(event.target.value);
	}

	open () {
		this.setState({ showModal: true })
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
					<NavItem onClick={() => this.open()} eventKey={1}>Login</NavItem>
				</Nav>
				{/*Login Modal*/}
				<Modal show={this.state.showModal} onHide={() => this.close()}>
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
				        	<Button bsStyle="primary" type="submit" className="pull-left" >Login</Button>
				        	<Button onClick={() => this.close()}>Close</Button>
				        </Modal.Footer>
				    </Form>    
			    </Modal>
			</header>    
		);
	}	
}	
export default Header;