import {IS_AUTHENTICATED, REQUEST_USER, RECEIVE_USER} from "../actions/authentication";
import {isObjectEmpty} from "../../helpers";



const user = (
    state = {
        isFetching: false,
        didInvalidate: false,
        user: null
    },
    action
) => {
    switch (action.type) {
        case REQUEST_USER:
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false
            });
        case RECEIVE_USER:
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                user: isObjectEmpty(action.user) ? null : action.user,
            });
        default:
            return state
    }
};


export const authenticatedUser = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_USER:
        case REQUEST_USER:
            return Object.assign({}, state, (
                user(state, action)
            ));
        default:
            return state
    }
};

// export const getProducts = state => state.productsReducer.products;
// export const getProductsPending = state => state.productsReducer.pending;
// export const getProductsError = state => state.productsReducer.error;