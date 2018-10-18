import React, { Component } from 'react';
import ReactPlayer from 'react-player';

import '../css/Video.scss'

class Video extends Component{

  constructor() {
    super();
  }

  render() {
    return (
      <div className="video">
        <ReactPlayer
          className="react-player"
          url='https://www.youtube.com/watch?v=hRbD43uC_L8'
          width='100%'
          height='100%'
        />
      </div>
    );
  }

}


export default Video
