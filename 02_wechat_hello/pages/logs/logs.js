// logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },

  onShow: function() {
    console.log('lifecycle: logs onShow')
  },
  onHide: function() {
    console.log('lifecycle: logs onHide')
  },
  onReady: function() {
    console.log('lifecycle: logs onReady')
  },
  onUnload: function() {
    console.log('lifecycle: logs onUnload')
  },

  onLoad(opt) {
    console.log('lifecycle: logs onLoad')
    console.log(opt)
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return {
          date: util.formatTime(new Date(log)),
          timeStamp: log
        }
      }),
      logColor: opt.color,
    })
  },

  onLogTap: function() {
    // 跳转至test2页面(将其增加到页面栈中)
    // wx.navigateTo({
    //   url: '/pages/test2/test2'
    // })

    // 跳转至test2页面(将其替换当前页面栈中的页面)
    wx.navigateTo({
      url: '/pages/test2/test2'
    })
  },
})
