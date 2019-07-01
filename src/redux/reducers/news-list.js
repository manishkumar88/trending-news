import {
  LOAD_LIST_START,
  LOAD_LIST_DONE,
  LOAD_LIST_ERR
} from '../actions/news-list';

export const NewsListDefault = {
  isLoading: false,
  list: null,
  error: null
};
export function newsList(state = NewsListDefault, action) {
  switch (action.type) {
    case LOAD_LIST_START:
      return {
        ...state,
        isLoading: true,
        list: null,
        error: null
      };
    case LOAD_LIST_DONE:
      return {
        ...state,
        isLoading: false,
        list: action.payload
      };
    case LOAD_LIST_ERR:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
}
