import { combineReducers } from 'redux';
import lang from './langReducer';
import languages from './languageReducer';

const rootReducer = combineReducers({
  lang,
  languages
});

export default rootReducer;
