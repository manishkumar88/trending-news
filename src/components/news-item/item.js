import React from 'react';
import './item.scss';

export const NewsItem = ({
  title,
  abstract,
  byline,
  published_date,
  media,
  onClick
}) => {
  return (
    <div className="item">
      <img
        className="item__thumb"
        src={media[0]['media-metadata'][1].url}
        alt="thumb"
      />
      <div className="item__details" onClick={onClick}>
        <div className="item__title" title={abstract}>
          {title}
        </div>
        <div className="item__footer">
          <span className="item__by">{byline}</span>
          <span className="item__date">
            <i className="material-icons">calendar_today</i>
            {published_date}
          </span>
        </div>
      </div>
      <i className="material-icons" style={{ color: '#666' }}>
        chevron_right
      </i>
    </div>
  );
};
