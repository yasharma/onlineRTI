import React from 'react';
import Copyright from '../footer/copyright';
import FooterLinks from '../footer/Footer-links';


// The Header creates links that can be used to navigate
// between routes.
const Footer = () => (
	<div>
		<FooterLinks/>
		<Copyright/>
	</div>
);

export default Footer;