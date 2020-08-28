//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    list:"",
    value:''
  },
 
  onLoad: function () {
   
  },
  search(e) {
      this.setData({
        value: e.detail.arry
      })
  },

})
