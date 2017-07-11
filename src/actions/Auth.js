import {
	FULL_NAME_CHANGED,
	EMAIL_CHANGED,
	PASSWORD_CHANGED,
	RETYPE_PASSWORD_CHANGED,
	HANDLE_REGISTRATION_FORM
} from './types';


export function handleRegistrationForm({prop, value}){
	return{
		type: HANDLE_REGISTRATION_FORM,
		payload: {prop, value}
	};
}