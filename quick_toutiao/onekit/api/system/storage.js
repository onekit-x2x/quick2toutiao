module.exports = {
  /* storage.set/// */
  set(quick_object) {
    if(!quick_object){
      return;
    }
    var quick_key = quick_object.key;
    var quick_value = quick_object.value;
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete;
    ///////////////////////////////////////////
    var tt_object = {};
    tt_object.key = quick_key;
    if(quick_value){
      tt_object.data = quick_value;
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
      tt.setStorage(tt_object)
    }
    /* storage.get */
    ,
  get(quick_object) {
    if(!quick_object){
      return;
    }
    var quick_key = quick_object.key;
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete;
    ///////////////////////////////////////////
    var tt_object = {}; 
    tt_object.key = quick_key;

    tt_object.success = function(tt_res) {
      var quick_res = {};
      for (var tt_res_key in tt_res) {
        var tt_res_data = tt_res[tt_res_key];
        switch (tt_res_key) {
          case "data":
            quick_res = tt_res_data
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
        quick_fail("");

      }
      if (quick_complete) {
        quick_complete("");
      }

    };
      tt.getStorage(tt_object)
    }
    /*Storage.clear*/
    ,
  clear(quick_object) {
    if(!quick_object){
      return;
    }
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete;
    ///////////////////////////////////////////
    var tt_object = {};

    tt_object.success = function(tt_res) {
      console.log(tt_res);
      var quick_res = {tt_res};
      if (tt_res) {
        for (var tt_res_key in tt_res) {
          var tt_res_value = tt_res[tt_res_key];
          switch (tt_res_key) {
            case "errMsg":
              break;
          }
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
    tt.clearStorage(tt_object)
  }
  /*Storage.delete*/
  ,
  delete(quick_object) {
    if(!quick_object){
      return;
    }
    var quick_key = quick_object.key;
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete;
    ///////////////////////////////////////////
    var tt_object = {};
    tt_object.key = quick_key;

    tt_object.success = function(tt_res) {
      var quick_res = {};
      if (tt_res) {
        for (var tt_res_key in tt_res) {
          var tt_res_value = tt_res[tt_res_key];
          switch (tt_res_key) {
            case "errMsg":
              break;
          }
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
    tt.removeStorage(tt_object)
  }
  /*storage.key*/
  ,
  key(quick_object) {
    if(!quick_object){
      return;
    }
    var quick_index = quick_object.index;
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete;
    ///////////////////////////////////////////
    var tt_object = {}
    var index = quick_object.index;
    tt_object.success = function(tt_res) {
      var quick_res = tt_res.keys[index];
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
      tt.getStorageInfo(tt_object)
  }
}