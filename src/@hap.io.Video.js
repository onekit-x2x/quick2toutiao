/* eslint-disable consistent-return */
/* eslint-disable camelcase */
import PROMISE from '../node_modules/oneutil/PROMISE'

module.exports = {
  /* storage.set/// */

  getVideoInfo(quick_object) {
    const quick_uri = this.object.uri
    const quick_success = quick_object.success
    const quick_fail = quick_object.fail
    const quick_complete = quick_object.complete
    quick_object = null
    PROMISE((SUCCESS) => {
      tt.getVideoInfo({
        src: quick_uri,
        success: tt_res => {
          const quick_res = {
            uri: quick_uri,
            size: tt_res.size,
            height: tt_res.height,
            width: tt_res.width,
            bitrate: tt_res.bitrate,
            framerate: tt_res.fps,
            orientation: tt_res.orientation,
            type: tt_res.type,
            duration: tt_res.duration,
          }
          SUCCESS(quick_res)
        }
      })
    }, quick_success, quick_fail, quick_complete)
  }
}
