/* eslint-disable no-console */
/* eslint-disable camelcase */
import PROMISE from '../node_modules/oneutil/PROMISE'

module.exports = {
  /** device.getInfo */
  getInfo(quick_object) {
    if (!quick_object) {
      return
    }
    const quick_success = quick_object.success
    const quick_fail = quick_object.fail
    const quick_complete = quick_object.complete
    quick_object = null
    PROMISE((SUCCESS) => {
      tt.getSystemInfo({
        success: tt_res => {
          const quick_res = {
            brand: tt_res.brand,
            model: tt_res.model,
            osVersionName: tt_res.system.split(' ')[0],
            osVersionCode: tt_res.system.split(' ')[1],
            pixelRatio: tt_res.pixelRatio,
            language: tt_res.language,
            screenWidth: tt_res.screenWidth,
            screenHeight: tt_res.screenHeight,
            windowWidth: tt_res.windowWidth,
            windowHeight: tt_res.windowHeight,
            statusBarHeight: tt_res.statusBarHeight,
            vendorOsVersion: tt_res.version,
            theme: tt_res.theme,
            locationReducedAccuracy: tt_res.locationReducedAccuracy,
            safeArea: tt_res.safeArea,
            wifiEnabled: tt_res.wifiEnabled,
            locationEnabled: tt_res.locationEnabled,
            bluetoothEnabled: tt_res.bluetoothEnabled,
            notificationSoundAuthorized: tt_res.notificationSoundAuthorized,
            notificationBadgeAuthorized: tt_res.notificationBadgeAuthorized,
            notificationAlertAuthorized: tt_res.notificationAlertAuthorized,
            notificationAuthorized: tt_res.notificationAuthorized,
            microphoneAuthorized: tt_res.microphoneAuthorized,
            locationAuthorized: tt_res.locationAuthorized,
            cameraAuthorized: tt_res.cameraAuthorized,
            albumAuthorized: tt_res.albumAuthorized,
            benchmarkLevel: tt_res.benchmarkLevel,
            SDKVersion: tt_res.SDKVersion,
            fontSizeSetting: tt_res.fontSizeSetting,
            platform: tt_res.platform,
          }
          SUCCESS(quick_res)
        }
      })
    }, quick_success, quick_fail, quick_complete)
  },

  /** device.getId */
  getId() {
    return console.warn('getId is not support')
  },

  /** device.getDeviceId */
  getDeviceId() {
    return console.warn('getDeviceId is not support')
  },

  /** device.getUserId */
  getUserId() {
    return console.warn('getUserId is not support')
  },

  /** device.getAdvertisingId */
  getAdvertisingId() {
    return console.warn('getAdvertisingId is not support')
  },

  /** device.getSerial */
  getSerial() {
    return console.warn('getSerial is not support')
  },

  /** device.getTotalStorage */
  getTotalStorage() {
    return console.warn('getTotalStorage is not support')
  },

  /** device.getAvailableStorage */
  getAvailableStorage() {
    return console.warn('getAvailableStorage is not support')
  },

  /** device.getCpuInfo */
  getCpuInfo() {
    return console.warn('getCpuInfo is not support')
  },

  /** device.getOAID */
  getOAID() {
    return console.warn('getOAID is not support')
  },

  /** device.platform */
  platform() {
    return console.warn('platform is not support')
  },

  /** device.host */
  host() {
    return console.warn('host is not support')
  },

}
