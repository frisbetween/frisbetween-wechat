// pages/sub_page/map/map.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    safeArea: 0,
    statusBarHeight: 0,
    navigationBarHeight: 0,
    capsuleMenuHeight: 0,
    markers: [
      {
        index: 0,
        latitude: 30.219080,
        longitude: 120.238701,
        name: '云上足球公园（钱江世纪城）'
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    this.calculateArea()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },

  calculateArea() {
    // 获取系统信息
    const systemInfo = wx.getSystemInfoSync();
    const capsuleMenuInfo = wx.getMenuButtonBoundingClientRect()
    console.log(systemInfo)
    // 获取状态栏高度
    const statusBarHeight = systemInfo.statusBarHeight;
    // 获取导航栏高度
    const navigationBarHeight = (capsuleMenuInfo.top - statusBarHeight) * 2 + capsuleMenuInfo.height
    const capsuleHeight = capsuleMenuInfo.height

    // 计算底部安全区
    let safeArea = systemInfo.screenHeight - systemInfo.safeArea.bottom
    if (safeArea < 16) {
      safeArea = 16
    }

    this.setData({
      statusBarHeight: statusBarHeight,
      navigationBarHeight: navigationBarHeight,
      capsuleMenuHeight: capsuleHeight,
      safeArea: safeArea,
    })
  },

  navigateBack() {
    wx.navigateBack()
  }
})