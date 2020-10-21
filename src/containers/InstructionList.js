import { connect } from "react-redux";
import InstructionList from "../views/InstructionList";
import { getHistory } from "../actions/instructionlist.actions";

const mapStateToProps = (state, _) => ({
  ...state.main,
  ...state.instructionList,
});

const mapDispatchToProps = (dispatch) => ({
  getHistory() {
    dispatch(getHistory());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(InstructionList);
