import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes';

// state must always be equal to something; the initial value of the state is [] bc there are no posts initially
// based on the action type, the reducer returns the state CHANGED by the action
export default (posts = [], action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload;
        case CREATE:
            // we have to send over an array of posts; first we spread all the posts, and then we add a new post
            return [...posts, action.payload];
        case UPDATE:
            // action.payload is the updated post. we are looking for the post that should be changed
            return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
        case DELETE:
            return posts.filter((post) => post._id !== action.payload);
        default:
            return posts;
    }
}