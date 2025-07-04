// pages/sub_page/user/user.ts
import * as userModule from '../../../service/module/user/index'
import * as util from '../../../utils/util'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    user: {},
    phone: '',
    drawler: {
      display: false
    }
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
    this.setData({
      user: userModule.getUser(),
      phone: util.maskPhoneNumber(userModule.getUser().phone.number)
    })
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

  openDrawler(e: any) {
    const that = this
    this.data.drawler.display = true
    this.setData({
      drawler: that.data.drawler
    })
  },

  closeDrawler(e: any) {
    const that = this
    this.data.drawler.display = false
    this.setData({
      drawler: that.data.drawler
    })
  },
})