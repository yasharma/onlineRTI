/* global _ */
import React, {Component} from 'react';
import {Form} from "react-bootstrap";
import FormField from "../common/FormField";
import FormSubmit from "../common/FormSubmit";
import { Field, reduxForm } from 'redux-form';
import {Spinner} from '../common/Spinner';
import { connect } from "react-redux";
import {Required} from '../common/validate';
class RTIDetail extends Component {
	constructor() {
		super();
		this.formSubmit = this.formSubmit.bind(this);
	}
	render(){
		const { error, handleSubmit, invalid, submitting, category} = this.props;
		return (
			<div className="form-actions">
			    <div className="row">
			        <div className="col-sm-12">
			          	<div className="step-forms padding-top50">
			          		{!_.isEmpty(category) ? (
				          	<Form className=" clearfix" onSubmit={handleSubmit(this.formSubmit)}>
				              	<div className="main-head-black-mid">RTI DETAILS</div>
								{!_.isEmpty(category) ? category.form.map((value, index) => (
									<div key={index} className={index === 0 ? "row padding-top50" : "row"}>
										<Field 
											validate={Required}
						      				component={FormField} type={value.type === "textarea" ? "textarea": "text"}
						      				name={value.key} label={value.field} 
						      				componentClass={value.type === "textarea" ? "textarea": "input"}
						      				placeholder={value.field}
						      				col={12}
						      				doValidate={true}/>
									</div>
								)):<Spinner/>}
				              <FormSubmit 
					      			error={error} invalid={invalid} 
					      			submitting={submitting} className="btn btn-info btn-block italic-font" buttonSaveLoading="Processing..."/>
				            </Form>)
				            :<Spinner/>}
			        	</div>
			        </div>
			        {/*<div className="col-sm-12">
			            <ul className="pager wizard no-margin">
			                <li className="previous disabled">
			                    <Button type="button" className="btn btn-lg btn-default"> Previous </Button>
			                </li>
			                <li className="next">
			                    <Button type="button" className="btn btn-lg txt-color-darken"> Next </Button>
			                </li>
			            </ul>
			        </div>*/}
			    </div>
			</div>
		);
	}
	formSubmit(value) {
		this.props.onSubmit({rti:value});
	}
}


const RTIDetailForm = reduxForm({
  	form: 'rti_form', // <------ same form name
  	destroyOnUnmount: false, // <------ preserve form data
  	forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
})(RTIDetail);


const mapStateToProps = (state) => {
	const {rtiFormStep} = state;
	if( !_.isEmpty(rtiFormStep.rti) ) {
		const formData = JSON.parse(rtiFormStep.rti);
		return ({
			initialValues: formData.rti
		});	
	} else {
		return ({});
	}
}

export default connect(mapStateToProps)(RTIDetailForm);