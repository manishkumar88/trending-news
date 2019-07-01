import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
// import configureStore from 'redux-mock-store';
// import thunk from 'redux-thunk';
import NewsList from './list';
import { store } from '../../redux/store';
// import { NewsItem } from '../news-item/item';

// const middlewares = [thunk];
// const mockStore = configureStore(middlewares);

describe('<NewsList />', () => {
  it('renders', () => {
    const comp = shallow(
      <Provider store={store}>
        <NewsList />
      </Provider>
    );
    // console.log(comp.debug());
    // expect(comp.find(NewsItem).length).toBe(1);
  });
});
