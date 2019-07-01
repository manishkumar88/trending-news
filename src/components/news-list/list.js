import React, { Component } from 'react';
import { ReactReduxContext } from 'react-redux';
import { NewsItem } from '../news-item/item';
import { fetchPopularList } from '../../redux/actions/news-list';
import './list.scss';

class NewsList extends Component {
  static contextType = ReactReduxContext;
  componentDidMount() {
    this.context.store.dispatch(fetchPopularList());
  }

  render() {
    const isLoading = this.props.isLoading;
    const list = this.props.list;
    return (
      <div className="list">
        {isLoading && <h1>Loading...</h1>}
        {list &&
          list.results.map(each => (
            <NewsItem
              key={each.id}
              {...each}
              onClick={() => this.props.onItemClick(each)}
            />
          ))}
      </div>
    );
  }
}

export default NewsList;
