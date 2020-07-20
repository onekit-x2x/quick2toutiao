module.exports = {
  /* storage.set/// */
  getStorage(quick_object) {
    if (!quick_object) {
      return;
    }

    var quick_key = quick_object.key;
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_cancel = quick_object.cancel;
    var quick_complete = quick_object.complete;
    quick_object =null;
    //////////////////////////////////////////
    var tt_object = {};
    tt_object.success = function(tt_res) {
      var quick_res = {};
      for (var tt_res_key in tt_res) {
        switch (tt_res_key) {
          case "result":
            quick_res.result = tt_res.result;
            break;
        }
      };
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
    return tt.scanCode(tt_object)
  }
}