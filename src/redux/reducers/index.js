import { combineReducers } from 'redux';
import { newsList } from './news-list';
import { readNews } from './read-news';

const trendingNews = combineReducers({
  newsList: newsList,
  readNews: readNews
});

export default trendingNews;
