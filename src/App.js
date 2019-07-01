import React from 'react';
import './App.scss';
import { ListContainer } from './components/list-container/container';
import { ArticleContainer } from './components/article-container/container';

function App() {
  return (
    <div className="news">
      <div className="news__header">NY Times Most Popular</div>
      <div className="news__details">
        <div className="news__list">
          <ListContainer />
        </div>
        <div className="news__reader">
          <ArticleContainer />
        </div>
      </div>
    </div>
  );
}

export default App;
