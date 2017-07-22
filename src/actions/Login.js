import {	
	HANDLE_LOGIN_FORM,
	LOGIN_USER,
	USER_LOGIN_SUCCESS,
	USER_LOGIN_FAILED,
	USER_DETAIL_SUCCESS,
	USER_DETAIL_FAILED
} from './types';
import { API_BASE_URL } from 'react-native-dotenv';
import { Alert } from 'react-native';
import axios from 'axios';
import { NavigationActions } from 'react-navigation'



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
				dispatch({
					type: USER_LOGIN_SUCCESS,
					payload: user.data
				});
		}).catch(err => {
			dispatch({
				type: USER_LOGIN_FAILED,
				payload: err.response
			});
		});
	}
}


export function getUserDetail(token){
	return (dispatch) => {
		 var headers = {
         	'Content-Type': 'application/json',
        }

		axios.post(API_BASE_URL + '/auth/user/detail', token, headers).then(detail => {
			dispatch({
				type: USER_DETAIL_SUCCESS,
				payload: detail.data
			});
		}).catch(err => {
			dispatch({
				type: USER_DETAIL_FAILED,
				payload: err.response
			});
		});
	}
}
