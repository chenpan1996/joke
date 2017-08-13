// pages/newsList/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    joke:null,
    backgroundImg:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1502612293032&di=f3b758fab9bc7d2dd9f2d386b26488bf&imgtype=0&src=http%3A%2F%2Fi2.hdslb.com%2Fbfs%2Fface%2F565786105f4021d09cda51f7fdeb4c8389be24ba.jpg'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.request({
      url: 'http://api.avatardata.cn/Joke/NewstJoke?key=11235bd077c24ddaa9c640a9e54b2211&page=1&rows=20', 
      data: {
        x: '',
        y: ''
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res.data);
        that.setData({joke:res.data.result})
        
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})