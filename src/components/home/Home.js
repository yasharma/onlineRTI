import React from 'react';
import Banner from '../home/Banner';
import HomeTabs from '../home/HomeTabs';
import HomeAbout from '../home/HomeAbout';
import HelpFaqs from '../home/HelpFaqs';
import Help from '../home/Help';
import Testimonials from '../testimonials/Testimonials';
import BlogList from '../blogs/BlogList';

const Home = () => (
	<div>
		<Banner />
		<HomeTabs/>
		<HomeAbout />
		<HelpFaqs/>
		<Testimonials/>
		<Help/>
		<BlogList/>
	</div>
);

export default Home;