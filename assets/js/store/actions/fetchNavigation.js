import {fetchNavigationTree} from "../../service/NavigationTreeService";

export const REQUEST_NAVIGATION = 'REQUEST_NAVIGATION';
export const RECEIVE_NAVIGATION = 'RECEIVE_NAVIGATION';
export const SELECT_MENU_ITEM = 'SELECT_MENU_ITEM';
export const INVALIDATE_MENU_ITEM = 'INVALIDATE_MENU_ITEM';

export const selectMenuItem = (menuItem) => {
    return {
        type: SELECT_MENU_ITEM,
        menuItem
    }
};

export const invalidateMenuItem = (menuItem) => {
    return {
        type: INVALIDATE_MENU_ITEM,
        menuItem
    }
};

const requestNavigation = (menuItem) => {
    return {
        type: REQUEST_NAVIGATION,
        menuItem
    }
};


const receiveNavigation = (menuItem, json) => {
    return {
        type: RECEIVE_NAVIGATION,
        menuItem,
        navigation: json,
        receivedAt: Date.now()
    }
};


export const fetchNavigation = (menuItem) => {
    return dispatch => {
        dispatch(requestNavigation(menuItem));
        return fetchNavigationTree(menuItem)
            //.then(response => response.json())
            .then(json => {
                dispatch(receiveNavigation(menuItem, json))
            })
    }
};


const shouldFetchNavigation = (state, menuItem) => {
    const navigation = state.navigationByMenu[menuItem];
    if (!navigation) {
        return true
    } else if (navigation.isFetching) {
        return false
    } else {
        return navigation.didInvalidate
    }
};


export const fetchNavigationIfNeeded = (menuItem) => {
    return (dispatch, getState) => {
        if (shouldFetchNavigation(getState(), menuItem)) {
            return dispatch(fetchNavigation(menuItem))
        }
    }
};