import device from "../../onekit/api/system/device.js"
Page({
  data: {},
  onReady : function (options) {
    device.getInfo({
      success: function (ret) {
        console.log(`handling succes`, ret)
      }
    })
    tt.getSystemInfo({
      success(res) {
        console.log(res)
      }
    })
  }
})