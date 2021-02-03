/* eslint-disable consistent-return */
/* eslint-disable no-console */
/* eslint-disable camelcase */
import PROMISE from '../node_modules/oneutil/PROMISE'

module.exports = {
  getLocation(quick_object) {
    if (!quick_object) {
      return
    }
    const quick_success = quick_object.success
    const quick_fail = quick_object.fail
    const quick_complete = quick_object.complete
    const quick_timeout = quick_object.timeout || 3000
    const quick_coordType = quick_object.coordType || 'wgs84'
    quick_object = null
    PROMISE((SUCCESS) => {
      tt.getLocation({
        type: quick_coordType,
        highAccuracyExpireTime: quick_timeout,
        success: tt_res => {
          const quick_res = {
            latitude: tt_res.latitude,
            longitude: tt_res.longitude,
            speed: tt_res.speed,
            accuracy: tt_res.accuracy,
            altitude: tt_res.altitude,
            verticalAccuracy: tt_res.verticalAccuracy,
            horizontalAccuracy: tt_res.horizontalAccuracy,
            time: new Date().getTime()
          }
          SUCCESS(quick_res)
        }
      })
    }, quick_success, quick_fail, quick_complete)
  },
  /** openLocation */
  openLocation(quick_object) {
    if (!quick_object) {
      return
    }
    const quick_success = quick_object.success
    const quick_fail = quick_object.fail
    const quick_complete = quick_object.complete
    const quick_latitude = quick_object.latitude
    const quick_longitude = quick_object.longitude
    const quick_scale = quick_object.scale || 18
    const quick_name = quick_object.name || ''
    const quick_address = quick_object.address || ''
    quick_object = null
    PROMISE((SUCCESS) => {
      tt.openLocation({
        latitude: quick_latitude,
        longitude: quick_longitude,
        scale: quick_scale,
        name: quick_name,
        address: quick_address,
        success: () => {
          const quick_res = {
            errMsg: 'openLocation: ok'
          }
          SUCCESS(quick_res)
        }
      })
    }, quick_success, quick_fail, quick_complete)
  },
  /** chooseLocation */

  chooseLocation(quick_object) {
    if (!quick_object) {
      return
    }
    const quick_success = quick_object.success
    const quick_fail = quick_object.fail
    const quick_complete = quick_object.complete
    const quick_latitude = quick_object.latitude
    const quick_longitude = quick_object.longitude
    const quick_coordType = quick_object.coordType || 'wgs84'
    quick_object = null
    PROMISE((SUCCESS) => {
      if (quick_latitude == null || quick_longitude == null) {
        tt.getLocation({
          type: quick_coordType,
          success: tt_res => {
            const quick_res = {
              latitude: tt_res.latitude,
              longitude: tt_res.longitude,
              speed: tt_res.speed,
              accuracy: tt_res.accuracy,
              altitude: tt_res.altitude,
              verticalAccuracy: tt_res.verticalAccuracy,
              horizontalAccuracy: tt_res.horizontalAccuracy,
              time: new Date().getTime()
            }
            SUCCESS(quick_res)
          }
        })
      } else {
        tt.authorize({
          scope: 'scope.userLocation',
          success: () => {
            tt.chooseLocation({
              latitude: quick_latitude,
              longitude: quick_longitude,
              success: (tt_res) => {
                const quick_res = {
                  name: tt_res.name,
                  address: tt_res.address,
                  latitude: tt_res.latitude,
                  longitude: tt_res.longitude,
                  coordType: quick_coordType,
                }
                SUCCESS(quick_res)
              }
            })
          }
        })
      }
    }, quick_success, quick_fail, quick_complete)
  },
  /** getLocationType */

  getLocationType(quick_object) {
    if (!quick_object) {
      return
    }
    const quick_success = quick_object.success
    const quick_res = {
      types: ['gps', 'network']
    }
    quick_success(quick_res)
  },
  /** geolocation.subscribe */

  subscribe() {
    // if (!quick_object) {
    //   return
    // }
    // tt.startLocationUpdate()
    // const quick_callback = quick_object.callback
    // quick_object = null
    // tt.onLocationChange(function (tt_res) {
    //   const quick_res = {
    //     latitude: tt_res.latitude,
    //     longitude: tt_res.longitude,
    //     speed: tt_res.speed,
    //     accuracy: tt_res.accuracy,
    //     altitude: tt_res.altitude,
    //     verticalAccuracy: tt_res.verticalAccuracy,
    //     horizontalAccuracy: tt_res.horizontalAccuracy,
    //     time: new Date().getTime()
    //   }
    //   quick_callback(quick_res)
    // })
    return console.warn('subscribe is not support')
  },
  /** tt.offLocationChange */
  unsubscribe() {
    return console.warn('unsubscribe is not support')
  },
  /** geolocation.getSupportedCoordTypes() */
  getSupportedCoordTypes() {
    console.log('getSupportedCoordTypes is not support')
  },

  /** geolocation.geocodeQuery() */
  geocodeQuery() {
    console.log('geocodeQuery is not support')
  },

  /** geolocation.reverseGeocodeQuery() */
  reverseGeocodeQuery() {
    console.log('reverseGeocodeQuery is not support')
  },

}
