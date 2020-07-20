module.exports = {
  getLocation(quick_object) {
    if (!quick_object) {
      return;
    }
    let quick_success = quick_object.success;
    let quick_fail = quick_object.fail;
    let quick_complete = quick_object.complete;
    let quick_timeout = quick_object.timeout || 30000;
    let quick_coordType = quick_object.coordType || wgs84;
    quick_object = null;
    /////////////////////////////////////
    var tt_object = {};
    if (quick_timeout) {
    };
    if (quick_coordType) {
      tt_object.type = quick_coordType;
    };
    tt_object.success = function (tt_res) {
      var quick_res = {
        time: 1587455926904
      };
      for (var tt_res_key in tt_res) {
        var tt_res_value = tt_res[tt_res_key];
        // console.log(tt_res_key)
        switch (tt_res_key) {
          case "accuracy":
            quick_res.accuracy = tt_res_value;
            break;
          case "latitude":
            quick_res.latitude = tt_res_value;
            break;
          case "longitude":
            quick_res.longitude = tt_res_value;
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
    tt.getLocation(tt_object)
  },
  /* getLocationType*/
  getLocationType(quick_object) {
    console.log("暂不支持！")
  }
  ,
  // openLocation
  openLocation(quick_object){
    if (!quick_object) {
      return;
    }
    let quick_latitude = quick_object.latitude;
    let quick_longitude = quick_object.longitude;
    let quick_scale = quick_object.scale;
    let quick_name = quick_object.name;
    let quick_address = quick_object.address;
    let quick_success = quick_object.success;
    let quick_fail = quick_object.fail;
    let quick_complete = quick_object.complete;
    let quick_coordType = quick_object.coordType;
    quick_object = null;
    ////////////////////////////
    var tt_object = {};
    if (quick_latitude) {
      tt_object.latitude = quick_latitude;
    }
    if (quick_longitude) {
      tt_object.longitude = quick_longitude;
    }
    if (quick_scale) {
      tt_object.scale = quick_scale;
    }
    if (quick_name) {
      tt_object.name = quick_name;
    }
    if (quick_address) {
      tt_object.address = quick_address;
    }
    tt_object.success = function (tt_res) {
      var quick_res = {
        coordType: tt_object.latitude + "," + tt_object.longitude
      };
      if (quick_success) {
        quick_success(quick_res);
      }
      if (quick_complete) {
        quick_complete(quick_res);
      }
    };
  },

  /* chooseLocation*/
  chooseLocation(quick_object) {
    if (!quick_object) {
      return;
    }
    let quick_success = quick_object.success;
    let quick_fail = quick_object.fail;
    let quick_complete = quick_object.complete;
    let quick_latitude = quick_object.latitude;
    let quick_longitude = quick_object.longitude;
    let quick_coordType = quick_object.coordType;
    quick_object = null;
    ////////////////////////////////
    var tt_object = {};
    if (quick_latitude) {
      tt_object.latitude = quick_latitude;
    }
    if (quick_longitude) {
      tt_object.longitude = quick_longitude;
    }
    tt_object.success = function (tt_res) {
      var quick_res = {
        coordType: tt_object.latitude + "," + tt_object.longitude
      };
      for (var tt_res_key in tt_res) {
        var tt_res_value = tt_res[tt_res_key];
        switch (tt_res_key) {
          case "name":
            quick_res.name = tt_res_value;
            break;
          case "address":
            quick_res.address = tt_res_value;
            break;
          case "latitude":
            quick_res.latitude = tt_res_value;
            break;
          case "longitude":
            quick_res.longitude = tt_res_value;
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
    tt.openLocation(tt_object);
  }
  /** geolocation.subscribe*/
  ,
  subscribe(quick_object) {
    console.log("暂不支持！")
    
  }
  /**tt.offLocationChange */
  , unsubscribe() {
    tt.offLocationChange()
  }
  /**geolocation.getSupportedCoordTypes() */
  , getSupportedCoordTypes() {
    console.log("暂不支持！")
  }

}