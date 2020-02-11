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

const initialState = {
    token: localStorage.getItem('token'),
    isAuthinticated: false,
    isLoading: false,
    user: null,
    msg: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case USER_LOADING:
            return {
                ...state,
                isLoading: true
            }


        case USER_LOADED:
            return {
                ...state,
                isAuthinticated: true,
                isLoading: false,
                user: action.payload
            }


        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
            localStorage.setItem('token', action.payload.token)
            return {
                ...state,
                ...action.payload,
                isAuthinticated: true,
                isLoading: false,
                msg: action.payload.msg
            }


        case AUTH_ERROR:
        case LOGIN_FAIL:
        case LOGOUT_SUCCESS:
        case REGISTER_FAIL:
            localStorage.removeItem('token');
            return {
                ...state,
                user: null,
                isAuthinticated: false,
                isLoading: false,
                token: null
            }
        default:
            return state;
    }
}