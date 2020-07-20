import fetch from "../../onekit/api/system/fetch"
Page({
  data: {
  },
  onLoad: function(){
    fetch.fetch({
      url: 'https://www.onekitwx.com/weixin/testcookie.jsp',
      success: function (res) {
        // console.log("success", res)
      },
      fail: function (res) {
        // console.log("fail:", res)
      }
    })
  },

})