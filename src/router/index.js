import React from 'react';
import Home from '../components/home/Home';
import Abouts from '../components/Abouts/Abouts';
import Contacts from '../components/Contact/Contact';
import Faqs from '../components/Faq/Faq';
import Applys from '../components/Apply/Apply';
import Track from '../components/Track/Track';
import NoMatch from '../components/NoMatch';
import { Switch, Route } from 'react-router-dom';

const routes = [
	{
		path: '/',
		exact: true,
		component: Home
	},
	{
		path: '/onlineRTI', // this route is just for gh-pages
		component: Home
	},
	{
		path: '/about-us',
		component: Abouts
	},
	{
		path: '/contact-us',
		component: Contacts
	},
	{
		path: '/faq',
		component: Faqs
	},
	{
		path: '/track-us',
		component: Track
	},
	{
		path: '/apply-now',
		component: Applys
	},
	{
		component: NoMatch
	}
];

/*
We can use the<Switch> component to group <Route>s. 
The <Switch> will iterate over its children elements (the routes) and 
only render the first one that matches the current pathname.
*/

const Router = () => (
	<Switch>
		{routes.map((route, index) => (
			<Route 
				key={index}
				path={route.path}
				exact={route.exact}
				component={route.component}
			/>
		))}
	</Switch>
);

export default Router;