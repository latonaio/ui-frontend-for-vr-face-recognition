import {connect} from 'react-redux';
import Instruction from '../views/Instruction';
import { registerImage } from "../actions/instructionlist.actions";

const mapStateToProps = (state, _) => ({
  ...state.main,
  ...state.streaming,
});

const mapDispatchToProps = dispatch => ({
  registerImage() {
    dispatch(registerImage());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Instruction);
