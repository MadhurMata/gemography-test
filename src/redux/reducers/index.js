import { combineReducers } from 'redux';
import serviceReducer from './reducers';

export default combineReducers({
  service: serviceReducer
});
