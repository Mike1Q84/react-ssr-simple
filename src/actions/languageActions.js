import * as types from './actionTypes';
import languageApi from '../api/mockLanguageApi';

export function loadLangSuccess(lang) {
  return { type: types.LOAD_LANG_SUCCESS, lang };
}

export function loadLanguagesSuccess(languages) {
  return { type: types.LOAD_LANGUAGES_SUCCESS, languages };
}

export function loadLang(lang) {
  return function(dispatch) {
    return languageApi.getCurrentLang(lang).then((res) => {
      dispatch(loadLangSuccess(res));
    }).catch((err) => {
      throw(err);
    });
  };
}

export function loadLanguages() {
  return function(dispatch) {
    return languageApi.getAllLanguages().then((languages) => {
      dispatch(loadLanguagesSuccess(languages));
    }).catch((err) => {
      throw(err);
    });
  };
}
