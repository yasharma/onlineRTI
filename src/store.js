import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';
import { applyMiddleware, createStore } from 'redux';

import reducer from './reducer';

// create middlewares
const history = createHistory();

let middleware = applyMiddleware(
  	routerMiddleware(history)
);

// create store
const store = createStore(reducer, middleware);

// export
export { store, history };