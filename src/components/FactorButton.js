import React, { Component } from 'react'
class FactorButton extends Component {
  handleClick = factor => {
    const { handleDrawFactor } = this.props
    handleDrawFactor(factor)
  }
  render() {
    const { factor } = this.props
    return <div onClick={() => this.handleClick(factor)}>{factor}</div>
  }
}

export default FactorButton
