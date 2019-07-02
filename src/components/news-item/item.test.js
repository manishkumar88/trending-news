import React from 'react';
import { shallow } from 'enzyme';
import { NewsItem } from './item';

const setUp = (props = {}) => {
  const comp = shallow(<NewsItem {...props} />);
  return comp;
};

describe('<NewsItem />', () => {
  let comp;
  const mockClickCallback = jest.fn();
  const props = {
    title: 'mock news title',
    media: [
      {
        'media-metadata': [
          {
            url: 'abc.com/def.jpg'
          },
          {
            url: 'abc.com/def.jpg'
          }
        ]
      }
    ],
    onClick: mockClickCallback
  };
  beforeEach(() => {
    comp = setUp(props);
  });
  it('renders', () => {
    expect(comp.find('.item__thumb').length).toBe(1);
  });
  it('calls onClick on item click', () => {
    comp.find('.item__details').simulate('click');
    expect(mockClickCallback.mock.calls.length).toBe(1);
  });
});
