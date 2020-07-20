module.exports = {
  vibrate(quick_object) {
    if(!quick_object){
      return;
    }
    var quick_mode = quick_object.mode;
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete;
    ///////////////////////////////////////////
    var tt_object = {}
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
    if (quick_mode == 'long' || quick_mode == null) {
      tt.vibrateLong(tt_object, console.log('vibrateLong'))
    } else if (quick_mode == 'short') {
      tt.vibrateShort(tt_object, console.log('vibrateShort'))
    }
  }
}