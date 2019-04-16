import React, { Component } from 'react'
class ShapeButton extends Component {
  handleClick = shape => {
    const { toggleisDrawing, handleDrawShape } = this.props
    toggleisDrawing()
    handleDrawShape(shape)
  }
  render() {
    const { shape } = this.props
    return <div onClick={() => this.handleClick(shape)}>{shape}</div>
  }
}

export default ShapeButton
