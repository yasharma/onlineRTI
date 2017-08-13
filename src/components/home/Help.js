import React from 'react';
import GooglePlayIcon from '../../assets/images/appbtn.png';

const Help = () => (
	<div className="senRequest padding-40 clearfix">
		<div className="container">
			<div className="row">
				<div className="col-sm-6 requestBox">
					<div className="text-center padding-20">
						<h2 className="request-head">Can’t Find? Need Help Send a Request</h2>
						<span className="request-tag">Contact Us Online or Give Us a Call</span>
						<div className="padding-top20 clearfix">
								<button type="button" className="btn btn-default">+91-9206074500</button>
								<button type="button" className="btn btn-info">Coffee with Us</button>
						</div>
					</div>
				</div>
				<div className="col-sm-6">
					<div className="text-center padding-20">
						<h2 className="request-head top-mobile-20">Get RTI Mobile App</h2>
						<a className="app-btn"><img src={GooglePlayIcon} alt="AppIcon" /></a>
					</div>
				</div>
			</div>
		</div>
	</div>
);

export default Help;