import React, { Component } from 'react'
import DrawingBox from './DrawingBox'
import '../less/App.less'

class App extends Component {
  state = {
    // 그리기 모드 확인
    isDrawingMode: false
  }
  componentDidMount() {
    let mapOptions = {
      zoom: 7,
      zoomControl: true,
      zoomControlOptions: {
        style: naver.maps.ZoomControlStyle.SMALL,
        position: naver.maps.Position.TOP_RIGHT
      }
    }
    const map = new naver.maps.Map('map', mapOptions)
    this.setState({ map })
  }

  handleToggleisDrawing = () => {
    const { isDrawingMode } = this.state
    this.setState({
      isDrawingMode: !isDrawingMode
    })
  }

  render() {
    const { map, isDrawingMode } = this.state
    return (
      <div id="wrapper">
        <div id="map">
          <DrawingBox
            map={map}
            isDrawingMode={isDrawingMode}
            onToggle={this.handleToggleisDrawing}
          />
        </div>
      </div>
    )
  }
}

export default App
