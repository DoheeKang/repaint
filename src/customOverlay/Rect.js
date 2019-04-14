import * as d3 from 'd3'

class Rect extends naver.maps.OverlayView {
  constructor(options) {
    super(options)
    this.position = options.position
  }
  onAdd() {
    // make svg that contain path
    this.svg = document.createElement('svg')
    this.svg.addEventListener('mouseover', e => {
      console.log('정보 보여줌')
    })
    this._path = document.createElement('path')
    this.svg.append(this._path)

    const overlayLayer = this.getPanes().overlayLayer
    overlayLayer.appendChild(this.svg)
  }
  draw() {
    //위도 경도를 화면상의 위치로 변환
    const projection = this.getProjection()
    const position = this.position
    const pixelPosition = projection.fromCoordToOffset(position)
    // setting svg
    this.svg.style.position = 'absolute'
    this.svg.style.top = `${pixelPosition.y}px`
    this.svg.style.left = `${pixelPosition.x}px`
    this.svg.style.width = `100px`
    this.svg.style.height = `100px`
    this.svg.style.backgroundColor = 'blue'
    this.svg.style.opacity = 0.4
  }
  onRemove() {}
}

export default Rect
