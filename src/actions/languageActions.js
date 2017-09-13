import * as types from './actionTypes';
import languageApi from '../api/mockLanguageApi';

export function loadLanguagesSuccess(languages) {
  return { type: types.LOAD_LANGUAGES_SUCCESS, languages };
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
