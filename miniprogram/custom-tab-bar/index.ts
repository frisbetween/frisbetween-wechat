Component({
  data: {
    safeArea: 0,
    selected: 0,
    color: "#B2B2B2",
    selectedColor: "#FFFFFF",
    menu: [
      {
        pagePath: "/pages/main_page/index/index",
        iconPath: "/assets/icon/tab/index.png",
        selectedIconPath: "/assets/icon/tab/index-selected.png",
        text: "广场"
      }, 
      {
        pagePath: "/pages/main_page/competition/competition",
        iconPath: "/assets/icon/tab/competition.png",
        selectedIconPath: "/assets/icon/tab/competition-selected.png",
        text: "赛事"
      }, 
      {
        pagePath: "/pages/main_page/organization/organization",
        iconPath: "/assets/icon/tab/organization.png",
        selectedIconPath: "/assets/icon/tab/organization-selected.png",
        text: "俱乐部"
      }, 
      // {
      //   pagePath: "/pages/main_page/notice/notice",
      //   iconPath: "/assets/icon/tab/notice.png",
      //   selectedIconPath: "/assets/icon/tab/notice-selected.png",
      //   text: "消息"
      // }, 
      {
        pagePath: "/pages/home/home",
        iconPath: "/assets/icon/tab/home.png",
        selectedIconPath: "/assets/icon/tab/home-selected.png",
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