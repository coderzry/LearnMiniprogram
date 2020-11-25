// pages/wxml/wxml.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message: '你好小程序',
    firstName: 'zhao',
    lastName: 'ruiyang',
    age: 18,
    nowTime: new Date().toLocaleString(),
    isActive: false,
    isShow: true,
    score: 50,
    movies: ['盗梦空间', '大话西游', '海王'],
    nums: [
      [10, 11, 12, 13],
      [20, 21, 22, 23],
      [110, 111, 112, 113]
    ],
    letters: ['a', 'b', 'c']
  },

  onLoad() {
    setInterval(() => {
      this.setData({
        nowTime: new Date().toLocaleString()
      })
    }, 1000)
  },

  handleSwitchColor() {
    this.setData({
      isActive : !this.data.isActive
    })
  },

  handleSwitchShow() {
    this.setData({
      isShow: !this.data.isShow
    })
  },

  handleIncrement() {
    this.setData({
      score: this.data.score + 6
    })
  },

  numberToFixed(value) {
    return value.toFixed(2)
  }

})