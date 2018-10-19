import React, { Component } from 'react';
import ReactPlayer from 'react-player';

import VideoOverlay from "../assets/04_1280(16x9Video).jpg"
import '../scss/Video.scss'

class Video extends Component{

  constructor() {
    super();

    this.state={
      overlay: true
    }

    this.onScroll = this.onScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll)
  }

  onOverlayClick = () =>{
    this.setState({overlay: false})
  }

  onPause = () => {
    this.setState({overlay: true})
  }

  onScroll = (event) =>{
    const heroDivHeight = document.querySelector(".hero").clientHeight
    const contentDivHeight = document.querySelector(".content").clientHeight
    const videoWindowYPosition = heroDivHeight + contentDivHeight

    if(videoWindowYPosition - window.pageYOffset > window.innerHeight)
      this.setState({overlay:true})
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
