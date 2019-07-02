import { API_KEY, api_endpoint } from '../../config';
export const LOAD_LIST_START = 'LOAD_LIST_START';
export const LOAD_LIST_DONE = 'LOAD_LIST_DONE';
export const LOAD_LIST_ERR = 'LOAD_LIST_ERR';

export function loadListStart() {
  return {
    type: LOAD_LIST_START
  };
}

export function loadListDone(LIST) {
  return {
    type: LOAD_LIST_DONE,
    payload: LIST
  };
}

export function loadListError(err) {
  return {
    type: LOAD_LIST_ERR,
    error: err
  };
}

export function fetchPopularList() {
  return async dispatch => {
    dispatch(loadListStart());
    const response = await fetch(`${api_endpoint}?api-key=${API_KEY}`);
    if (!response.ok) {
      dispatch(loadListError(response.statusText));
      throw new Error(response.statusText);
    } else {
      const data = await response.json();
      dispatch(loadListDone(data));
    }
  };
}
