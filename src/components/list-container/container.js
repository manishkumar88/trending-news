import { connect } from 'react-redux';
import NewsList from '../news-list/list';
import { readNews } from '../../redux/actions/read-news';

const mapStateToProps = state => {
  return {
    isLoading: state.newsList.isLoading,
    list: state.newsList.list
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onItemClick: item => dispatch(readNews(item))
  };
};

export const ListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsList);
