import * as types from '../actions/actionTypes';
import initState from './initState';

export default function languageReducer(state = initState.languages, action) {
  switch (action.type) {
    case types.LOAD_LANGUAGES_SUCCESS:
      return action.languages;
    default:
      return state;
  }
}
