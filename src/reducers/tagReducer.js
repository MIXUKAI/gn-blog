import { FETCH_TAGS } from '../actions/types';

const initialState = {
	items: []
};

export default function(state = initialState, action) {
	switch (action.type) {
		case FETCH_TAGS:
			return {
				...state,
				items: action.payload
			};
		default:
			return state;
	}
}
