import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { ListContainer } from './container';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const setUp = (props = {}) => {
  const store = mockStore({});
  const comp = shallow(
    <Provider store={store}>
      <ListContainer {...props} />
    </Provider>
  );
  return comp;
};
describe('<ListContainer />', () => {
  it('renders', () => {
    setUp();
  });
});
