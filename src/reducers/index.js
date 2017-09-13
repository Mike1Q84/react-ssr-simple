import { combineReducers } from 'redux';
import languages from './languageReducer';

const rootReducer = combineReducers({
  languages
});

export default rootReducer;
