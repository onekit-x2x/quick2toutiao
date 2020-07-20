module.exports = {
  /*  clipboard.set/// */
  set(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete;
    var quick_text=quick_object.text;
    quick_object = null;
    /////////////////
      var tt_object = {};
      if(quick_text){
        tt_object.data = quick_text
      }
        tt_object.success = function(tt_res) {
          var quick_res = {};
          for (var tt_res_key in tt_res) {
            var tt_res_value = tt_res[tt_res_key];
            switch (tt_res_key) {
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
        tt.setClipboardData(tt_object)
    }

    /* clipboard.get/// */
    ,
  get(quick_object) {
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete;
    quick_object = null;
    //////////////////////////
    var tt_object = {};
      tt_object.success = function(tt_res) {
        var quick_res = {};
        quick_res.text = tt_res.data
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
      tt.getClipboardData(tt_object);
  }
}