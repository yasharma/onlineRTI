import React from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import Router from '../router';

const App = () => (
	<div>
		<Header />
		<Router />
		<Footer />
	</div>
);

export default App;