/* eslint-disable class-methods-use-this */
/* eslint-disable no-console */
/* eslint-disable camelcase */
import PROMISE from '../../node_modules/oneutil/PROMISE'

export default class Video {
  constructor(object) {
    this.object = object
  }

  compressVideo(quick_object) {
    const quick_uri = this.object.uri
    const quick_bitrate = this.object.bitrate || 0.5
    const quick_framerate = this.object.framerate || 30
    const quick_success = quick_object.success
    const quick_fail = quick_object.fail
    const quick_complete = quick_object.complete
    quick_object = null
    PROMISE((SUCCESS) => {
      tt.compressVideo({
        src: quick_uri,
        quality: 'medium',
        bitrate: quick_bitrate,
        fps: quick_framerate,
        resolution: 0.5,
        success: tt_res => {
          const quick_res = {
            uri: tt_res.tempFilePath,
            size: tt_res.size
          }
          SUCCESS(quick_res)
        },
        fail: res => {
          console.log(res)
        }
      })
    }, quick_success, quick_fail, quick_complete)
  }

  getVideoInfo(quick_object) {
    const quick_uri = quick_object.uri
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
        },
        fail: res => {
          console.log(res)
        }
      })
    }, quick_success, quick_fail, quick_complete)
  }
}
