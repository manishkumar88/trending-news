import {
  LOAD_LIST_START,
  LOAD_LIST_DONE,
  LOAD_LIST_ERR
} from '../actions/news-list';
import { newsList, NewsListDefault } from './news-list';

const getMockAction = (type, payload) => {
  return {
    type,
    payload
  };
};

describe('newsList reducer', () => {
  let mockAction;
  it('should return default state', () => {
    const newState = newsList(undefined, {});
    expect(newState).toEqual(NewsListDefault);
  });
  it('should set isLoading = true on LOAD_LIST_START', () => {
    mockAction = getMockAction(LOAD_LIST_START, null);
    const newState = newsList(undefined, mockAction);
    expect(newState.isLoading).toBe(true);
  });
  it('should set isLoading = false on LOAD_LIST_DONE', () => {
    mockAction = getMockAction(LOAD_LIST_DONE, null);
    const newState = newsList(undefined, mockAction);
    expect(newState.isLoading).toBe(false);
  });
  it('should set correct state with payload on LOAD_LIST_DONE', () => {
    const payload = { test: 'test' };
    mockAction = getMockAction(LOAD_LIST_DONE, payload);
    const newState = newsList(undefined, mockAction);
    expect(newState.list).toEqual(payload);
  });
  it('should set isLoading = false on LOAD_LIST_ERR', () => {
    mockAction = getMockAction(LOAD_LIST_ERR, null);
    const newState = newsList(undefined, mockAction);
    expect(newState.isLoading).toEqual(false);
  });
});
