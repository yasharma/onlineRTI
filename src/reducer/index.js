import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import {RTI_FORM_STEP_FIRST_SUCCESS, RTI_FORM_STEP_SECOND_SUCCESS} from '../constant';

const initialState = {
  	token: localStorage.getItem('prod.token'),
  	user: localStorage.getItem('prod.user'),
  	
};

const rtiInitialState = {
	rti: sessionStorage.getItem('rtiguru.rtiFormStepFirst'),
	info: sessionStorage.getItem('rtiguru.rtiFormStepSecond'),
};	

const rtiFormStepReducer = (state = rtiInitialState, action) => {
  	switch (action.type) {
	  	case RTI_FORM_STEP_FIRST_SUCCESS: {
	      	const rti = sessionStorage.setItem('rtiguru.rtiFormStepFirst', JSON.stringify(action.rtiFormStepFirst));
	    	return { ...state, rti };
	  	}
	  	case RTI_FORM_STEP_SECOND_SUCCESS: {
	      	const info = sessionStorage.setItem('rtiguru.rtiFormStepSecond', JSON.stringify(action.rtiFormStepSecond));
	    	return { ...state, info };
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