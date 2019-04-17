import React, { Component } from 'react'
import Drawing from './Drawing'
class DrawingList extends Component {
  render() {
    const { drawingList, handleRemoveDrawingList } = this.props
    const drawingButtonList = drawingList.map((drawing, idx) => (
      <Drawing
        key={idx}
        drawing={drawing}
        handleRemoveDrawingList={handleRemoveDrawingList}
      />
    ))
    // console.log(drawList[0].constructor.name)
    return <div>{drawingButtonList}</div>
  }
}

export default DrawingList
