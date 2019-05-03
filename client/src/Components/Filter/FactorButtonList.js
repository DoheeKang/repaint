import React, { Component } from 'react'
import FactorButton from './FactorButton'

class FactorButtonList extends Component {
  render() {
    const { factorList, handleDrawFactor, handleDrawList } = this.props
    const factorButtonList = factorList.map((factor, idx) => (
      <FactorButton
        key={idx}
        factor={factor}
        handleDrawFactor={handleDrawFactor}
        handleDrawList={handleDrawList}
      />
    ))
    return (
      <div>
        {factorButtonList}
        <div onClick={() => handleDrawList('My')}> My </div>
      </div>
    )
  }
}

export default FactorButtonList
