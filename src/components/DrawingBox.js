import React, { Component } from 'react'
import ShapeButtonList from './ShapeButtonList'
import FactorButtonList from './FactorButtonList'
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
