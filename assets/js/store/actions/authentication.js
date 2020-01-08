import {fetchUser} from "../../service/Api";

export const IS_AUTHENTICATED = 'IS_AUTHENTICATED';
export const REQUEST_USER = 'REQUEST_USER';
export const RECEIVE_USER = 'RECEIVE_USER';

export const isAuthenticated = isAuthenticated => {
    return {
        type: IS_AUTHENTICATED,
        isAuthenticated
    }
};

const requestUser = () => {
    return {
        type: REQUEST_USER
    }
};

const receiveUser = data => {
    return {
        type: RECEIVE_USER,
        user: data
    }
};

export const fetchAuthenticatedUser = () => {
    return dispatch => {
        dispatch(requestUser());
        return fetchUser()
        //.then(response => response.json())
            .then(json => {
                dispatch(receiveUser(json.data))
            })
    }
};
