//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: '快点我头上帽子看笑话啊',
    userInfo: {},
    imgUrl1:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1422736925,3308472086&fm=26&gp=0.jpg",
    imgUrl2:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2157032433,3005878741&fm=26&gp=0.jpg",
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../jokeList/index'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
