import {
	FULL_NAME_CHANGED,
	EMAIL_CHANGED,
	PASSWORD_CHANGED,
	RETYPE_PASSWORD_CHANGED,
	HANDLE_REGISTRATION_FORM
} from './types';

/*
export function fullNameChanged(fullname){
	return(
		type: FULL_NAME_CHANGED,
		payload: fullname
	);
}

export function emailChanged(email){
	return(
		type: EMAIL_CHANGED,
		payload: email
	)
}

export function passwordChanged(password){
	return(
		type: PASSWORD_CHANGED,
		payload: password
	);
}

export function retypePasswordChanged(confirm_password){
	return(
		type: RETYPE_PASSWORD_CHANGED,
		payload: confirm_password
	);
}
*/

export function handleRegistrationForm({prop, value}){
	return{
		type: HANDLE_REGISTRATION_FORM,
		payload: {prop, value}
	};
}