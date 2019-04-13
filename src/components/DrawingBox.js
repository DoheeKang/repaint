import React, { Component } from 'react'
import ShapeButtonList from './ShapeButtonList'
import '../less/DrawingBox.less'

class DrawingBox extends Component {
  shapeList = ['Line', 'Arrow', 'Rect', 'Circle', 'Polygon']
  // 그릴 도형 종류
  drawShape = ''

  handleDrawShape = drawShape => {
    this.drawShape = drawShape
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
      </div>
    )
  }
}

export default DrawingBox
