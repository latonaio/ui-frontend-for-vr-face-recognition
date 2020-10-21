import React from "react";

import { Button, Grid, Segment, Table, Image } from "semantic-ui-react";
import AionHeader from "../containers/AionHeader";
import WindowSizeListener from "react-window-size-listener";
import Navbar from "../containers/Navbar";

class Streaming extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      imgUrl: "",
      remoteDate: "",
      gridHeight: 800,
    };
  }

  componentDidMount = () => (this.timerID = setInterval(this.updateImg, 500));
  componentWillUnmount = () => clearInterval(this.timerID);

  updateImg = () => {
    this.props.getImgUrl();
    var imgurl = "";
    if (this.props.imgUrl !== "") {
      imgurl = process.env.REACT_APP_PUBLIC_URL + this.props.imgUrl;
    }
    this.setState({
      imgUrl: imgurl,
      remoteDate: this.props.remoteDate,
    });
  };

  showVrImage = () => {
    if (this.state.imgUrl !== "") {
      return (
        <div style={{ "background-color": "black" }}>
          <Image src={this.state.imgUrl} />
        </div>
      );
    } else {
      return <div style={{ "background-color": "black" }}></div>;
    }
  };

  render() {
    return (
      <div>
        <WindowSizeListener
          onResize={(windowSize) => {
            const gridHeight = windowSize.windowHeight - 50;
            this.setState({ gridHeight: gridHeight });
          }}
        />

        <AionHeader title="Main" />

        <Grid style={{ height: this.state.gridHeight + "px" }}>
          <Grid.Row style={{ "padding-bottom": 0 }}>
            <Grid.Column width={3}>
              <Navbar />
            </Grid.Column>

            {/*TODO: START */}

            <Grid.Column width={13}>
              <Grid
                style={{
                  marginTop: "12px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div style={{display:"flex",justifyContent:"flex-end"}}>
                  <Segment>作業日: {this.state.remoteDate}</Segment>
                </div>
                <Grid.Column width={12}>{this.showVrImage()}</Grid.Column>

                <Grid.Row>
                  <Grid.Column width={2}>
                    {/* TODO:Text img field */}
                  </Grid.Column>
                  <Grid.Column width={4}>
                    {/* TODO:Text input field */}
                  </Grid.Column>
                </Grid.Row>
              </Grid>

              {/*TODO: END */}
            </Grid.Column>
          </Grid.Row>
        </Grid>

        {/* <Footer /> */}
      </div>
    );
  }
}

export default Streaming;
