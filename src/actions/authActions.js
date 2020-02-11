import {
    AUTH_ERROR,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS,
    REGISTER_FAIL,
    REGISTER_SUCCESS,
    USER_LOADED,
    USER_LOADING
} from '../actions/types';
import { getErrors } from '../actions/errorActions';
import axios from 'axios';

/**
 * This function action creator is used for check the authenticity of the user
 */

export const loadUser = () => (dispatch, getState) => {

    /**
     * First we set isLoading to true for spinner
     */
    dispatch({
        type: USER_LOADING
    })


    /** 
     * Now we will call GET method of accessing token 
     * to validate user at clicks we have created tokenConfig() a function
     * so that we can call it from anywhere 
    */
    axios.get('/auth/accessAuthintication', tokenConfig(getState))

        .then(res => dispatch({

            type: USER_LOADED,
            payload: res.data
        })
        )
        .catch(err => {
            dispatch(getErrors(err.response.data, err.response.status));
            dispatch({

                type: AUTH_ERROR
            });
        })
}

/**
 * Register user
 */

export const registerUser = () => newUser => dispatch => {

    console.log(newUser)
    axios
        .post('/users/signup', {
            first_name: newUser.firstName,
            last_name: newUser.lastName,
            email: newUser.email,
            password: newUser.password,
            contact: newUser.contact,
            gender: newUser.gender,
            code: newUser.code
        })
        .then(res => {
            dispatch({
                type: REGISTER_SUCCESS,
                //payload: res.data
            })
        })
        .catch(err => {
            dispatch(getErrors(err.response.data, err.response.status));
            dispatch({
                type: REGISTER_FAIL
            })
        })
}

export const tokenConfig = getState => {

    /**
     * Getting the token from local storage
     */
    const token = getState().auth.token;

    /** header content */
    const config = {
        headers: {
            "content-type": "application/json"
        }
    };

    /** if there is a token , then we will set it to x-auth-token */
    if (token) {
        config.headers['x-auth-token'] = token;
    };
}