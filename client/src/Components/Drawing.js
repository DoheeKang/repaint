import React, { Component } from 'react'

class Drawing extends Component {
  handleClick = drawing => {
    const { handleRemoveDrawingList } = this.props
    drawing.onRemove()
    handleRemoveDrawingList(drawing)
  }
  render() {
    const { drawing } = this.props
    return (
      <div onClick={() => this.handleClick(drawing)}>
        {drawing.constructor.name}
      </div>
    )
  }
}

export default Drawing
