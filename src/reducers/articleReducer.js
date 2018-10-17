import { FETCH_ARTICLE_BY_ID } from '../actions/types';

const initialState = {
	item: {
		title: '',
		createAt: '',
		tags: [],
		md_content: ''
	}
};

export default function(state = initialState, action) {
	switch (action.type) {
		case FETCH_ARTICLE_BY_ID:
			console.log('article reducer');
			return {
				...state,
				item: action.payload
			};
		default:
			return state;
	}
}
