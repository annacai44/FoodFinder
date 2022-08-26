import { FETCH_ALL, CREATE, UPDATE, DELETE, START_LOADING, END_LOADING } from '../constants/actionTypes';

// state must always be equal to something; the initial value of the state is [] bc there are no posts initially
// based on the action type, the reducer returns the state CHANGED by the action
export default (state = {isLoading: true, posts: []}, action) => {
    switch (action.type) {
        case START_LOADING:
            return { ...state, isLoading: true };
        case END_LOADING:
            return { ...state, isLoading: false };
        case FETCH_ALL:
            return { ...state, posts: action.payload };
        case CREATE:
            // we have to send over an array of posts; first we spread all the posts, and then we add a new post
            return { ...state, posts: [action.payload, ...state.posts] };
        case UPDATE:
            // action.payload is the updated post. we are looking for the post that should be changed
            return { ...state, posts: state.posts.map((post) => (post._id === action.payload._id ? action.payload : post)) };
        case DELETE:
            return { ...state, posts: state.posts.filter((post) => post._id !== action.payload) };
        default:
            return state;
    }
}