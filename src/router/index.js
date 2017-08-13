import React from 'react';
import Home from '../components/home/Home';
import Login from '../components/Login';
import { Switch, Route } from 'react-router-dom';

/*
We can use the<Switch> component to group <Route>s. 
The <Switch> will iterate over its children elements (the routes) and 
only render the first one that matches the current pathname.
*/

const Router = () => (
	<Switch>
		<Route path="/login" component={Login} />
		<Route exact={true} path="/" component={Home} />
	</Switch>
);

export default Router;