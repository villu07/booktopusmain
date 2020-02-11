import { GET_ITEM, ITEM_LOADING } from '../actions/types';

const initialState = {
    items: [],
    loading: false
}

export default function (state = initialState, action) {
    switch (action.type) {

        case GET_ITEM:
            return {
                ...state,
                items: action.payload,
                loading: false
            };
           

        case ITEM_LOADING:
            return {
                ...state,
                loading: true
            };
            

        default:
            return state
    }
}
