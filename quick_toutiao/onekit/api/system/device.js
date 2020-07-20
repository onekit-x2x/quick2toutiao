module.exports = {
  getInfo(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete;
    quick_object =null;
    ///////////////////////////
    var tt_object = {};
      tt_object.success = function(tt_res) {
        var quick_res = {
          osVersionCode: 29,
          platformVersionCode: 1062,
          platformVersionName: "1.0.6.2",
          product: "OnePlus7_CH",
          vendorOsName: "H2OS",
          vendorOsVersion: "Hydrogen OS 10.0.4.GM57",
        };
        for (var tt_res_key in tt_res) {
          var tt_res_value = tt_res[tt_res_key];
          switch (tt_res_key) {
            case "brand": //微信
              quick_res.brand = tt_res_value //快应用
              quick_res.manufacturer = tt_res_value
              break;
            case "language":
              quick_res.language = tt_res_value.split("_")[0];
              quick_res.region = tt_res_value.split("_")[1];
              break;
            case "safeArea":
              break;
            case "model":
              quick_res.model = tt_res_value
              break;
            case "pixelRatio":
              quick_res.screenDensity = tt_res_value
              break;
            case "platform":
              quick_res.osType = tt_res_value
              break;
            case "system":
              quick_res.osVersionName = tt_res_value.split(" ")[1]
              break;
            case "screenHeight":
              quick_res.screenHeight = tt_res_value
              break;
            case "screenWidth":
              quick_res.screenWidth = tt_res_value
              break;
            case "screenTop":
              quick_res.statusBarHeight = tt_res_value
              break;
            case "windowHeight":
              quick_res.windowHeight = tt_res_value
              break;
            case "windowWidth":
              quick_res.windowWidth = tt_res_value
              break;
            case "SDKVersion":
            case "benchmarkLevel":
            case "bluetoothEnabled":
            case "cameraAuthorized":
            case "version":
            case "notificationAuthorized":
            case "microphoneAuthorized":
            case "locationEnabled":
            case "locationAuthorized":
            case "errMsg":
            case "deviceOrientation":
            case "devicePixelRatio":
            case "fontSizeSetting":
              break;
            default:
              quick_res[tt_res_key] = tt_res_value
          }
        }
        if (quick_success) {
          quick_success(quick_res);
        }
        if (quick_complete) {
          quick_complete(quick_res);
        }
      };
      tt_object.fail = function(tt_res) {
        if (quick_fail) {
          quick_fail(tt_res);
        }
        if (quick_complete) {
          quick_complete(tt_res);
        }
      };
      tt.getSystemInfo(tt_object)
  }
}