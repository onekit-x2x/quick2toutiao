/* eslint-disable consistent-return */
/* eslint-disable no-console */
/* eslint-disable camelcase */
// import PROMISE from '../node_modules/oneutil/PROMISE'

module.exports = {
  /** wifi.connect */
  connect() {
    return console.warn('connect is not support')
  },
  /**
   * wifi.scan
   */
  scan(quick_object) {
    return tt.getWifiList(quick_object)
  },
  /**
   * wifi.getConnectedWifi */

  getConnectedWifi(quick_object) {
    if (!quick_object) {
      return
    }
    return tt.getConnectedWifi(quick_object)
  },
  /**
   * wifi.onscanned */
  set onscanned(callback) {
    return tt.onGetWifiList(callback)
  },
  /** wifi.onstatechanged */
  onstatechanged() {
    return console.warn('onstatechanged is not support')
  }
}
