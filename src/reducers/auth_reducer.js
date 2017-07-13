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
}


export default function(state=INITIAL_STATE, action){
	switch(action.type){
		case HANDLE_REGISTRATION_FORM:
			return {...state, [action.payload.prop]: action.payload.value};

		case CREATE_USER:
			return { ...state, loading: true, err: null};

		case USER_CREATE_SUCCESS:
			return { ...state, loading: false, err: null};

		case USER_CREATE_FAILED:
			return { ...state, loading: false, err: action.payload.data.message };
		default:
			return INITIAL_STATE;
	}
}
