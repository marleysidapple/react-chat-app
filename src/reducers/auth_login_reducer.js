import {
	HANDLE_LOGIN_FORM,
	LOGIN_USER,
	USER_LOGIN_SUCCESS,
	USER_LOGIN_FAILED
} from './../actions/types';

const INITIAL_STATE = {
	email: '',
	password: '',
	err: null,
	loading: false,
	success: false
}


export default function(state=INITIAL_STATE, action){
	switch(action.type){
		case HANDLE_LOGIN_FORM:
			return {...state, [action.payload.prop]: action.payload.value, loading: false, err: null, success: false};

		case LOGIN_USER:
			return { ...state, loading: true, err: null, success: false};

		case USER_LOGIN_SUCCESS:
			return { ...state, loading: false, err: null, success: true};

		case USER_LOGIN_FAILED:
			return { ...state, loading: false, err: action.payload.data.message, success: false };
		default:
			return INITIAL_STATE;
	}
}
