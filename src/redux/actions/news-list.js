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

const url =
  'http://api.nytimes.com/svc/mostpopular/v2/mostviewed/all-sections/7.json';
const apiKey = 'TdlQjlbEMKVqQMARD0mWHPFNvbU7E4nd';

export function fetchPopularList() {
  return async dispatch => {
    dispatch(loadListStart());
    const response = await fetch(`${url}?api-key=${apiKey}`);
    if (!response.ok) {
      dispatch(loadListError(response.statusText));
      throw new Error(response.statusText);
    } else {
      const data = await response.json();
      dispatch(loadListDone(data));
      // return data;
    }
  };
}
