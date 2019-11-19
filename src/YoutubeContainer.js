import React from 'react';
import YouTube from 'react-youtube';
import './App.scss';

class YouTubeContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      url: '',
    }
  }

  componentDidMount() {
    const BASE_EMBED_URL = 'https://www.youtube.com/embed/';
    const embedUrl = `${BASE_EMBED_URL}${this.props.id}?autoplay=1`;
this.setState({url: embedUrl})
  }

  // onYouTubeIframeAPIReady() {
  //   player = new YT.Player('player', {
  //     height: '360',
  //     width: '640',
  //     videoId: 'M7lc1UVf-VE',
  //     events: {
  //       'onReady': onPlayerReady,
  //       'onStateChange': onPlayerStateChange
  //     }
  //   });
  // }

  onPlayerStateChange = (event) => {
    console.log('entra a la funcion');
    
    // if (event.data == YT.PlayerState.PLAYING){
      console.log('entra cuando empieza video supuestamente');
      
      //your code here
    // }
}

onReady = (e) => {
  console.log(e);
  
  console.log('detecta que el video comenzo');
  
}

  render() {
    return (
      <iframe id="player"
      className="video-width" src={this.state.url} frameBorder='0'
            allow='autoplay; encrypted-media' allowFullScreen onReady={this.onReady} onStateChange={this.onPlayerStateChange}></iframe>
    );
  }
 
}

export default YouTubeContainer;