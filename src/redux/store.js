import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import trendingNews from './reducers/index';

export const store = createStore(trendingNews, applyMiddleware(thunk));
