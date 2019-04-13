import React, { Component } from 'react'
import DrawingBox from './DrawingBox'
import '../less/App.less'

class App extends Component {
  state = {
    // 그리기 모드 확인
    isDrawing: false
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
    let map = new naver.maps.Map('map', mapOptions)
    naver.maps.Event.addListener(map, 'click', e => {
      const { isDrawing } = this.state
      if (isDrawing) {
        console.log('도형을 그리자')
      }
    })
  }

  handleToggleisDrawing = () => {
    const { isDrawing } = this.state
    this.setState({
      isDrawing: !isDrawing
    })
  }

  render() {
    const { isDrawing } = this.state
    return (
      <div id="wrapper">
        <div id="map">
          <DrawingBox onToggle={this.handleToggleisDrawing} />
        </div>
      </div>
    )
  }
}

export default App
