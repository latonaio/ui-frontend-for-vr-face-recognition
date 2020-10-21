import {connect} from 'react-redux';
import Streaming from '../views/Streaming';
import {getImgUrl} from "../actions/streaming.actions";

const mapStateToProps = (state, _) => ({
  ...state.main,
  ...state.streaming,
});

const mapDispatchToProps = dispatch => ({
  getImgUrl() {
    dispatch(getImgUrl());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Streaming);
