import { FETCH_ARTICLE_BY_ID } from './types';
import baseApiUrl from '../utils/api';
import axios from 'axios';

export const fetchArticleById = (id) => dispatch => {
  const url = `${baseApiUrl}/article/${id}`;
  axios.get(url)
    .then(res => {
      // this.props.loading(false);
      const data = res.data;
      const { title, createAt, tags, md_content } = data;
      const article = { title, createAt, tags, md_content };
      console.log(`fetching: ${article}`);
      dispatch({
        type: FETCH_ARTICLE_BY_ID,
        article
      });
    })
    .catch(err => console.log(err));
}