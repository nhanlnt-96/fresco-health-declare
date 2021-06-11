import { combineReducers } from 'redux';
import submitFormReducer from './redux/submitForm';

const rootReducer = combineReducers({
  submitInfo: submitFormReducer
});

export default rootReducer;