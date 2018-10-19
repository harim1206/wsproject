import React, { Component } from 'react';
import ReactPlayer from 'react-player';

import VideoOverlay from "../assets/04_1280(16x9Video).jpg"
import '../css/Video.scss'

class Video extends Component{

  constructor() {
    super();

    this.state={
      overlay: true
    }
  }

  onOverlayClick = () =>{
    console.log('Hello')
    this.setState({overlay: false},()=>console.log(this.state))
  }

  onPause = () => {
    this.setState({overlay: true},()=>console.log(this.state))
  }

  render() {
    let toggleVideo = this.state.overlay ? false : true
    let overlayClass = this.state.overlay ? "video-overlay":"video-overlay video-overlay-hidden"

    return (
      <div className="video">
        <div
          className={overlayClass}
          onClick={this.onOverlayClick} >
          <img src={VideoOverlay}/>
        </div>

        <ReactPlayer
          className="react-player"
          url='https://youtu.be/k7x7jPEKH70'
          width='100%'
          height='100%'
          playing={toggleVideo}
          onPause={this.onPause}
        />
      </div>
    );
  }

}


export default Video
