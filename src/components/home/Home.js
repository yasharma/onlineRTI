
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
				<HomeTabs categories={this.props.categories} />
				<HomeAbout />
				<HelpFaqs/>
				<Testimonials/>
				<Help settings={this.props.settings} />
				<BlogList/>
			</div>
		);
	}
}
export default Home;