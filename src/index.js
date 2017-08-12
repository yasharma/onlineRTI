import React from 'react';
import ReactDOM from 'react-dom';
import Homepage from './components/views/Homepage.react';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Homepage />, document.getElementById('root'));
registerServiceWorker();
