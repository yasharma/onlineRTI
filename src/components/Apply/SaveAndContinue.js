import React, {Component} from 'react';
import {Form} from "react-bootstrap";
import {Button} from 'react-bootstrap';
import { reduxForm } from 'redux-form';

class SaveAndContinue extends Component {
	render() {
		const { previousPage, handleSubmit, invalid, submitting} = this.props;
		return(
			<div>
			<Form onSubmit={handleSubmit}>
				<h1 className="text-center text-success"><strong><i className="fa fa-check fa-lg"></i> Complete</strong></h1>
				<h4 className="text-center">Click next to finish</h4>
				<br/>
				<br/>
				<div className="form-actions">
					<div className="row">
						<div className="col-sm-12">
							<ul className="pager wizard no-margin">
								<li className="previous">
									<Button type="button" onClick={previousPage} className="btn btn-lg btn-default"> Previous </Button>
								</li>
								<li className="next disabled">
									<Button type="submit" disabled={invalid || submitting} className="btn btn-lg txt-color-darken"> Next </Button>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</Form>
			
			</div>
		);
	}

}

export default reduxForm({
  form: 'rti_form', //Form name is same
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
})(SaveAndContinue)