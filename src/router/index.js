import React from 'react';
import Home from '../components/home/Home';
import About from '../components/AboutUs/About';
import AboutSingle from '../components/AboutUs/AboutSingle';
import Blog from '../components/blogs/Blog';
import BlogSingle from '../components/blogs/BlogSingle';
import Contacts from '../components/Contact/Contact';
import Faqs from '../components/Faq/Faq';
import Applys from '../components/Apply/Apply';
import Track from '../components/Track/Track';
import NoMatch from '../components/NoMatch';
import { Switch } from 'react-router-dom';
import UnauthenticatedRoute from "../components/UnauthenticatedRoute";

const routes = [
	{
		path: '/',
		exact: true,
		component: Home,
		requiredLogin: false
	},
	{
		path: '/onlineRTI', // this route is just for gh-pages
		component: Home,
		requiredLogin: false
	},
	{
		path: '/about-us',
		component: About,
		requiredLogin: false
	},
	{
		path: '/about/:slug',
		component: AboutSingle,
		requiredLogin: false
	},
	{
		path: '/blog',
		component: Blog,
		requiredLogin: false
	},
	{
		path: '/blog/:slug',
		component: BlogSingle,
		requiredLogin: false
	},
	{
		path: '/contact-us',
		component: Contacts,
		requiredLogin: false
	},
	{
		path: '/faq',
		component: Faqs,
		requiredLogin: false
	},
	{
		path: '/track-us',
		component: Track,
		requiredLogin: false
	},
	{
		path: '/apply-now',
		component: Applys,
		requiredLogin: false
	},
	{
		component: NoMatch,
		requiredLogin: false
	}
];

/*
We can use the<Switch> component to group <Route>s. 
The <Switch> will iterate over its children elements (the routes) and 
only render the first one that matches the current pathname.
*/

const Router = ({childProps}) => (
	<Switch>
		{routes.map((route, index) => (
			<UnauthenticatedRoute 
				key={index}
				path={route.path}
				exact
				requiredLogin={route.requiredLogin}
				component={route.component}
				props={childProps}
			/>
		))}
	</Switch>
);

export default Router;