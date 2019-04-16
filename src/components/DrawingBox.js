import React, { Component } from 'react'
import ShapeButtonList from './ShapeButtonList'
import FactorButtonList from './FactorButtonList'
import Rect from '../CustomOverlay/Rect'
import '../less/DrawingBox.less'

class DrawingBox extends Component {
  shapeList = ['Line', 'Arrow', 'Rect', 'Circle', 'Polygon']
  factorList = [
    '상권',
    '신축/재개발',
    '교육',
    '업무지구',
    '도로개통/확장',
    '대중교통',
    '기타'
  ]
  // 그릴 도형 종류
  drawShape = ''
  // 그릴 호재 종류
  factor = ''

  componentDidUpdate(prevProps) {
    const { map } = this.props
    if (prevProps.map !== map) {
      let isClicked = false
      let figure, position
      let lineData = []
      naver.maps.Event.addListener(map, 'click', e => {
        // isDrawingMode: 그리기 모드이냐 (그리기가 끝나면 false로 바꿔주어야함)
        const { isDrawingMode } = this.props
        // 그리기 모드인경우
        if (isDrawingMode) {
          const { coord, offset } = e
          position = { coord, offset }
          lineData.push(position)
          // 처음 클릭시
          if (!isClicked) {
            isClicked = true
            lineData.push(position)
            figure = new Rect({
              lineData: lineData,
              naverMap: map
            })
            figure.setMap(map)
          } else {
            isClicked = false
            lineData.pop()
            this.setState({
              isDrawingMode: false
            })
            lineData = []
          }
        }
      })
      naver.maps.Event.addListener(map, 'mousemove', e => {
        if (isClicked) {
          const { coord, offset } = e
          position = { coord, offset }
          lineData[lineData.length - 1] = position
          figure.draw()
        }
      })
    }
  }
  handleDrawShape = drawShape => {
    this.drawShape = drawShape
  }

  handleDrawFactor = factor => {
    this.factor = factor
  }

  render() {
    const { onToggle } = this.props
    return (
      <div id="drawingBox">
        <ShapeButtonList
          shapeList={this.shapeList}
          onToggle={onToggle}
          handleDrawShape={this.handleDrawShape}
        />
        <FactorButtonList
          factorList={this.factorList}
          handleDrawFactor={this.handleDrawFactor}
        />
      </div>
    )
  }
}

export default DrawingBox
