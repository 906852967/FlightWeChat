//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: ['http://www.globalwings.com/images/banner/pc-item2.jpeg'],
    listData: [
      {
        
      }
    ]
  },
  onLoad: function () {

  },
  login() {
    wx.redirectTo({
      url: '../login/login',
    })
  }
  
})