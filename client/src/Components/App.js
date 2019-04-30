import React, { Component } from 'react'
import DrawingBox from './DrawingBox'
import FilterBox from './FilterBox'
import '../less/App.less'

class App extends Component {
  state = {
    map: undefined,
    // 그리기 모드 확인
    isDrawingMode: false,
    showDraw: true,
    showFilter: false
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

  toggleisDrawing = () => {
    const { isDrawingMode } = this.state
    this.setState({
      isDrawingMode: !isDrawingMode
    })
  }

  toggleshowFilter = () => {
    const { showFilter } = this.state
    this.setState({
      showFilter: !showFilter
    })
  }

  toggleshowDraw = () => {
    const { showDraw } = this.state
    this.setState({
      showDraw: !showDraw
    })
  }

  render() {
    const { map, isDrawingMode, showDraw, showFilter } = this.state
    return (
      <div id="wrapper">
        <div id="map">
          <div id="menu">
            <div className="menuBtn" onClick={this.toggleshowFilter}>
              필터
            </div>
            <div className="menuBtn" onClick={this.toggleshowDraw}>
              그리기
            </div>
          </div>
          <div className={showDraw ? 'show' : 'hide'}>
            <DrawingBox
              map={map}
              isDrawingMode={isDrawingMode}
              toggleisDrawing={this.toggleisDrawing}
              toggleshowDraw={this.toggleshowDraw}
            />
          </div>
          <div className={showFilter ? 'show' : 'hide'}>
            <FilterBox />
          </div>
        </div>
      </div>
    )
  }
}

export default App