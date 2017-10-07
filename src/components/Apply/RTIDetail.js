/* global _ */
import React, {Component} from 'react';
import {Form, Button} from "react-bootstrap";
import FormField from "../common/FormField";
import FormSubmit from "../common/FormSubmit";
import { Field, SubmissionError, reduxForm } from 'redux-form';
import {Spinner} from '../common/Spinner';
const required = value => (value ? undefined : 'Required')
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
				          	<Form className=" clearfix" onSubmit={handleSubmit(this.formSubmit)}>
				              	<div className="main-head-black-mid">RTI DETAILS</div>
				              	{/*<div className="row padding-top50">
									<div className="col-sm-6">
									    <div className="form-group">
									      	<input className="form-control" placeholder="Constituency" type="text"/>
									    </div>
									</div>
									<div className="col-sm-6">
									    <div className="form-group">
									      	<input className="form-control" placeholder="District" type="text"/>
									    </div>
									</div>
								</div>*/}
								
								
								{!_.isEmpty(category) ? category.form.map((value, index) => (
									<div key={index} className={index === 0 ? "row padding-top50" : "row"}>
										<Field 
											validate={required}
						      				component={FormField} type={value.type === "textarea" ? "textarea": "text"}
						      				name={value.key} label={value.field} 
						      				placeholder={value.field}
						      				doValidate={true}/>
									</div>
								)):<Spinner/>}

				              {/*<div className="row">
				                  <div className="col-sm-6">
				                    <div className="form-group">
				                      <input className="form-control" placeholder="From (Year)" type="text"/>
				                    </div>
				                  </div>
				                  <div className="col-sm-6">
				                    <div className="form-group">
				                      <input className="form-control" placeholder="To (Year)" type="text"/>
				                    </div>
				                  </div>
				              </div>

				              <div className="row">
				                  <div className="col-sm-12">
				                    <div className="form-group">
				                      <textarea className="form-control" rows="3" placeholder="More Information (optional)"></textarea>
				                    </div>
				                  </div>
				              </div>*/}
				              <FormSubmit 
					      			error={error} invalid={invalid} 
					      			submitting={submitting} className="btn btn-info btn-block italic-font" buttonSaveLoading="Processing..."/>
				            </Form>
			        	</div>
			        </div>
			        <div className="col-sm-12">
			            <ul className="pager wizard no-margin">
			                <li className="previous disabled">
			                    <Button type="button" className="btn btn-lg btn-default"> Previous </Button>
			                </li>
			                <li className="next">
			                    <Button type="button" className="btn btn-lg txt-color-darken"> Next </Button>
			                </li>
			            </ul>
			        </div>
			    </div>
			</div>
		);
	}
	formSubmit(values) {
		console.log(values);
	}
}


const RTIDetailForm = reduxForm({
  	form: 'rti_detail_form'
})(RTIDetail);

export default RTIDetailForm;