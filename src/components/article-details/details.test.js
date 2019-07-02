import React from 'react';
import { shallow } from 'enzyme';
import { ArticleDetails } from './details';

const setUp = (props = {}) => {
  const comp = shallow(<ArticleDetails {...props} />);
  return comp;
};

describe('<NewsList />', () => {
  it('renders', () => {
    setUp();
  });
  it('renders a message when no article is selected', () => {
    const comp = setUp();
    expect(comp.find('.pane__message').length).toBe(1);
  });
  it('renders an iframe with the article selected', () => {
    const comp = setUp({
      news: {
        url: 'www.google.com'
      }
    });
    expect(comp.find('.pane__data > iframe').length).toBe(1);
  });
});
