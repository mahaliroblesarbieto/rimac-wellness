import React from 'react';
import YouTube from 'react-youtube';
import './App.scss';
 
class YouTubeContainer extends React.Component {
  render() {
    const opts = {
    //   height: '390',
    //   width: '440',
    //   width: 370,
    //   height: 600,
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };
 
    return (
      <YouTube
        videoId={this.props.videoId}
        opts={opts}
        className={"video-width"} 
        onReady={this._onReady}
      />
    );
  }
 
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

export default YouTubeContainer;