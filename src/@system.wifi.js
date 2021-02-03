/* eslint-disable consistent-return */
/* eslint-disable no-console */
/* eslint-disable camelcase */
import PROMISE from '../node_modules/oneutil/PROMISE'

module.exports = {
  /** wifi.connect */
  connect(quick_object) {
    tt.startWifi()
    return tt.connectWifi(quick_object)
  },
  /**
   * wifi.scan
   */
  scan(quick_object) {
    tt.startWifi()
    return tt.getWifiList(quick_object)
  },
  /**
   * wifi.getConnectedWifi */

  getConnectedWifi(quick_object) {
    if (!quick_object) {
      return
    }
    tt.startWifi()
    const quick_success = quick_object.success
    const quick_fail = quick_object.fail
    const quick_complete = quick_object.complete
    quick_object = null
    PROMISE((SUCCESS) => {
      tt.getConnectedWifi({
        success: tt_res => {
          const quick_res = {
            SSID: tt_res.wifi.SSID,
            BSSID: tt_res.wifi.BSSID,
            secure: tt_res.wifi.secure,
            signalStrength: tt_res.wifi.signalStrength,
          }
          SUCCESS(quick_res)
        }
      })
    }, quick_success, quick_fail, quick_complete)
  },
  /**
   * wifi.onscanned */
  set onscanned(callback) {
    tt.startWifi()
    return tt.onGetWifiList(callback)
  },
  /** wifi.onstatechanged */
  set onstatechanged(callback) {
    tt.startWifi()
    tt.onWifiConnected(tt_res => {
      let state
      if (tt_res.wifi.secure) {
        state = 1
      } else {
        state = 0
      }
      const quick_res = {
        state,
        SSID: tt_res.wifi.SSID,
        BSSID: tt_res.wifi.BSSID,
        secure: tt_res.wifi.secure,
        signalStrength: tt_res.wifi.signalStrength,
      }
      callback(quick_res)
    })
  }
}
