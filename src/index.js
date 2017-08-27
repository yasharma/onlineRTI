import './bootstrap'
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App';


// Vendor CSS
import 'font-awesome/css/font-awesome.min.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Application CSS

// customized bootstrap css
import './assets/bootstrap/css/bootstrap.min.css';
import './assets/css/fonts/fonts.css';
import './assets/css/custom.css';
import './assets/css/responsive.css';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<Router>
		<App />
	</Router>, 
	document.getElementById('root')
);
registerServiceWorker();
