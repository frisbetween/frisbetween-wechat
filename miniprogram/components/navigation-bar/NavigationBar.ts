// components/NavigationBar.ts
Component({

  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    safeArea: 0,
    statusBarHeight: 0,
    navigationBarHeight: 0,
    capsuleMenuHeight: 0,
  },

  /**
   * 组件的方法列表
   */
  methods: {
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
        safeArea: safeArea,
        statusBarHeight: statusBarHeight,
        navigationBarHeight: navigationBarHeight,
        capsuleMenuHeight: capsuleHeight,
      })
    },
  }
})