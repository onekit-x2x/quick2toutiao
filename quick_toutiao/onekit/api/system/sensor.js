module.exports = {
  subscribeAccelerometer(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_reserved = quick_object.reserved || false;
    var quick_interval = quick_object.url || "normal";
    var quick_callback = quick_object.callback;
    //////////////////////////
    var tt_object = {
      reserved: quick_reserved,
      interval: quick_interval
    }
    tt.onAccelerometerChange(function (callback) {
      quick_callback({
        x: callback.x,
        y: callback.z,
        z: callback.y
      })
    })
    tt.startAccelerometer(tt_object)
  }

  /** unsubscribeAccelerometer */
  , unsubscribeAccelerometer(quick_object) {
    tt.stopAccelerometer(function callback(e) {
      console.log(e);
    })
  }
  /**sensor.subscribeCompass */
  , subscribeCompass(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_reserved = quick_object.reserved || false;
    var quick_callback = quick_object.callback
    /////////////////////////
    tt.onCompassChange(function (res) {
      quick_callback({
        direction: res.direction
      })
    });
    tt.startCompass({});
  }

  /**sensor.unsubscribeCompass() */
  , unsubscribeCompass() {
    tt.stopCompass(function callback(e) {
      console.log(e);
    });
  }

  /** sensor.subscribeProximity*/
  , subscribeProximity(quick_object) {
    console.log("暂不支持！")
  }
  /**sensor.unsubscribeProximity() */
  , unsubscribeProximity() {
    console.log("暂不支持！")
  }

  /**sensor.subscribeLight */
  , subscribeLight(quick_object) {
    console.log("暂不支持！")
  }

  /**sensor.unsubscribeLight() */
  , unsubscribeLight() {
    console.log("暂不支持！")
  }

  /**sensor.subscribeStepCounter*/
  , subscribeStepCounter(quick_object) {
    console.log("暂不支持！")
  }
  //////////////////////////////
  /**sensor.unsubscribeStepCounter() */
  , unsubscribeStepCounter() {
    console.log("暂不支持！");
  }
}