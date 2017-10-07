import React from 'react';

const ApplyBanner = ({categoryName}) => (
	<div>
		<div className="track-banner"><h2>{categoryName || 'Online Apply'}</h2></div>
	</div>
);

export default ApplyBanner;
