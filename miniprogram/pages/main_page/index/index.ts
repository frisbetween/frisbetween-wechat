// pages/index/index.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    safeArea: 0,
    statusBarHeight: 0,
    navigationBarHeight: 0,
    capsuleMenuHeight: 0,
    subNavigationBarHeight: 24,
    activity: [
      {
        id: '1',
        title: '龙井虾仁2024Tryout',
        date: '8.14',
        startTime: '9:00',
        endTime: '11:00',
        location: '云上足球公园',
        publisher: {
          avatar: '/images/avatar.jpg',
          name: '龙井虾仁'
        }
      },
      {
        id: '2',
        title: '龙井虾仁 X 美国队长特别集训',
        date: '8.14',
        startTime: '9:00',
        endTime: '11:00',
        location: '云上足球公园',
        publisher: {
          avatar: '/images/avatar.jpg',
          name: '龙井虾仁'
        }
      },
      {
        id: '3',
        title: '龙井虾仁2024Tryout',
        date: '8.14',
        startTime: '9:00',
        endTime: '11:00',
        location: '云上足球公园',
        publisher: {
          avatar: '/images/avatar.jpg',
          name: '龙井虾仁'
        }
      },
      {
        id: '4',
        title: '龙井虾仁2024Tryout',
        date: '8.14',
        startTime: '9:00',
        endTime: '11:00',
        location: '云上足球公园',
        publisher: {
          avatar: '/images/avatar.jpg',
          name: '龙井虾仁'
        }
      },
      {
        id: '5',
        title: '龙井虾仁2024Tryout',
        date: '8.14',
        startTime: '9:00',
        endTime: '11:00',
        location: '云上足球公园',
        publisher: {
          avatar: '/images/avatar.jpg',
          name: '龙井虾仁'
        }
      },
      {
        id: '6',
        title: '龙井虾仁2024Tryout',
        date: '8.14',
        startTime: '9:00',
        endTime: '11:00',
        location: '云上足球公园',
        publisher: {
          avatar: '/images/avatar.jpg',
          name: '龙井虾仁'
        }
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
        selected: 0  //这个数字是当前页面在tabBar中list数组的索引
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

  navigateToTrainning(e: any) {
    console.log(e)
    wx.navigateTo({
      url: '../../sub_page/training/training'
    }).catch(e => {
      console.log(e)
    })
  }
})