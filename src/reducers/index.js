import { combineReducers } from "redux";
import tagReducer from './tagReducer';
import articleReducer from './articleReducer';
import loadingReducer from './loadingReducer';

export default combineReducers({
  tags: tagReducer,
  article: articleReducer,
  loading: loadingReducer
})