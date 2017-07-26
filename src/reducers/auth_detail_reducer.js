import {
	USER_DETAIL_SUCCESS,
	USER_DETAIL_FAILED,
} from './../actions/types';


const INITIAL_STATE = {
	detail: null,
	error: ''
}


export default function(state=INITIAL_STATE, action){

	switch(action.type){
		case USER_DETAIL_SUCCESS:
			return {...state, detail: action.payload, error: ''};

		case USER_DETAIL_FAILED:
			return { ...state, detail: null, error: action.payload.data};

		default:
			return state;
	}
}
