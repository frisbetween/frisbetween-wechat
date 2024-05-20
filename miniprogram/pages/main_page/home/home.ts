// pages/home/home.ts
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
    selected: 0,
    sort: 1,
    containerScrollTop: 0,
    drawler: {
      calendar: {
        display: false
      }
    },
    tagButton: [
      {
        index: 0,
        text: '训练',
        translateX: 'transform: translateX(0px)',
        animation: 'animation: expend-zero 0.3s;',
      },
      {
        index: 1,
        text: '比赛',
        translateX: 'transform: translateX(-8px)',
        animation: 'animation: expend-eight 0.3s;',
      },
      {
        index: 2,
        text: '生涯',
        translateX: 'transform: translateX(-16px);',
        animation: 'animation: expend-sixteen 0.3s;',
      },
    ],
    iconButton: [
      {
        index: 3,
        iconPath: '/images/icon/home/calendar.png',
        selectedIconPath: '/images/icon/home/calendar-selected.png',
        translateX: 'transform: translateX(-18px);',
        animation: 'animation: expend-eighteen 0.3s;',
      },
    ],
    user: {

    },



    training: [
      {
        title: '2023年12月15日的例训',
        surface: '/images/avatar.jpg',
        date: '2023.12.15',
        startTime: '19:00',
        endTime: '21:00',
        location: '浙江大学紫金港校区'
      },
      {
        title: '2023年12月15日的例训',
        surface: '/images/avatar.jpg',
        date: '2023.12.15',
        startTime: '19:00',
        endTime: '21:00',
        location: '浙江大学紫金港校区'
      },
      {
        title: '2023年12月15日的例训',
        surface: '/images/avatar.jpg',
        date: '2023.12.15',
        startTime: '19:00',
        endTime: '21:00',
        location: '浙江大学紫金港校区'
      },
      {
        title: '2023年12月15日的例训',
        surface: '/images/avatar.jpg',
        date: '2023.12.15',
        startTime: '19:00',
        endTime: '21:00',
        location: '浙江大学紫金港校区'
      },
      {
        title: '2023年12月15日的例训',
        surface: '/images/avatar.jpg',
        date: '2023.12.15',
        startTime: '19:00',
        endTime: '21:00',
        location: '浙江大学紫金港校区'
      },
      {
        title: '2023年12月15日的例训',
        surface: '/images/avatar.jpg',
        date: '2023.12.15',
        startTime: '19:00',
        endTime: '21:00',
        location: '浙江大学紫金港校区'
      },
      {
        title: '2023年12月15日的例训',
        surface: '/images/avatar.jpg',
        date: '2023.12.15',
        startTime: '19:00',
        endTime: '21:00',
        location: '浙江大学紫金港校区'
      },
      {
        title: '2023年12月15日的例训',
        surface: '/images/avatar.jpg',
        date: '2023.12.15',
        startTime: '19:00',
        endTime: '21:00',
        location: '浙江大学紫金港校区'
      },
      {
        title: '2023年12月15日的例训',
        surface: '/images/avatar.jpg',
        date: '2023.12.15',
        startTime: '19:00',
        endTime: '21:00',
        location: '浙江大学紫金港校区'
      },
      {
        title: '2023年12月15日的例训last',
        surface: '/images/avatar.jpg',
        date: '2023.12.15',
        startTime: '19:00',
        endTime: '21:00',
        location: '浙江大学紫金港校区'
      },
    ],
    competition: [
      {
        title: '上海多飞秋分飞盘邀请赛',
        surface: '/images/dophing-surface.jpg',
        startDate: '2023.9.23',
        endDate: '2023.9.24',
        province: '上海市',
        city: '',
        location: '张杨北路2700号',
      },
      {
        title: '上海多飞秋分飞盘邀请赛',
        surface: '/images/dophing-surface.jpg',
        startDate: '2023.9.23',
        endDate: '2023.9.24',
        province: '上海市',
        city: '',
        location: '张杨北路2700号'
      },
    ],
    calendar: [
      {
        id: '202301',
        year: '2023',
        month: {
          sun: '',
          mon: '',
          tue: '',
          wed: '',
          thu: '1月',
          fri: '',
          sat: '',
        },
        week: [
          {
            sun: {
              date: '',
              activity: null
            },
            mon: {
              date: '',
              activity: null
            },
            tue: {
              date: '',
              activity: null
            },
            wed: {
              date: '',
              activity: null
            },
            thu: {
              date: '1',
              activity: null
            },
            fri: {
              date: '2',
              activity: null
            },
            sat: {
              date: '3',
              activity: 'id'
            },
          },
          {
            sun: {
              date: '4',
              activity: null
            },
            mon: {
              date: '5',
              activity: null
            },
            tue: {
              date: '6',
              activity: 'bb'
            },
            wed: {
              date: '7',
              activity: null
            },
            thu: {
              date: '8',
              activity: null
            },
            fri: {
              date: '9',
              activity: null
            },
            sat: {
              date: '10',
              activity: null
            },
          },
          {
            sun: {
              date: '11',
              activity: null
            },
            mon: {
              date: '12',
              activity: null
            },
            tue: {
              date: '13',
              activity: 'bb'
            },
            wed: {
              date: '14',
              activity: null
            },
            thu: {
              date: '15',
              activity: null
            },
            fri: {
              date: '16',
              activity: null
            },
            sat: {
              date: '17',
              activity: null
            },
          },
          {
            sun: {
              date: '18',
              activity: null
            },
            mon: {
              date: '19',
              activity: null
            },
            tue: {
              date: '20',
              activity: 'bb'
            },
            wed: {
              date: '21',
              activity: null
            },
            thu: {
              date: '22',
              activity: null
            },
            fri: {
              date: '23',
              activity: null
            },
            sat: {
              date: '24',
              activity: null
            },
          },
          {
            sun: {
              date: '25',
              activity: null
            },
            mon: {
              date: '26',
              activity: null
            },
            tue: {
              date: '27',
              activity: 'bb'
            },
            wed: {
              date: '28',
              activity: null
            },
            thu: {
              date: '29',
              activity: null
            },
            fri: {
              date: '30',
              activity: null
            },
            sat: {
              date: '31',
              activity: null
            },
          }
        ]
      },
      {
        id: '202301',
        year: '2023',
        month: {
          sun: '2月',
          mon: '',
          tue: '',
          wed: '',
          thu: '',
          fri: '',
          sat: '',
        },
        week: [
          {
            sun: {
              date: '1',
              activity: null
            },
            mon: {
              date: '2',
              activity: null
            },
            tue: {
              date: '3',
              activity: 'null',
              today: true
            },
            wed: {
              date: '4',
              activity: null
            },
            thu: {
              date: '5',
              activity: null
            },
            fri: {
              date: '6',
              activity: null
            },
            sat: {
              date: '7',
              activity: 'id'
            },
          },
          {
            sun: {
              date: '8',
              activity: null
            },
            mon: {
              date: '9',
              activity: null
            },
            tue: {
              date: '10',
              activity: 'bb'
            },
            wed: {
              date: '11',
              activity: null
            },
            thu: {
              date: '12',
              activity: null
            },
            fri: {
              date: '13',
              activity: null
            },
            sat: {
              date: '14',
              activity: null
            },
          },
          {
            sun: {
              date: '15',
              activity: null
            },
            mon: {
              date: '16',
              activity: null
            },
            tue: {
              date: '17',
              activity: 'bb'
            },
            wed: {
              date: '18',
              activity: null
            },
            thu: {
              date: '19',
              activity: null
            },
            fri: {
              date: '20',
              activity: null
            },
            sat: {
              date: '21',
              activity: null
            },
          },
          {
            sun: {
              date: '22',
              activity: null
            },
            mon: {
              date: '23',
              activity: null
            },
            tue: {
              date: '24',
              activity: 'bb'
            },
            wed: {
              date: '25',
              activity: null
            },
            thu: {
              date: '26',
              activity: null
            },
            fri: {
              date: '27',
              activity: null
            },
            sat: {
              date: '28',
              activity: null
            },
          }
        ]
      },
      {
        id: '202301',
        year: '2023',
        month: {
          sun: '3月',
          mon: '',
          tue: '',
          wed: '',
          thu: '',
          fri: '',
          sat: '',
        },
        week: [
          {
            sun: {
              date: '1',
              activity: null
            },
            mon: {
              date: '2',
              activity: null
            },
            tue: {
              date: '3',
              activity: null
            },
            wed: {
              date: '4',
              activity: null
            },
            thu: {
              date: '5',
              activity: null
            },
            fri: {
              date: '6',
              activity: null
            },
            sat: {
              date: '7',
              activity: 'id'
            },
          },
          {
            sun: {
              date: '8',
              activity: null
            },
            mon: {
              date: '9',
              activity: null
            },
            tue: {
              date: '10',
              activity: 'bb'
            },
            wed: {
              date: '11',
              activity: null
            },
            thu: {
              date: '12',
              activity: null
            },
            fri: {
              date: '13',
              activity: null
            },
            sat: {
              date: '14',
              activity: null
            },
          },
          {
            sun: {
              date: '15',
              activity: null
            },
            mon: {
              date: '16',
              activity: null
            },
            tue: {
              date: '17',
              activity: 'bb'
            },
            wed: {
              date: '18',
              activity: null
            },
            thu: {
              date: '19',
              activity: null
            },
            fri: {
              date: '20',
              activity: null
            },
            sat: {
              date: '21',
              activity: null
            },
          },
          {
            sun: {
              date: '22',
              activity: null
            },
            mon: {
              date: '23',
              activity: null
            },
            tue: {
              date: '24',
              activity: 'bb'
            },
            wed: {
              date: '25',
              activity: null
            },
            thu: {
              date: '26',
              activity: null
            },
            fri: {
              date: '27',
              activity: null
            },
            sat: {
              date: '28',
              activity: null
            },
          },
          {
            sun: {
              date: '30',
              activity: null
            },
            mon: {
              date: '31',
              activity: null
            },
            tue: {
              date: '',
              activity: null
            },
            wed: {
              date: '',
              activity: null
            },
            thu: {
              date: '',
              activity: null
            },
            fri: {
              date: '',
              activity: null
            },
            sat: {
              date: '',
              activity: null
            },
          }
        ]
      }
    ],
    todayActivity: [
      {
        title: '2023年12月15日的例训last',
        surface: '/images/avatar.jpg',
        time: '15:00',
        location: '浙江大学紫金港校区'
      },
      {
        title: '',
        surface: '',
        time: '16:00',
        location: ''
      },
      {
        title: '',
        surface: '',
        time: '17:00',
        location: ''
      },
      {
        title: '',
        surface: '',
        time: '18:00',
        location: ''
      },
      {
        title: '2023年12月15日的例训last',
        surface: '/images/avatar.jpg',
        time: '19:00',
        location: '浙江大学紫金港校区'
      },
      {
        title: '2023年12月15日的例训last',
        surface: '/images/avatar.jpg',
        time: '20:00',
        location: '浙江大学紫金港校区'
      },
      {
        title: '杭州多飞秋分飞盘邀请赛',
        surface: '/images/dophing-surface.jpg',
        time: '21:00',
        location: '浙江省 · 杭州市 · 张杨北路2700号'
      },
      {
        title: '',
        surface: '',
        time: '22:00',
        location: ''
      },
      {
        title: '',
        surface: '',
        time: '23:00',
        location: ''
      },
    ]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    const that = this
    wx.getStorage({
      key: "user",
      success(res) {
        const user = res.data
        console.log(res.data)
        that.setData({
          user
        })
      }
    })
    
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
        selected: 3  //这个数字是当前页面在tabBar中list数组的索引
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

  login() {
    wx.navigateTo({
      url: '../../sub_page/login/login'
    }).catch(e => {
      console.log(e)
    })
  },

  onTagButtonTap(e: any) {
    const data = e.currentTarget.dataset
    const button = this.data.tagButton[data.index]
    this.setData({
      selected: button.index,
      containerScrollTop: 0
    })

  },

  onIconButtonTap(e: any) {
    const data = e.currentTarget.dataset
    const button = this.data.iconButton[data.index]

    this.setData({
      selected: button.index,
      containerScrollTop: 0
    })
  },

  openCalenderDrawler(e: any) {
    if (e.currentTarget.dataset.activity) {
      const that = this
      that.data.drawler.calendar.display = true;
      this.setData({
        drawler: that.data.drawler
      })
    }
  },

  closeCalenderDrawler() {
    const that = this
    that.data.drawler.calendar.display = false;
    this.setData({
      drawler: that.data.drawler
    })
  }
})