import React from 'react';
import { NewsItem } from '../news-item/item';
import './list.scss';

export const NewsList = ({ isLoading, list, onItemClick }) => {
  return (
    <div className="list">
      {isLoading && <h1>Loading...</h1>}
      {list &&
        list.results.map(each => (
          <NewsItem key={each.id} {...each} onClick={() => onItemClick(each)} />
        ))}
    </div>
  );
};
