
import { Router } from '../Router';
import { NavigationActions } from 'react-navigation';


const initialState = Router.router.getStateForAction(NavigationActions.init());

export default (state = initialState, action) => {
    const newState = Router.router.getStateForAction(action, state);
    return newState || state;
  }
