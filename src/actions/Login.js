import {	
	HANDLE_LOGIN_FORM,
	LOGIN_USER,
	USER_LOGIN_SUCCESS,
	USER_LOGIN_FAILED,
} from './types';
import { API_BASE_URL } from 'react-native-dotenv';
import { Alert } from 'react-native';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';


export function handleLoginForm({prop, value}){
	return{
		type: HANDLE_LOGIN_FORM,
		payload: {prop, value}
	};
}


export function validateLoginCredential(userData){
	return(dispatch) => {
		//for sake of showing spinner;
		dispatch({type: LOGIN_USER});

		axios.post(API_BASE_URL + '/auth/login', userData).then(user => {
			console.log(user);
				dispatch({
					type: USER_LOGIN_SUCCESS,
					payload: user
				});
		Actions.dashboard({type: 'reset'});
		}).catch(err => {
			console.log(err.response);
			dispatch({
				type: USER_LOGIN_FAILED,
				payload: err.response
			});
		});
	}
}