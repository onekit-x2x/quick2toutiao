module.exports = {
  /**wifi.connect 连接WiFi*/
  connect(quick_object) {
    
  }
  /**
   * wifi.scan 请求获取 Wi-Fi 列表
   */
  , scan(quick_object) {
    
  }
  /**
   * wifi.getConnectedWifi 获取已连接中的 Wi-Fi 信息*/

  , getConnectedWifi(quick_object) {
    if (!quick_object) {
      return;
    }

    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete;
    //////////////////////////////////////////////
    var tt_object = {};

    tt_object.success = function (tt_res) {
      var quick_res = {};
      for (var tt_res_key in tt_res) {
        var tt_res_value = tt_res[tt_res_key];
        switch (tt_res_key) {
          case "SSID":
            quick_res.SSID = tt_res_value;
            break;
          case "BSSID":
            quick_res.BSSID = tt_res_value;
            break;
          case "secure":
            quick_res.secure = tt_res_value;
            break;
          case "signalStrength":
            quick_res.signalStrength = tt_res_value;
            break;
          case "errCode":
            break;
          case "errMsg":
            break;
        }
      }
      if (quick_success) {
        quick_success(quick_res);
      }
      if (quick_complete) {
        quick_complete(quick_res);
      }
    };
    tt_object.fail = function (tt_res) {
      if (quick_fail) {
        quick_fail(tt_res);
      }
      if (quick_complete) {
        quick_complete(tt_res);
      }
    };
    tt.getConnectedWifi(tt_object)
  }
  /**
   * wifi.onscanned */
  , onscanned(data) {
    tt.onGetWifiList(function (data) {
      console.error("[quick2toutiao] 暂不支持 onscanned");
    })
  }
  /**wifi.onstatechanged */
  , onstatechanged(data) {
    tt.offWifiConnected(function (data) {
      console.error("[quick2toutiao] 暂不支持 onstatechanged");
    })
  }
}