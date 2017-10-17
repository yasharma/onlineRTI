import { call, put } from 'redux-saga/effects';
import {login} from '../api/user';
import {  AUTH_SUCCESS, AUTH_FAILURE, AUTH_LOGOUT } from '../constant';
import {Storage} from '../lib/Storage';

export function* authorize(action) {
	try {
	   	const { token, user } = yield call(login, 'login-web', action.user);
		yield put({ type: AUTH_SUCCESS, payload: token, user });
		Storage.set('token', token);
		Storage.set('user', user, true);
		action.callbackSuccess();
	} catch (error) {
		const {errors} = error;
		yield put({ type: AUTH_FAILURE, payload: errors.message });
		Storage.remove('token');
		action.callbackError(errors.message);
	}
}

export function* logout(action) {
	localStorage.remove('token');
	localStorage.remove('user');
	yield put({ type: AUTH_LOGOUT });
	action.callbackSuccess();
}