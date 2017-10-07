import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

const initialState = {
  	token: localStorage.getItem('prod.token'),
  	user: localStorage.getItem('prod.user')
};

const authReducer = (state = initialState, { type, payload, user }) => {
    switch (type) {
    	default:
      		return state;
  	}
};

const reducer = combineReducers({
	auth: authReducer,
	router: routerReducer,
	form: formReducer
});

export default reducer;