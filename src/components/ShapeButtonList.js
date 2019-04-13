import React, { Component } from 'react'
import ShapeButton from './ShapeButton'

class ShapeButtonList extends Component {
  render() {
    const { shapeList, onToggle, handleDrawShape } = this.props
    const buttonList = shapeList.map((shape, idx) => (
      <ShapeButton
        key={idx}
        shape={shape}
        onToggle={onToggle}
        handleDrawShape={handleDrawShape}
      />
    ))
    return <div>{buttonList}</div>
  }
}

export default ShapeButtonList
