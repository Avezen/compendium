import { connect } from 'react-redux'
import { setMenuTechnology } from '../store/actions'
import {MenuItem} from "../components/Menu/MenuItem/MenuItem";


const mapStateToProps = (state, ownProps) => ({
    active: ownProps.technology === state.menuTechnology
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => dispatch(setMenuTechnology(ownProps.technology))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MenuItem)