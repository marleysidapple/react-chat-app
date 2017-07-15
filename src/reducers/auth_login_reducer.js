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
	success: false,
	token: null
}


export default function(state=INITIAL_STATE, action){
	switch(action.type){
		case HANDLE_LOGIN_FORM:
			return {...state, [action.payload.prop]: action.payload.value, loading: false, err: null, token: null, success: false};

		case LOGIN_USER:
			return { ...state, loading: true, err: null, success: false, token: null};

		case USER_LOGIN_SUCCESS:
			return { ...state, loading: false, err: null, success: true, token: action.payload.success};

		case USER_LOGIN_FAILED:
			return { ...state, loading: false, err: action.payload.data.error, success: false, token: null};
		default:
			return INITIAL_STATE;
	}
}
