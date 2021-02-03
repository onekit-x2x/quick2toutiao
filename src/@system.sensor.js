/* eslint-disable no-console */
/* eslint-disable camelcase */
module.exports = {
  subscribeAccelerometer(quick_object) {
    if (!quick_object) {
      return
    }
    const quick_interval = quick_object.interval || 'normal'
    const quick_callback = quick_object.callback
    const tt_object = {
      interval: quick_interval,
    }
    tt.startAccelerometer(tt_object)
    tt.onAccelerometerChange(tt_res => {
      const quick_res = {
        x: tt_res.x,
        y: tt_res.y,
        z: tt_res.z,
      }
      quick_callback(quick_res)
    })
  },

  /** unsubscribeAccelerometer */
  unsubscribeAccelerometer() {
    return tt.offAccelerometerChange()
  },
  /** sensor.subscribeCompass */
  subscribeCompass(quick_object) {
    if (!quick_object) {
      return
    }
    tt.startCompass()
    const quick_callback = quick_object.callback
    if (!getApp().onekit_Compass) {
      tt.onCompassChange(function (res) {
        quick_callback({
          direction: res.direction
        })
      })
    } else {
      getApp().onekit_Compass = false
    }
  },

  /** sensor.unsubscribeCompass() */
  unsubscribeCompass() {
    getApp().onekit_Compass = true
  },

  /** sensor.subscribeProximity */
  subscribeProximity() {
    return console.warn('subscribeProximity is not support')
  },
  /** sensor.unsubscribeProximity() */
  unsubscribeProximity() {
    return console.warn('unsubscribeProximity is not support')
  },

  /** sensor.subscribeLight */
  subscribeLight() {
    return console.warn('subscribeLight is not support')
  },

  /** sensor.unsubscribeLight() */
  unsubscribeLight() {
    return console.warn('unsubscribeLight is not support')
  },

  /** sensor.subscribeStepCounter */
  subscribeStepCounter(quick_object) {
    if (!quick_object) {
      return
    }
    tt.startAccelerometer({
      interval: 'game'
    })
    const quick_callback = quick_object.callback

    function check(a1, a2) {
      return ((a1 > 0 && a2 < 0) || (a1 < 0 && a2 > 0))
    }
    let steps = 0

    function add() {
      steps++
      quick_callback({
        steps
      })
    }
    let x
    let y
    let z
    tt.onAccelerometerChange(function (res) {
      if (x && check(x, res.x)) {
        add()
        x = 0
      } else if (y && check(y, res.y)) {
        add()
        y = 0
      } else if (z && check(z, res.z)) {
        add()
        z = 0
      }
      x = res.x

      y = res.y

      z = res.z
    })
  },
  // ////////////////////////////
  /** sensor.unsubscribeStepCounter() */
  unsubscribeStepCounter() {
    return tt.offCompassChange()
  }
}
