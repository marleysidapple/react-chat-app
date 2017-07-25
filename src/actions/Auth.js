import {
	FULL_NAME_CHANGED,
	EMAIL_CHANGED,
	PASSWORD_CHANGED,
	RETYPE_PASSWORD_CHANGED,
	HANDLE_REGISTRATION_FORM,
	CREATE_USER,
	USER_CREATE_SUCCESS,
	USER_CREATE_FAILED,
} from './types';
import { API_BASE_URL } from 'react-native-dotenv';
import { NavigationActions } from 'react-navigation';
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
		//for sake of showing spinner;
		dispatch({type: CREATE_USER});

		axios.post(API_BASE_URL + '/auth/register', userdata).then(user => {
				dispatch({
					type: USER_CREATE_SUCCESS,
					payload: user
				});
				
		dispatch(NavigationActions.navigate({ routeName: 'Login' }));

		}).catch(err => {
			//console.log(error.response);
			dispatch({
				type: USER_CREATE_FAILED,
				payload: err.response
			});
		});
	}
}
