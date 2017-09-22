import * as types from '../actions/actionTypes';
import initState from './initState';

export default function urlReducer(state = initState.url, action) {
  switch (action.type) {
    case types.LOAD_URL_SUCCESS:
      return action.url;
    default:
      return state;
  }
}
