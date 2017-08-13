import React from 'react';
import HistoryIcon from '../../assets/images/icon1.png';
import ProblemIcon from '../../assets/images/icon2.png';
import SolutionIcon from '../../assets/images/icon2.png';
const HomeAbout = () => (
  
<div className="online-RTI padding-40 clearfix">
	<div className="container">
		<div className="main-head">What is Online RTI ?</div>
		<div className="row padding-top50">
			<div className="col-sm-4 online-RTI-section">
			    <img className="online-rti-icon" src={HistoryIcon} alt="HistoryIcon" />
			    <a className="online-rti-heading">The History</a>
			    <p className="italic-font online-rti-para">
			      In 2005 the government passed a law called the Right to Information Act (RTI) to end bribes and speed up processing of government services like issuing passports, income tax refunds, and exam answer sheets. Read More
			    </p>
			</div>
			<div className="col-sm-4 online-RTI-section">
			    <img className="online-rti-icon" src={ProblemIcon} alt="ProblemIcon" />
			    <a className="online-rti-heading">The Problem</a>
			    <p className="italic-font online-rti-para">
			      While well intentioned, the traditional RTI filing process can be very time consuming. Most people waste weeks of their life trying to fill out a difficult application. Even worse, many fail to get a government response.
			    </p>
			</div>
			<div className="col-sm-4 online-RTI-section">
			    <img className="online-rti-icon" src={SolutionIcon} alt="SolutionIcon" />
			    <a className="online-rti-heading">Our Solution</a>
			    <p className="italic-font online-rti-para">
			      At Online RTI, our lawyers are experts at processing RTIs, so you don’t have to worry about it. Simply click on your problem below, submit your application, and consider your case at the top of the government’s queue.
			    </p>
			</div>
		</div>
	</div>
</div>
);

export default HomeAbout;