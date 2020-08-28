
Component({
  /**
   * 组件的属性列表
   */
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  properties: {
    arry:{
      type:Array,
      value:[]
    },
    title: {
      type: String,
      value: ""
    },
    value: {
      type: String,
      value: ""
    },
    name: {
      type: String,
      value: ""
    },
    require: {
      type: String,
      value: "true"
    },
    input: {
      type: String,
      value: "true"
    },
    ifsearch:{
      type: String,
      value: "false"
    },
    justy:{ // 是否左右对齐
      type: String,
      value: "true"
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    arry:[]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    _serach(e) {
      this.setData({
        arry: ["张三","李四","王五"]
      })
      
     
    },
 
    _click(e) { // 搜索选中
      let index = e.currentTarget.dataset.index
      let arry = this.data.arry[index]
      this.setData({
        arry: []
      })
      let myEventDetail = {arry} // detail对象，提供给事件监听函数
      this.triggerEvent('click',myEventDetail);
    },
  }
})
