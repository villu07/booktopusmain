import axios from 'axios';

import { GET_ITEM, ITEM_LOADING } from '../actions/types';

export const getItems = () => dispatch => {

    dispatch(itemLoading());
    axios
        .get('https://jsonplaceholder.typicode.com/photos')
        .then(res => {

            dispatch({
                type: GET_ITEM,
                payload: res.data
            })
        })
};



export const itemLoading = () => {
    return {
        type: ITEM_LOADING
    };
};
