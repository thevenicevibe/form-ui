import { combineReducers } from 'redux';
import loginReducer from './reducer';
import authReducer from './authReducer'

const rootReducer = combineReducers({
  login: loginReducer,
  auth: authReducer,
});

export default rootReducer;