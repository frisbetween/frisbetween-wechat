Page({

  /**
   * 页面的初始数据
   */
  data: {
    safeArea: 0,
    statusBarHeight: 0,
    navigationBarHeight: 0,
    capsuleMenuHeight: 0,
    training: [
      {
        title: '第三次训练',
        surface: '/assets/avatar.jpg',
        date: '8.13',
        startTime: '16:00'
      },
      {
        title: '第二次训练',
        surface: '/assets/avatar.jpg',
        date: '8.12',
        startTime: '16:00'
      },
      {
        title: 'Tryout',
        surface: '/assets/avatar.jpg',
        date: '8.11',
        startTime: '16:00'
      }
    ],
    competition: [
      {
        title: '多飞邀请赛',
        surface: '/assets/dophing-surface.jpg',
        startDate: '8.13',
        endDate: '8.15',
        location: '上海'
      },
      {
        title: '第二次训练',
        surface: '/assets/avatar.jpg',
        startDate: '8.13',
        endDate: '8.15',
        location: '浙江 · 杭州'
      },
      {
        title: '第一次训练',
        surface: '/assets/avatar.jpg',
        startDate: '8.13',
        endDate: '8.15',
        location: '浙江 · 杭州'
      }
    ],
    menu: [
      {
        title: '考勤统计',
        background: '#D63435',
        icon: '/assets/icon/organization/attendance.png'
      },
      {
        title: '队训请假',
        background: '#223261',
        icon: '/assets/icon/organization/heart.png'
      },
      {
        title: '体能打卡',
        background: '#AF5E22',
        icon: '/assets/icon/organization/sport.png'
      }
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
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 2  //这个数字是当前页面在tabBar中list数组的索引
      })
    }
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
})