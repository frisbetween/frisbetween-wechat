// app.ts
import { post } from 'api/request';

App<IAppOption>({
  globalData: {},
  onLaunch() {
    // 登录
    wx.login({
      success: async res => {
        await post('/user/action/login', {
          credential: res.code,
          type: 'wechat_mini_program'
        }).then(res => {
          const data = res.data
          if (!data.oAuthToken) {
            wx.setStorage({
              key:"user",
              data: data
            })
          }
        }).catch(error => {
          console.error(error)
        })
      },
    })
  },
})