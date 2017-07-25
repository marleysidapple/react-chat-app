
import { Router } from '../Router';

export default (state, action) =>
  Router.router.getStateForAction(action, state) || state;
