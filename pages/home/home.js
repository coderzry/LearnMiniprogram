// pages/home/home.js
Page({
  // 1.显示消息提示框API
  handleShowToast() {
    wx.showToast({
      title: '加载中ing',
      duration: 3000,
      icon: 'loading',
      mask: true,
      // 接口调用成功的回调函数
      success: function() {
        consol.log('展示弹窗成功')
      },
      // 接口调用失败的回调函数
      fail: function() {
        console.log('展示弹窗失败')
      },
      // 接口调用结束的回调函数（调用成功、失败都会执行）
      complete: function() {
        console.log('完成函数的调用')
      }
    })
  },
  // 2.显示模态对话框
  handleShowModal() {
    wx.showModal({
      title: '我是标题',
      content: '我是内容，哈哈哈',
      // showCancel: false,
      cancelText: '退出',
      cancelColor: 'red' ,
      success: function(res) {
       if(res.cancel) {
         console.log('用户点击了取消按钮')
       }
       if(res.confirm) {
         console.log('用户点击了确定按钮')
       }
      }
    })
  },
  // 3.显示 loading 提示框。需主动调用 wx.hideLoading 才能关闭提示框
  handleShowLoading() {
    wx.showLoading({
      title: '加载ing',
      mask: true
    })
    // showLoading业务场景：发送网络请求，在网络请求成功的回调中调用hideLoading
    setTimeout(function() {
      //需主动调用 wx.hideLoading 才能关闭提示框
      wx.hideLoading()
    }, 1000)
  },
  // 4.显示操作菜单
  handleShowAction() {
    wx.showActionSheet({
      itemList: ['相册', '拍照'],
      itemColor: 'red',
      success: function(res) {
        console.log(res)
        // 返回选中的下标 后续可以通过switch操作选中的选项
        // switch(res.tapIndex)
      }
    })
  },
  // 设置分享小程序时显示的内容
  onShareAppMessage: function(options) {
    return {
      title: '你好啊，张朋浩',
      path: '/pages/about/about',
      imageUrl: 'http://s3.mogucdn.com/mlcdn/c45406/170915_0a93207ci28kelh617k4hh62l65lb_640x960.jpg'
    }
  }
})