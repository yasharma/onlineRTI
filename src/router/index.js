import React from 'react';
import Home from '../components/home/Home';
import Login from '../components/Login';
import NoMatch from '../components/NoMatch';
import { Switch, Route } from 'react-router-dom';

const routes = [
	{
		path: '/',
		exact: true,
		component: Home
	},
	{
		path: '/login',
		component: Login
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