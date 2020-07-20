module.exports = {
  /*
 battery.getStatus* */
  getStatus(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete;
    quick_object =null;
    //////////////////////////////////////////
    var tt_object = {};
    tt_object.success = function(tt_res) {
      var quick_res = {};
      for (var tt_res_key in tt_res) {
        var tt_res_value = tt_res[tt_res_key];
        console.log(tt_res_key)
        switch (tt_res_key) {
          case "level":
            quick_res.level = tt_res_value / 100
            break;
          case "isCharging":
            quick_res.isCharging = tt_res_value
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
    tt_object.fail = function(tt_res) {
      if (quick_fail) {
        quick_fail(tt_res);
      }
      if (quick_complete) {
        quick_complete(tt_res);
      }
    };
    return tt.getBatteryInfo(tt_object)
  }
}