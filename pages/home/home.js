// pages/home/home.js
Page({
  data: {
    counter: 0,
    isShow: true
  },
  handleIncrement(event) {
    console.log('---------', event)
    this.setData({
      counter: this.data.counter + 1 
    })
  },
  handleTabClick(event) {
    console.log(event)
  },
  // 点击按钮，修改组件内的数据
  handleIncrementCpn() {
    // 最终目的：修改my-sel组件中的counter
    // 1.首先获取组件对象
    const my_sel = this.selectComponent('.sel-class')
    console.log(my_sel)

    // 2.通过setData修改组件中的数据(不推荐这种直接修改的方式)
    /* my_sel.setData({
      counter: my_sel.data.counter + 20
    }) */

    // 3.通过方法修改数据
    my_sel.incrementCounter(10)
  },
  handleChangeShow() {
    this.setData({
      isShow: !this.data.isShow
    })
  }
})