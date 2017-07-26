import {
	FULL_NAME_CHANGED,
	EMAIL_CHANGED,
	PASSWORD_CHANGED,
	RETYPE_PASSWORD_CHANGED,
	HANDLE_REGISTRATION_FORM,
	CREATE_USER,
	USER_CREATE_SUCCESS,
	USER_CREATE_FAILED
} from './../actions/types';

const INITIAL_STATE = {
	fullname: '',
	email: '',
	password: '',
	confirm_password: '',
	err: null,
	loading: false,
	success: false
}


export default function(state=INITIAL_STATE, action){
	switch(action.type){
		case HANDLE_REGISTRATION_FORM:
			return {...state, [action.payload.prop]: action.payload.value, loading: false, err: null, success: false};

		case CREATE_USER:
			return { ...state, loading: true, err: null, success: false};

		case USER_CREATE_SUCCESS:
			return { ...state, loading: false, err: null, success: true};

		case USER_CREATE_FAILED:
			return { ...state, loading: false, err: action.payload.data.message, success: false };
		default:
			return state;
	}
}
