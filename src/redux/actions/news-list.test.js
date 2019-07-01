import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { loadListStart, fetchPopularList } from './news-list';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
describe('fetching article list', () => {
  it('tests the dispatched actions', () => {
    const store = mockStore({});
    return store.dispatch(fetchPopularList()).then(() => {
      const actions = store.getActions();
      expect(actions.length).toBe(2);
      expect(actions[0]).toEqual(loadListStart());
    });
  });
});
