import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import {Helmet} from 'react-helmet';

import {withStyles} from '@material-ui/core/styles';
import {library} from '@fortawesome/fontawesome-svg-core'
import {faCheckSquare, faCogs, faTachometerAlt, faFileExport} from '@fortawesome/free-solid-svg-icons'

//import Menu from "./views/Menu";
import Streaming from "./containers/Streaming";
import InstructionList from "./containers/InstructionList";
import Instruction from "./containers/Instruction";

library.add(faCheckSquare, faCogs, faFileExport, faTachometerAlt);

const styles = {
  root: {
    flexGrow: 1,
  },
};

class App extends Component {
  render() {
    const {classes} = this.props;
    return (
      <div className={classes.root}>
        <Switch>
          <Route exact path="/" component={Streaming}/>
          <Route exact path="/instruction" component={InstructionList}/>
          <Route path="/instruction/:id" component={Instruction}/>
        </Switch>
      </div>
    );
  }
}

export default withStyles(styles)(App);
