import React from 'react';
import { shallow } from 'enzyme';
import { NewsItem } from './item';

describe('<NewsItem />', () => {
  it('renders', () => {
    const comp = shallow(<NewsItem />);
  });
});
