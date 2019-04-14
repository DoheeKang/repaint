import React, { Component } from 'react'
import FactorButton from './FactorButton'

class FactorButtonList extends Component {
  render() {
    const { factorList, handleDrawFactor } = this.props
    const factorButtonList = factorList.map((factor, idx) => (
      <FactorButton
        key={idx}
        factor={factor}
        handleDrawFactor={handleDrawFactor}
      />
    ))
    return <div>{factorButtonList}</div>
  }
}

export default FactorButtonList
