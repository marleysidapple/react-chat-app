import {
	FULL_NAME_CHANGED,
	EMAIL_CHANGED,
	PASSWORD_CHANGED,
	RETYPE_PASSWORD_CHANGED,
	HANDLE_REGISTRATION_FORM
} from './../actions/types';

const INITIAL_STATE = {
	fullname: '',
	email: '',
	password: '',
	confirm_password: '',
	loading: false
}


export default function(state=INITIAL_STATE, action){
	switch(action.type){
		case HANDLE_REGISTRATION_FORM:
			return {...state, [action.payload.prop]: action.payload.value};
		case FULL_NAME_CHANGED:
			return {...state, fullname: action.payload};
		case EMAIL_CHANGED:
			return {...state, email: action.payload};
		case PASSWORD_CHANGED:
			return {...state, password: action.payload};
		case RETYPE_PASSWORD_CHANGED:
			return {...state, confirm_password: action.payload};
		default:
			return INITIAL_STATE;
	}
}
