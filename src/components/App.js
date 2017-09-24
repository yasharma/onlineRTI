/* global axios */
import React from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import Http from '../lib/Http';
import Spinner from 'react-spinner';

class App extends React.Component {
	constructor() {
		super();
	  	this.state = {
	    	settings: {},
	    	categories:{}
	  	}
	}
	componentDidMount() {
		axios.all([Http.get('settings'), Http.get('list-categories')])
	  	.then(axios.spread((settings, categories) => {
	  		this.setState({settings: settings.data, categories: categories.data});
		}))
		.catch(errors => console.log(errors));
	}
	render() {
		const {settings, categories} = this.state,
		style = {
      		height: 50,
      		width: 50,
      		backgroundColor: 'black',
      		position: 'relative',
      		top: 200,
      		left: '50%'
    	}
		if( Object.keys(settings).length > 0 && Object.keys(categories).length > 0 ) {
			return(
				<div>
					<Header settings={settings} categories={categories} />
					<Footer settings={settings} categories={categories} />
				</div>
			);
		} else {	
			return <div style={style}><Spinner /></div>;
		}
	
	}
	
};

export default App;