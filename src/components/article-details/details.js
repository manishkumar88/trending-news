import React from 'react';
import './details.scss';

export const ArticleDetails = ({ news }) => {
  const style = {
    height: '100%',
    width: '100%'
  };
  if (!news) {
    return (
      <div style={{ padding: '0 100px' }}>
        Please select an item in the left pane to read the complete article
      </div>
    );
  } else {
    return (
      <div style={style}>
        <iframe style={style} title="news" src={news.url} frameborder="0" />
      </div>
    );
  }
};
