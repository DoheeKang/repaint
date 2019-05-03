import React, { Component } from 'react'
import FactorButtonList from './FactorButtonList'
import '../../less/filterBox.less'
class FilterBox extends Component {
  factorList = [
    '상권',
    '신축/재개발',
    '교육',
    '업무지구',
    '도로개통/확장',
    '대중교통',
    '기타'
  ]

  render() {
    const { toggleshowFilter, handleDrawList, resetDrawList } = this.props
    return (
      <div id="filterBox">
        <FactorButtonList
          factorList={this.factorList}
          handleDrawList={handleDrawList}
        />
        <div onClick={resetDrawList}>모두 초기화</div>
        <div onClick={toggleshowFilter}>닫기</div>
      </div>
    )
  }
}

export default FilterBox
