import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import {RTI_FORM_STEP} from '../constant';

const initialState = {
  	token: localStorage.getItem('prod.token'),
  	user: localStorage.getItem('prod.user'),
  	
};

const rtiInitialState = {
	data: sessionStorage.getItem('rtiguru.rtiFormStep')
};	

const rtiFormStepReducer = (state = rtiInitialState, action) => {
  	switch (action.type) {
	  	case RTI_FORM_STEP: {
	      	const data = sessionStorage.setItem('rtiguru.rtiFormStep', JSON.stringify(action.rtiFormSteps));
	    	return { ...state, data };
	  	}
  		default:
    		return state;
	}
};

const authReducer = (state = initialState, { type, payload, user }) => {
    switch (type) {
    	default:
      		return state;
  	}
};

const reducer = combineReducers({
	rtiFormStep:rtiFormStepReducer,
	auth: authReducer,
	router: routerReducer,
	form: formReducer
});

export default reducer;