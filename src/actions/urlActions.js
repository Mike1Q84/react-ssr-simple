import * as types from './actionTypes';

export function loadUrlSuccess(url) {
  return { type: types.LOAD_URL_SUCCESS, url };
}

export function loadUrlFailure() {
  return { type: types.LOAD_URL_FAILURE };
}

export function loadUrl(url) {
  return (dispatch) => {
    dispatch(loadUrlSuccess(url));
  }
}
