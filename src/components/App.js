import React, { Component } from "react";
import DrawingBox from "./DrawingBox";
import "../less/App.less";

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
    return (
      <div id="wrapper">
        <div id="map">
          <DrawingBox />
        </div>
      </div>
    );
  }
}

export default App;
