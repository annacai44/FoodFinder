import { AUTH, LOGOUT } from '../constants/actionTypes';

const authReducer = (state = { authData: null }, action) => {
    switch (action.type) {
        case AUTH:
            // setting all of the data of the login to the localStorage
            localStorage.setItem('profile', JSON.stringify({ ...action?.data }));
            return { ...state, loading: false, authData: action?.data };
        case LOGOUT:
            localStorage.clear();
            return { ...state, loading: false, authData: null };
        default:
            return state;
    }
}

export default authReducer;