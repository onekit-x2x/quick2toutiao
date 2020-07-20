Component({
  /**
   * 组件的属性列表
   */
  properties: {
    style:{
      type:String,
      value:""
    },
    class:{
      type:String,
      vlaue:""
    },
    disable:{
      type:Boolean,
      vlaue:false
    },
    ariaLabel:{
      type:String,
      vlaue:""
    },
    ariaUnfocusable:{
      type:Boolean,
      vlaue:false
    },
    forcedark :{
      type:Boolean,
      vlaue:true
    },

  },

  /**
   * 组件的初始数据
   */
  data: {

  },
  /**
   * 组件的方法列表
   */
  methods: {
     // 自定义方法
     view_tap: function (res) {
       //console.log(res)
       this.triggerEvent('click')
    },
  }
})
