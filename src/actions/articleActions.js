import { FETCH_ARTICLE_BY_ID, HANDLE_LOADING } from './types';
import baseApiUrl from '../utils/api';
import axios from 'axios';

export const fetchArticleById = (id) => (dispatch) => {
	const url = `${baseApiUrl}/article/${id}`;
	dispatch({
		type: HANDLE_LOADING,
		payload: true
	});
	console.log('fetch article');
	axios.get(url).then((res) => {
		const data = res.data;
		const { title, createAt, tags, md_content } = data;
		const article = { title, createAt, tags, md_content };
		dispatch({
			type: FETCH_ARTICLE_BY_ID,
			payload: article
		});
		dispatch({
			type: HANDLE_LOADING,
			payload: false
		});
	});
};
