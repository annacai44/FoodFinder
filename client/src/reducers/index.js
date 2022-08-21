import { combineReducers } from "redux";
import posts from './posts';
import auth from './auth';

// put in all the individual reducers that we have
export default combineReducers({ posts, auth });