import { combineReducers } from 'redux';
import noLang from './noLangReducer';
import lang from './langReducer';
import languages from './languageReducer';

const rootReducer = combineReducers({
  noLang,
  lang,
  languages
});

export default rootReducer;
