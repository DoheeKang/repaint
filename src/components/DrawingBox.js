import React, { Component } from 'react'
import ShapeButtonList from './ShapeButtonList'
import '../less/DrawingBox.less'

class DrawingBox extends Component {
  shapeList = ['Line', 'Arrow', 'Rect', 'Circle', 'Polygon']

  render() {
    return (
      <div id="drawingBox">
        <ShapeButtonList shapeList={this.shapeList} />
      </div>
    )
  }
}

export default DrawingBox
