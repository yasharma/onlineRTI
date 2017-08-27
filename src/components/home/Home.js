import React from 'react';
import Banner from '../home/Banner';
import HomeTabs from '../home/HomeTabs';
import HomeAbout from '../home/HomeAbout';
import HelpFaqs from '../home/HelpFaqs';
import Help from '../home/Help';
import Testimonials from '../testimonials/Testimonials';
import BlogList from '../blogs/BlogList';
import EmailConfirmation from './EmailConfirmation';

class Home extends React.Component {
	render() {
		return (
			<div>
				<Banner />
				<EmailConfirmation queryParams={this.props.location}/>
				<HomeTabs/>
				<HomeAbout />
				<HelpFaqs/>
				<Testimonials/>
				<Help/>
				<BlogList/>
			</div>
		);
	}
}
export default Home;