import geolocation from "../../onekit/api/system/geolocation.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  onLoad: function() {
    tt.getLocation({
      timeout: 50000,
      success: function(data) {
        console.log(data)
      },
      fail: function(data, code) {
        console.log(`handling fail`, data, code)
      }
    })
    //////////////////////////////////////////////////////
    tt.getLocation({
       type: 'wgs84',
       success(res) {
         console.log(res)
       }
     })
     geolocation.getLocationType({
       success: function (data) {
         console.log(`handling success: locationType`, data)
       },
       fail: function (data, code) {
         console.log(`handling fail`.data)
       }
     })

    geolocation.subscribe({
      callback: function (data) {
        console.log(
          `handling success: longitude = ${data.longitude}, latitude = ${
          data.latitude
          }`
        )
      },
      fail: function (data, code) {
        console.log(`handling fail, code = ${code}`)
      }
    })

    // tt.startLocationUpdate({
    //   success(res) {
    //     geolocation.subscribe({
    //       callback: function (data) {
    //         console.log(data)
    //       },
    //       fail: function (data, code) {
    //         console.log(`handling fail`, data, code)
    //       }
    //     })
    //   }
    // })

  },


})