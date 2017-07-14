import { combineReducers } from 'redux';
import auth_reducer from './auth_reducer';
import auth_login_reducer from './auth_login_reducer';


export default combineReducers({
	auth_register: auth_reducer,
	auth_login: auth_login_reducer
});