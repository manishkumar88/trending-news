import { connect } from 'react-redux';
import { ArticleDetails } from '../article-details/details';

const mapStateToProps = state => {
  return {
    news: state.readNews.news
  };
};

export const ArticleContainer = connect(
  mapStateToProps
)(ArticleDetails);
