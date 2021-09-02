// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName'), // 如需尝试获取用户信息可改为false

    viewArray: [
      {index: 1}
    ],

    longTextHeight: 0,

    
    Height: 0
  },

  calculatHeight: function(e) {
    var query = wx.createSelectorQuery()
    // debugger
    for (const key in e) {
      if (Object.hasOwnProperty.call(e, key)) {
        const element = e[key];
        query.select(element).boundingClientRect()
      }
    }

    var height = 0
    // debugger
    query.exec(function (res) {
      // debugger
      for (const key in res) {
        if (Object.hasOwnProperty.call(res, key)) {
          const element = res[key];
          height += element.height
        }
      }
      console.log(height)
    })
    return height
  },

  add: function(e) {
    const length = this.data.viewArray.length
    this.data.viewArray = [
      {index: length}
    ].concat(this.data.viewArray)
    this.setData({
      viewArray: this.data.viewArray
    })

    const queryLongText = wx.createSelectorQuery()
    var _this = this
    var bounding = queryLongText.select('#headerLongText').fields({
      computedStyle: ['height']
    }, res => {
      console.log(res)
      _this.setData({
        Height: res
      })
    }).exec()

    this.calculatHeight(['#headerLongText'])
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }

    var num = addNum(6)
    // debugger
    console.log(num)
    this.add(1)
    // this.makeARequest(1)
  },

  onReady() {
    this.add(1)
  },

  onShow() {
    this.makeARequest(1)
    this.add(1)
  },

  processData: function(e) {
    this.add(1)
  },

  makeARequest: function(e) {
    var _this = this
    wx.request({
      url: 'http://bapi.bilibili.co/mock/4075/intl/gateway/v2/app/search/v2',
      data: {

      },
      header : {
        'content-type': 'application/json'
      },
      success (res) {
        console.log(res.data)
        _this.processData(1)
      }
    })
  },

  jumpToEmployeeMainPage: function() {
    wx.navigateTo({
      url: '../employee/main/employeeMainPage',
    })
  },

  jumpToEmployeeServiceReviewsPage: function() {
    wx.navigateTo({
      url: '../employee/serviceReviews/employeeServiceReviewsPage',
    })
  }
})

function addNum(num) {
  return num
}