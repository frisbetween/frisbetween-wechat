// app.ts
import type { IAppOption } from '../typings/index'
import User from './data/module/user/type/User'

App<IAppOption>({
  globalData: {
    user: undefined,
    token: undefined,
    refreshToken: undefined,
  },
  onLaunch() {
    this.globalData.user = new User(JSON.parse(wx.getStorageSync('user')))
    this.globalData.token = wx.getStorageSync('token')
    this.globalData.refreshToken = wx.getStorageSync('refreshToken')

    // 登录
    // wx.login({
    //   success: async res => {
    //     await post('/user/action/login', {
    //       credential: res.code,
    //       type: 'wechat_mini_program'
    //     }).then(res => {
    //       const data = res.data
    //       if (!data.oAuthToken) {
    //         wx.setStorage({
    //           key:"user",
    //           data: data
    //         })
    //       }
    //     }).catch(error => {
    //       console.error(error)
    //     })
    //   },
    // })
  },
})