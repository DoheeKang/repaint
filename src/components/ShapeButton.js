import React, { Component } from 'react'
class ShapeButton extends Component {
  render() {
    const { shape } = this.props
    return <div>{shape}</div>
  }
}

export default ShapeButton
