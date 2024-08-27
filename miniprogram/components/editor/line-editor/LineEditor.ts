// components/editor/line-editor/LineEditor.ts
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    value: {
      type: String,
      value: '',
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    drawler: {
      display: false
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTap() {
      this.openDrawler()
    },

    onChange() {

    },

    openDrawler() {
      const that = this
      this.data.drawler.display = true
      this.setData({
        drawler: that.data.drawler
      })
    },

    closeDrawler() {
      const that = this
      this.data.drawler.display = false
      this.setData({
        drawler: that.data.drawler
      })
    },
  }
})