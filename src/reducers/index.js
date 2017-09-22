import { combineReducers } from 'redux';
import url from './urlReducer';
import noLang from './noLangReducer';
import lang from './langReducer';
import languages from './languageReducer';

const rootReducer = combineReducers({
  url,
  noLang,
  lang,
  languages
});

export default rootReducer;
