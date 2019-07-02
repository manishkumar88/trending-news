import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import trendingNews from './reducers/index';
import { fetchPopularList } from './actions/news-list';

export const store = createStore(trendingNews, applyMiddleware(thunk));
store.dispatch(fetchPopularList());
