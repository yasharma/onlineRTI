import React, {Component} from 'react';
import {Modal, Form} from "react-bootstrap";
import FormField from "../common/FormField";
import FormSubmit from "../common/FormSubmit";
import { Field, reduxForm, SubmissionError } from 'redux-form';
import {Notify} from '../common/Notify';
import { push } from 'react-router-redux';
import {AUTH_REQUEST} from '../../constant';

class Login extends Component {
	constructor() {
		super();
		this.formSubmit = this.formSubmit.bind(this);
	}
	handleExited() {
		const {dispatch, reset} = this.props;
		dispatch(reset('login_form'));
	}
	render () {
		const {show, hideDialog, showSignUpDialog, handleSubmit, error, submitting, invalid} = this.props;
		return (
			<Modal className="login-popup" show={show} onHide={hideDialog} onExited={() => this.handleExited()}>
		    	<Modal.Header closeButton>
		        	<Modal.Title>Login</Modal.Title>
		        </Modal.Header>
		        <Form onSubmit={handleSubmit(this.formSubmit)}>
		        	<Notify message={error} />
			        <Modal.Body>
			            <Field
							type="email"
							label="Email address"
							name="email"
							placeholder="Enter email"
							theme="custom"
							doValidateWithStackedForm={true}
							component={FormField}
						/>
						<Field
							type="password"
							label="Password"
							name="password"
							placeholder="Enter Password"
							doValidateWithStackedForm={true}
							theme="custom"
							component={FormField}
						/>
						<a className="forgotLink">Forgot Password</a>
			        </Modal.Body>
			        <Modal.Footer>
			        	<FormSubmit 
			      			error={error} invalid={invalid} 
			      			submitting={submitting} 
			      			className="btn-info btn-block" 
			      			buttonSaveLoading="Processing..." 
			      			buttonSave="Login"/>
			        	<p><a className="loginLink" onClick={showSignUpDialog}>Don't have an account?</a></p>
			        </Modal.Footer>
			    </Form>    
		    </Modal>
		); 
	}	   
	formSubmit(user) {
		const { dispatch, hideDialog } = this.props;
		return new Promise((resolve, reject) => {
		  	dispatch({
		    	type: AUTH_REQUEST,
		    	user: user,
		    	callbackError: (error) => {
		      		reject(new SubmissionError({_error: error}));
		    	},
		    	callbackSuccess: () => {
		    		hideDialog();
		      		dispatch(push('/myrti/dashboard'));
		      		resolve();
		    	}
		  	})
		});
	}
}
const LoginForm = reduxForm({
  	form: 'login_form',
  	validate: (values) => {
  	  	const errors = {};
  	  	if(!values.email) {
  	    	errors.email = 'Email is required';
  	  	}else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
  	      	errors.email = 'Invalid email address'
  	    }
  	    if (!values.password) {
  	        errors.password = 'Password is Required'
  	    }
  	  	return errors;
  	}
})(Login);
export default LoginForm;