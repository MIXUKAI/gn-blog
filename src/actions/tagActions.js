import { FETCH_TAGS, HANDLE_LOADING } from './types';
import axios from 'axios';
import baseApiUrl from '../utils/api';

export const fetchTags = () => (dispatch) => {
	dispatch({
		type: HANDLE_LOADING,
		payload: true
	});
	const url = `${baseApiUrl}/article/tags`;
	axios.get(url).then((res) => {
		dispatch({
			type: FETCH_TAGS,
			payload: res.data
		});
		dispatch({
			type: HANDLE_LOADING,
			payload: false
		});
	});
};
