import { connect } from 'react-redux'
import {MenuTechnology, toggleTodo} from '../store/actions'
import {Navigation} from "../components/Navigation/Navigation";

const getCurrentNavigationTree = (navTree, technology) => {
    switch (filter) {
        case MenuTechnology.SYMFONY:
            return navTree;
        case MenuTechnology.REACT:
            return todos.filter((t: any) => t.completed);
        case MenuTechnology.CSS:
            return todos.filter((t: any) => !t.completed);
        default:
            throw new Error('Unknown filter: ' + filter)
    }
};

const mapStateToProps = (state) => ({
    navTree: getCurrentNavigationTree(state.navTree, state.menuTechnology)
});

const mapDispatchToProps = (dispatch) => ({
    toggleTodo: (id) => dispatch(toggleTodo(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Navigation)