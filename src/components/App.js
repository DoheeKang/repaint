import React, { Component } from "react";

class App extends Component {
  componentDidMount() {
    let mapOptions = {
      zoom: 7,
      zoomControl: true,
      zoomControlOptions: {
        style: naver.maps.ZoomControlStyle.SMALL,
        position: naver.maps.Position.TOP_RIGHT
      }
    };
    let map = new naver.maps.Map("map", mapOptions);
  }
  render() {
    return <div id="map" style={{ height: "100vh" }} />;
  }
}

export default App;
