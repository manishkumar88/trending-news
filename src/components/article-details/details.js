import React from 'react';
import './details.scss';

export const ArticleDetails = ({ news }) => {
  if (!news) {
    return (
      <div className="pane__message">
        Please select an item in the left pane to read the complete article
      </div>
    );
  } else {
    return (
      <div className="pane__data">
        <iframe title="news" src={news.url} frameBorder="0" />
      </div>
    );
  }
};
