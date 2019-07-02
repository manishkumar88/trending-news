import React from 'react';
import { shallow } from 'enzyme';
import { NewsList } from './list';

const setUp = (props = {}) => {
  const comp = shallow(<NewsList {...props} />);
  return comp;
};

describe('<NewsList />', () => {
  it('renders loading state', () => {
    const comp = setUp({
      isLoading: true
    });
    expect(comp.find('.list').length).toBe(1);
    expect(comp.find('h1').length).toBe(1);
  });

  it('renders <NewsItem />s from reults', () => {
    const comp = setUp({
      isLoading: false,
      list: { results: [{ id: 1 }, { id: 2 }, { id: 3 }] }
    });
    expect(comp.find('h1').length).toBe(0);
    expect(comp.find('NewsItem').length).toBe(3);
  });
});
