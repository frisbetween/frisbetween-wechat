Component({
  data: {
    safeArea: 0,
    selected: 0,
    color: "#B2B2B2",
    selectedColor: "#FFFFFF",
    menu: [
      {
        pagePath: "/pages/main_page/index/index",
        iconPath: "/images/icon/tab/index.png",
        selectedIconPath: "/images/icon/tab/index-selected.png",
        text: "广场"
      }, 
      {
        pagePath: "/pages/main_page/competition/competition",
        iconPath: "/images/icon/tab/competition.png",
        selectedIconPath: "/images/icon/tab/competition-selected.png",
        text: "赛事"
      }, 
      {
        pagePath: "/pages/main_page/organization/organization",
        iconPath: "/images/icon/tab/organization.png",
        selectedIconPath: "/images/icon/tab/organization-selected.png",
        text: "俱乐部"
      }, 
      // {
      //   pagePath: "/pages/main_page/notice/notice",
      //   iconPath: "/images/icon/tab/notice.png",
      //   selectedIconPath: "/images/icon/tab/notice-selected.png",
      //   text: "消息"
      // }, 
      {
        pagePath: "/pages/main_page/home/home",
        iconPath: "/images/icon/tab/home.png",
        selectedIconPath: "/images/icon/tab/home-selected.png",
        text: "个人中心"
      }
    ]
  },

  attached() {
    const systemInfo = wx.getSystemInfoSync();

    // 计算底部安全区
    let safeArea = systemInfo.screenHeight - systemInfo.safeArea.bottom
    if (safeArea < 16) {
      safeArea = 16
    }

    this.setData({
      safeArea: safeArea,
    })
  },

  methods: {
    calculateBottom() {
      
    },
    
    /**
     * switchTab
     */
    switchTab(e: any) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url})
      this.setData({
        selected: data.index
      })
    }
  }
})