export const READ_NEWS = 'READ_NEWS';

export function readNews(news) {
  return {
    type: READ_NEWS,
    payload: news
  };
}
