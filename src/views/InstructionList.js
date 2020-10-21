import React from 'react';

import {Link} from 'react-router-dom'
import {Button, Grid, Segment, Table, Image} from 'semantic-ui-react'
import AionHeader from '../containers/AionHeader';
import WindowSizeListener from 'react-window-size-listener'
import Navbar from "../containers/Navbar";


class Streaming extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.props.getHistory();
    this.state = {
        imgUrl: "",
        remoteDate: "",
        gridHeight: 800
    };
  }

  showImageList = () => {
    console.log(this.props.image_list)
    if(this.props.image_list){
      return(
        this.props.image_list.map((image) => {
          console.log(image)
          console.log(image.name)
          console.log(image.name.replace(/.jpg/g,''))
          const link = "/instruction/"+image.name.replace(/.jpg/g,'');
          return(
                  <Grid.Column width={3}>
                    <Link to={link}>
                      <Image src={process.env.REACT_APP_PUBLIC_URL+image.url} />
                    </Link>
                    {image.time}
                  </Grid.Column>
          )
        })
      )
    } else {
      return "";
    }
  }

  render() {
    return (
      <div>
        <WindowSizeListener onResize={windowSize => {
          const gridHeight = windowSize.windowHeight - 50;
          this.setState({gridHeight: gridHeight});
        }}/>

        <AionHeader title="Main"/>

        <Grid style={{height: this.state.gridHeight + "px"}}>
          <Grid.Row style={{'padding-bottom': 0}}>
            <Grid.Column width={3}>
              <Navbar/>
            </Grid.Column>

            {/*TODO: START */}

            <Grid.Column width={13}>
              <Grid style={{'margin-top': '12px'}}>
                <Grid.Row>
                  {this.showImageList()}
                </Grid.Row>
              </Grid>

              {/*TODO: END */}
            </Grid.Column>
          </Grid.Row>
        </Grid>


        {/* <Footer /> */}
      </div>
    )
  }
}


export default Streaming;
