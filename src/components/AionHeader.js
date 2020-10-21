import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export default class AionHeader extends React.Component {
  render() {
    return (
      <AppBar position="static">
        <Toolbar>
          <img src={"/header_image.png"} alt={"logo"} className={"header-logo"}/>
          <Typography variant="title" color="inherit">
            {this.props.titles ? this.props.titles.join(` - `) : "VR遠隔作業支援システム"}
          </Typography>
          <div className={"corporate_logo"}>
            <img src={"/latona_logo.png"} alt={"logo"} className={"header-logo"}/>
            <img src={"/aion_logo.png"} alt={"logo"} className={"header-logo"}/>
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}
