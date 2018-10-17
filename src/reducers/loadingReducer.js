import { HANDLE_LOADING } from '../actions/types';

const initialState = {
	item: false
};

export default function(state = initialState, action) {
	switch (action.type) {
    case HANDLE_LOADING:
      console.log('loading rendcer');
			return {
				...state,
				item: action.payload
			};
		default:
			return state;
	}
}
