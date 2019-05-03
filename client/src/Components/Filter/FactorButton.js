import React, { Component } from 'react'
class FactorButton extends Component {
  handleClick = factor => {
    const { handleDrawFactor, handleDrawList } = this.props
    if (handleDrawFactor) {
      handleDrawFactor(factor)
    }
    if (handleDrawList) {
      handleDrawList(factor)
    }
  }
  render() {
    const { factor } = this.props
    return <div onClick={() => this.handleClick(factor)}>{factor}</div>
  }
}

export default FactorButton
