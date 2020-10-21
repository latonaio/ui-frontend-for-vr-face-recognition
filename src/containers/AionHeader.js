import {connect} from 'react-redux';
import AionHeader from '../components/AionHeader';
import {logoutAndRedirect} from '../actions/auth.actions';

const mapStateToProps = (state, _) => ({
  auth: state.auth
});

const mapDispatchToProps = dispatch => ({
  logoutAndRedirect() {
    dispatch(logoutAndRedirect());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AionHeader);
