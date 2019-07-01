import { READ_NEWS } from '../actions/read-news';
import { readNews, News } from './read-news';

const getMockAction = (type, payload) => {
  return {
    type,
    payload
  };
};

describe('readNews reducer', () => {
  let mockAction;
  it('should return default state', () => {
    const newState = readNews(undefined, {});
    expect(newState).toEqual(News);
  });
  it('should set correct state with payload on READ_NEWS', () => {
    const payload = { test: 'test' };
    mockAction = getMockAction(READ_NEWS, payload);
    const newState = readNews(undefined, mockAction);
    expect(newState.news).toEqual(payload);
  });
});
