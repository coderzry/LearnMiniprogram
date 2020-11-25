// pages/home/home.js
Page({
  data: {
    titles: ['衣服', '裤子', '鞋子']
  },
  handleBtnClick() {
    console.log("按钮发生了点击")
  },
  handleTouchStart() {
    console.log('handleTouchStart')
  },
  handleTouchMove() {
    console.log('handleTouchMove')
  },
  handleTouchEnd() {
    console.log('handleTouchEnd')
  },
  handleTap() {
    console.log('handleTap')
  },
  handleLongPress() {
    console.log('handleLongPress')
  },
  handleEventClick(event) {
    console.log('---------', event)
  },
  handleTouchEnd(event) {
    console.log('+++++++++', event)
  },
  handleInner(event) {
    console.log(event)
  },
  handleOuter(event) {
    console.log(event)
  },
  handleItemClick(event) {
    console.log(event)
    // title - index
    const dataset = event.currentTarget.dataset
    const index = dataset.index
    const item = dataset.item
    console.log(index, item)
  },

  // 事件冒泡和捕获
  handelCaptureView1() {
    console.log('handelCaptureView1')
  },
  handleBindView1() {
    console.log('handleBindView1')
  },
  handelCaptureView2() {
    console.log('handelCaptureView2')
  },
  handleBindView2() {
    console.log('handleBindView2')
  },
  handelCaptureView3() {
    console.log('handelCaptureView3')
  },
  handleBindView3() {
    console.log('handleBindView3')
  },
})