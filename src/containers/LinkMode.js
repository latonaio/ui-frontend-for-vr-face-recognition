import {connect} from 'react-redux';
import LinkMode from "../components/LinkMode";
import {linkModeConstants} from "../constants";

const mapStateToProps = (state, _) => ({
  ...state.link_mode,
});

const mapDispatchToProps = dispatch => ({
  setMode(isRealtime) {
    dispatch({type: linkModeConstants.SET_MODE, isRealtime});
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LinkMode);
