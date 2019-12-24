import { combineReducers } from 'redux'
import {navigationByMenu, selectedMenu} from "./fetchNavigation";

export default combineReducers({
    navigationByMenu,
    selectedMenu
})