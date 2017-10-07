import React from 'react';
import { Link } from 'react-router-dom';

const Steps = ({steps}) => {
	return (
		<div className="form-bootstrapWizard">
		    <ul className="bootstrapWizard form-wizard">
		    	{steps.map((value, index) => {
		    		return (
		    			<li key={index} className={value.active ? "active":""} >
		    			    <Link to="/apply-now?q=step-1" >
		    			      <span className="step">{value.step}</span> <span className="title">{value.title}</span> 
		    			    </Link>
		    			</li>
		    		)})}
		        {/*<li  className="">
		            <Link to="/apply-now?q=step-2" className="active">
		              <span className="step">2</span> <span className="title">RTI Details</span> 
		            </Link>
		        </li>
		        <li  className="">
		            <Link to="/apply-now?q=step-3" >
		              <span className="step">3</span> <span className="title">Summary &amp; Details</span> 
		            </Link>
		        </li>
		        <li >
		            <Link to="/apply-now?q=step-4">
		              <span className="step">4</span> <span className="title">Save and Continue</span> 
		            </Link>
		        </li>*/}
		    </ul>
		    <div className="clearfix"></div>
		</div>
	);
};
export default Steps;