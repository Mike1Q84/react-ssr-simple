import * as types from '../actions/actionTypes';
import initState from './initState';

export default function noLangReducer(state = initState.noLang, action) {
  switch (action.type) {
    case types.LOAD_LANG_FAILURE:
      return action.noLang;
    default:
      return state;
  }
}
