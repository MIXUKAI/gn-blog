import { FETCH_ARTICLE_BY_ID } from '../actions/types';

const initialState = {
  article: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_ARTICLE_BY_ID:
      console.log(action);
      return {
        ...state,
        article: action.article
      }
    default:
      return state;
  }
}