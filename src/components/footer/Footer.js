import React from 'react';
import Copyright from '../footer/copyright';
import FooterLinks from '../footer/Footer-links';


// The Header creates links that can be used to navigate
// between routes.
const Footer = (props) => (
	<div>
		<FooterLinks categories={props.categories} data={props.settings.site}/>
		<Copyright data={props.settings.site}/>
	</div>
);

export default Footer;