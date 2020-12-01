// pages/home/home.js
import {
  getMultiData,
  getGoodsData
} from '../../service/home'

const TOP_DISTANCE = 1000

const types = ['pop', 'new', 'sell']

Page({
  data: {
    banners: [],
    recommends: [],
    titles: ['流行', '新款', '精选'],
    goods: {
      new: {page:0, list: []},
      pop: {page:0, list: []},
      sell: {page:0, list: []}
    },
    currentType: 'pop',
    showBackTop: false,
    isTabFixed: false,
    tabScrollTop: 0
  },
  onLoad: function (options) {
    // 1.请求轮播图及推荐数据
    this._getMultidata()

    // 2.请求商品数据
    this._getGoodsData('pop')
    this._getGoodsData('new')
    this._getGoodsData('sell')
  },

  // ------------------------------网络请求函数------------------------

  _getMultidata() {
    getMultiData().then(res => {
      // 取出轮播图和推荐的数据
      const banners = res.data.data.banner.list
      const recommends = res.data.data.recommend.list

      // 将banners和recommends放到data中
      this.setData({
        banners: banners,
        recommends: recommends
      })
    })
  },

  _getGoodsData(type) {
    // 1.获取页码
    const page = this.data.goods[type].page + 1

    // 2.发送网络请求
    getGoodsData(type, page).then(res => {
      // 2.1取出数据
      const list = res.data.data.list

      // 2.2将数据设置到对应type的list中
      const oldList = this.data.goods[type].list
      oldList.push(...list)

      // 2.3将数据设置到data中的goods中
      const typekey = `goods.${type}.list`;
      const pagekey = `goods.${type}.apge`;
      this.setData({
        [typekey]: oldList,
        [pagekey]: page
      })
    })
  },

  // ----------------------------------事件监听函数-----------------------------
  handleTabClick(event) {
    // 取出index
    const index = event.detail.index
    
    // 设置currentType
    this.setData({
      currentType: types[index]
    })
  },
  handleImageLoad() {
    // 获取tab-control距离页面顶部的距离
    wx.createSelectorQuery().select('#tab-control').boundingClientRect(rect => {
      this.data.tabScrollTop = rect.top
    }).exec()
  },
  // 监听页面滚动到底部 
  onReachBottom() {
    // 上拉加载更多 -> 请求新的数据
    this._getGoodsData(this.data.currentType)
  },

  // 监听页面滚动的距离
  onPageScroll(options) {
    // 1.取出scrollTop
    const scrollTop = options.scrollTop 

    // 2.修改showBackTop属性
    // 官方提醒：不要在滚动的函数回调中频繁的调用this.setData 
    // 频繁的调用this.setData会使页面频繁刷新，影响性能，使用以下方法可提高性能
    const flag1 = scrollTop >= TOP_DISTANCE
    if (flag1 !== this.data.showBackTop) {
      this.setData({
        showBackTop: flag1
      })
    }

    // 3.修改istabFixed属性
    const flag2 = scrollTop >= this.data.tabScrollTop
    if(flag2 !== this.data.isTabFixed) {
      this.setData({
        isTabFixed: flag2
      })
    }
  }

})