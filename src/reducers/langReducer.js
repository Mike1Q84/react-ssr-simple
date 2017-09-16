import * as types from '../actions/actionTypes';
import initState from './initState';

export default function langReducer(state = initState.lang, action) {
  switch (action.type) {
    case types.LOAD_LANG_SUCCESS:
      return action.lang;
    default:
      return state;
  }
}
