import { FETCH_ARTICLE_BY_ID, FETCH_TAGS } from './types'; 
import fetch from '../utils/fetch';

export const fetchArticleById = (id) => (dispatch) => {
	const article = sessionStorage.getItem(`article_${id}`);
	if (article) {
		dispatch({
			type: FETCH_ARTICLE_BY_ID,
			payload: JSON.parse(article)
		});
	} else {
		console.log('fetch article');
		fetch.get(`/article/${id}`).then((res) => {
			const { title, createAt, tags, md_content } = res.data;
			const article = { title, createAt, tags, md_content };
			dispatch({
				type: FETCH_ARTICLE_BY_ID,
				payload: article
			});
		});
	}
};

export const fetchTags = () => (dispatch) => {
  fetch.get('/article/tags').then((res) => { 
    dispatch({ 
      type: FETCH_TAGS,
			payload: res.data
		});
	});
};


