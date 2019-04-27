import { combineReducers } from 'redux';
import formFields from './formFields.reducers';
import helper from './helper.reducers';

export default combineReducers({
  formFields,
  helper,
});