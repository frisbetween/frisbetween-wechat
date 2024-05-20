/// <reference path="./types/index.d.ts" />

interface IAppOption {
  globalData: {
    userInfo?: WechatMiniprogram.UserInfo,
    user?: Auth.User
  }
  userInfoReadyCallback?: WechatMiniprogram.GetUserInfoSuccessCallback,
}