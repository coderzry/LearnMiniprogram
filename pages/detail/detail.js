// pages/detail/detail.js
Page({
  onLoad: function (options) {
    console.log(options)
  },

  // 生命周期回调—监听页面卸载
  onUnload() {
    // 1.获取首页的页面对象
    // getCurrentPages当前所有栈的页面
    const pages = getCurrentPages()
    console.log(pages)

    const home = pages[pages.length - 2]
    home.setData({
      title: '呵呵呵'
    })
  },
  handleBackHome() {
    wx.navigateBack({
      delta: 1
    })
  }
})