import React from 'react';
import {Link} from 'react-router-dom';

const Sidebar = ({rtino}) => (
	<div className="col-sm-3">
		<ul className="dash-list">
			<li><Link to={`/dashboard/app-progress/${rtino}`}>App progress</Link></li>
			<li><Link to={`/dashboard/app-status/${rtino}`}>App Status</Link></li>
			<li><Link to={`/dashboard/rti-application/${rtino}`}>RTI application</Link></li>
			<li><Link to={`/dashboard/edit-profile/${rtino}`}>Edit Profile</Link></li>
			<li><Link to="">Download</Link></li>
			<li><Link to="">Payment Infor &amp; Invoice</Link></li>
			<li><Link to="">First Appeal</Link></li>
			<li><Link to="">Tracking Details</Link></li>
		</ul>
	</div>
);

export default Sidebar;