import React from "react";

import { Button, Grid, Icon } from "semantic-ui-react";
import AionHeader from "../containers/AionHeader";
import WindowSizeListener from "react-window-size-listener";
import Navbar from "../containers/Navbar";

import { NavLink } from "react-router-dom";

class Streaming extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.params = this.props.match.params;
    this.state = {
      imgUrl:
        process.env.REACT_APP_PUBLIC_URL +
        "uploads/list/" +
        this.params.id +
        ".jpg",
      remoteDate: "",
      gridHeight: 800,
      drawingStep: 0,
      x0: null,
      y0: null,
      x1: null,
      y1: null,
    };
  }

  getContext = () => {
    let canvas = document.getElementById("canvas");
    return canvas.getContext("2d");
  };

  componentDidMount() {
    this.loadImage();
  }

  loadImage = () => {
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");

    var img = new Image();
    img.setAttribute('crossOrigin', 'anonymous');
    img.src = this.state.imgUrl;

    //画像をセットする
    img.onload = () => {
      ctx.canvas.height = ctx.canvas.clientHeight;
      ctx.canvas.width = ctx.canvas.clientWidth;

      let height;
      let width;
      if (ctx.canvas.height < (ctx.canvas.width * img.height) / img.width) {
        // 画像の縦幅にあわせる
        width = img.width * (ctx.canvas.height / img.height);
        height = ctx.canvas.height;
      } else {
        // 画像の横幅にあわせる
        width = ctx.canvas.width;
        height = img.height * (ctx.canvas.width / img.width);
      }
      // this.renderingImageWidth = width;
      // this.renderingImageHeight = height;
      ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, width, height);
    };
  };

  draw = (e) => {
    let { x0, y0 } = this.state;
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");
    let { x, y } = e.target.getBoundingClientRect();
    const { drawingStep } = this.state;
    if (drawingStep === 0) {
      let x0 = e.pageX - x;
      let y0 = e.pageY - y;
      this.setState({ x0, y0, drawingStep: 1 });
      //pageX、pageY　マウスの座標
      //x,y スタート地点の座標
      ctx.beginPath();
      ctx.lineWidth = 3;
      ctx.fillStyle = "red";
      ctx.rect(x0, y0, 2, 2);
      ctx.fill();
    } else {
      let width = e.pageX - x - x0;
      let height = e.pageY - y - y0;
      ctx.beginPath();
      ctx.lineWidth = 5;
      ctx.strokeStyle = "red";
      ctx.rect(x0, y0, width, height);
      ctx.stroke();
      this.setState({ drawingStep: 2 });
    }
  };

  clearRect = () => {
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.setState({ drawingStep: 0 });
    this.loadImage();
  };

  handleCaptureButton = () => {
    let canvas = document.getElementById("canvas");
    const base64 = canvas.toDataURL("image/jpeg", 1.0);
    console.log({ base64 });
    this.props.registerImage(this.workID, this.convertToBlob(base64));
  };

  convertToBlob = (base64) => {
    const binaryData = atob(base64.replace(/^.*,/, ""));
    const buffer = new Uint8Array(binaryData.length);
    for (let i = 0; i < binaryData.length; i++) {
      buffer[i] = binaryData.charCodeAt(i);
    }
    return new Blob([buffer.buffer], {
      type: "image/jpeg",
    });
  };

  render() {
    const { drawingStep } = this.state;
    return (
      <div>
        <WindowSizeListener
          onResize={(windowSize) => {
            const gridHeight = windowSize.windowHeight - 50;
            this.setState({ gridHeight });
          }}
        />

        <AionHeader title="Main" />

        <Grid style={{ height: this.state.gridHeight + "px" }}>
          <Grid.Column width={3}>
            <Navbar />
          </Grid.Column>

          <Grid.Column width={13}>
            <Grid
              style={{
                marginTop: "12px",
              }}
            >
              <Grid.Column width={12}>
                <div style={{ fontSize: "22px" }}>
                  ２点をタップして範囲を指定してください。
                </div>
                <div className={"image-area"}>
                  <canvas
                    id="canvas"
                    onClick={(e) =>
                      drawingStep === 2 ? this.clearRect() : this.draw(e)
                    }
                    style={{
                      position: "relative",
                      marginTop: "12px",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: "12px",
                  }}
                >
                  <NavLink to="/instruction">
                    <Icon name="arrow circle left" color="grey" size="huge" />
                  </NavLink>
                  <div>
                    <Button size="huge" color="grey" onClick={this.clearRect}>
                      キャンセル
                    </Button>
                    <Button
                      size="huge"
                      color="grey"
                      onClick={this.handleCaptureButton}
                      disabled={drawingStep < 2 ? true : false}
                    >
                      作業者へ送信
                    </Button>
                  </div>
                  <div  name="arrow circle left" />
                </div>
              </Grid.Column>
            </Grid>
          </Grid.Column>
        </Grid>

        {/* <Footer /> */}
      </div>
    );
  }
}

export default Streaming;
