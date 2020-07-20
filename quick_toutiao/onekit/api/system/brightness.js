module.exports = {
  /*
 brightness.setValue设置当前屏幕亮度值
 * */
  setValue(quick_object) {
    console.log("暂不支持！")
  }
  /*
 brightness.getValue获得当前屏幕亮度值
 * */
  ,
  getValue(quick_object) {
    console.log("暂不支持！")
  }
  /**
   * brightness.setKeepScreenOn设置是否保持常亮状态s
   */
  ,
  setKeepScreenOn(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete;
    var quick_keepScreenOn= quick_object.keepScreenOn;
    quick_object =null;
    ///////////////////////////
    var tt_object = {};
    if(quick_keepScreenOn){
      tt_object.keepScreenOn = quick_keepScreenOn
    }
      tt_object.success = function(tt_res) {
        var quick_res = {};
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
      tt.setKeepScreenOn(tt_object)
  }

  /**
     brightness.setMode
     */
  ,
  setMode(quick_object) {
     console.log("brightness.getMode暂不支持！")
  }

  /**
   brightness.getMode
   */
  ,
  getMode(quick_object) {
     console.log("brightness.getMode暂不支持！")
  }
}