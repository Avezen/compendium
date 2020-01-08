import { combineReducers } from 'redux'
import {navigationByMenu, selectedMenu} from "./fetchNavigation";
import {authenticatedUser} from "./authentication";

export default combineReducers({
    selectedMenu,
    navigationByMenu,
    authenticatedUser
})