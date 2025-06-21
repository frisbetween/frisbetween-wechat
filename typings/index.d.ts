/// <reference path="./types/index.d.ts" />

import User from "../miniprogram/service/module/user/type/User";

export interface IAppOption {
  globalData: {
    user?: User
    token?: string
    refreshToken?: string
  }
  userInfoReadyCallback?: WechatMiniprogram.GetUserInfoSuccessCallback,
}