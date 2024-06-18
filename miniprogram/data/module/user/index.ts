import type { Phone } from '../../type/Phone'
import * as userRequest from '../../../api/login.request'
import User from './type/User'

/**
 * 登录
 * @param phone 手机号
 * @param code 验证码
 */
export function login(phone: Phone, code: string) {
  userRequest.login(
    phone,
    code,
    'auth_code'
  ).then(data => {
    wx.setStorageSync('user', JSON.stringify(data.user))
    wx.setStorageSync('token', data.token)
    wx.setStorageSync('refreshToken', data.refreshToken)

    const app = getApp()
    app.globalData.user = data.user
    app.globalData.token = data.token
    app.globalData.refreshToken = data.refreshToken
  })
}

export function getUser(): User {
  const app = getApp()
  console.log(app)
  return app.globalData.user
}