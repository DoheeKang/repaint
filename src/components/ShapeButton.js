import React, { Component } from 'react'
class ShapeButton extends Component {
  handleClick = shape => {
    const { onToggle, handleDrawShape } = this.props
    onToggle()
    handleDrawShape(shape)
  }
  render() {
    const { shape } = this.props
    return <div onClick={() => this.handleClick(shape)}>{shape}</div>
  }
}

export default ShapeButton
