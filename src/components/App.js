import React, { Component } from 'react';

class App extends Component {

  componentDidMount() {
    let naver = window.naver;
    let mapOptions = {
      zoom: 7,
      zoomControl: true,
      zoomControlOptions: {
        style: naver.maps.ZoomControlStyle.SMALL,
        position: naver.maps.Position.TOP_RIGHT
      }
    }
    let map = new naver.maps.Map('map', mapOptions);
  }
  render() {	  
    return ( 
      <div id='map' style={{ height: '100vh' }}></div>  
    );
  }	  
}

export default App;