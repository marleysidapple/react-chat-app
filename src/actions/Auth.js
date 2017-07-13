import {
	FULL_NAME_CHANGED,
	EMAIL_CHANGED,
	PASSWORD_CHANGED,
	RETYPE_PASSWORD_CHANGED,
	HANDLE_REGISTRATION_FORM,
	USER_CREATE_SUCCESS
} from './types';
import { API_BASE_URL } from 'react-native-dotenv';
import { Alert } from 'react-native';
import axios from 'axios';


export function handleRegistrationForm({prop, value}){
	return{
		type: HANDLE_REGISTRATION_FORM,
		payload: {prop, value}
	};
}

export function createUser(userdata){
	return(dispatch) => {
		axios.post(API_BASE_URL + '/auth/register', userdata).then(user => {
			if(user.status == '200'){
				dispatch({
					type: USER_CREATE_SUCCESS,
					payload: 'User created successfully'
				});
			}

		});
	}
}