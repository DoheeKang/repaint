import React, { Component } from 'react'
import ShapeButtonList from './ShapeButtonList'
import FactorButtonList from '../Filter/FactorButtonList'
import DrawingList from './DrawingList'
import Rect from '../../CustomOverlay/Rect'
import '../../less/DrawingBox.less'

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
  state = {
    // 그린 도형 목록
    drawingList: []
  }
  componentDidUpdate(prevProps) {
    const { map } = this.props
    if (prevProps.map !== map) {
      let isClicked = false
      let figure, position
      let lineData = []
      naver.maps.Event.addListener(map, 'click', e => {
        // isDrawingMode: 그리기 모드이냐 (그리기가 끝나면 false로 바꿔주어야함)
        const { isDrawingMode, toggleisDrawing } = this.props
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
            const { drawingList } = this.state
            isClicked = false
            lineData.pop()
            // let info = document.createElement('div')
            // let input = document.createElement('input')
            // info.setAttribute('id', 'info')
            // info.innerText = 'hello'
            // info.appendChild(input)
            // figure._element.appendChild(info)
            // info.classList.toggle('show')
            this.setState({
              drawingList: drawingList.concat(figure)
            })
            toggleisDrawing()
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
    naver.maps.Event.addListener(map, 'rightclick', e => {})
  }
  handleDrawShape = drawShape => {
    this.drawShape = drawShape
  }

  handleDrawFactor = factor => {
    this.factor = factor
  }

  handleRemoveDrawingList = drawing => {
    const { drawingList } = this.state
    this.setState({
      drawingList: drawingList.filter(el => el !== drawing)
    })
  }

  handleClose = () => {
    const { toggleshowDraw } = this.props
    const { drawingList } = this.state
    // 그린 후 저장하지 않고 닫으려고 하는 경우
    if (drawingList.length) {
      console.log('저장하지 않으면 지워집니다')
      drawingList.forEach(drawing => drawing.onRemove())
      this.setState({
        drawingList: []
      })
    }
    toggleshowDraw()
  }
  render() {
    const { toggleisDrawing, isDrawingMode } = this.props
    const { drawingList } = this.state
    return (
      <div id="drawingBox">
        <ShapeButtonList
          shapeList={this.shapeList}
          toggleisDrawing={toggleisDrawing}
          handleDrawShape={this.handleDrawShape}
        />
        <div className={isDrawingMode ? 'show' : 'hide'}>
          <FactorButtonList
            factorList={this.factorList}
            handleDrawFactor={this.handleDrawFactor}
          />
        </div>
        <DrawingList
          drawingList={drawingList}
          handleRemoveDrawingList={this.handleRemoveDrawingList}
        />
        <div>저장</div>
        <div onClick={this.handleClose}>닫기</div>
      </div>
    )
  }
}

export default DrawingBox
