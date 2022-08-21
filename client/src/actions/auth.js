import * as api from '../api';
import { AUTH } from '../constants/actionTypes';

// need to create the endpoints from the backend

// history is to navigate to the homepage
export const signin = (formData, history) => async (dispatch) => {
    try {
        // destructure the data from the API request
        const { data } = await api.signIn(formData);
        dispatch({ type: AUTH, data });
        history.push('/');
    } catch (err) {
        console.log(err);
    }
}

export const signup = (formData, history) => async (dispatch) => {
    try {
        // sign up the user...
        const { data } = await api.signUp(formData);
        dispatch({ type: AUTH, data });
        history.push('/');
    } catch (err) {
        console.log(err);
    }
}