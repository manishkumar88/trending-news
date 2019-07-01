import { READ_NEWS } from '../actions/read-news';

export const News = {
  news: null
};

export function readNews(state = News, action) {
  switch (action.type) {
    case READ_NEWS:
      return {
        ...state,
        news: action.payload
      };
    default:
      return state;
  }
}
