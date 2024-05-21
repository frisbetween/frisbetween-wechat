// pages/sub_page/login/login.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    loginType: 'password',
    phone: '',
    password: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {

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

  changeLoginType(e: any) {
    const data = e.currentTarget.dataset
    this.setData({
      loginType: data.type
    })
  },

  onPhoneInput(e: any) {
    this.setData({
      phone: e.detail.value
    })
  },

  onPasswordInput(e: any) {
    this.setData({
      password: e.detail.value
    })
  },
})