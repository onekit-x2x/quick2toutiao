/* eslint-disable no-console */
/* eslint-disable camelcase */
import PROMISE from '../node_modules/oneutil/PROMISE'

module.exports = {
  /** media.takePhoto */

  takePhoto() {
    // const quick_success = quick_object.success
    // const quick_fail = quick_object.fail
    // const quick_complete = quick_object.complete
    // quick_object = null
    // // const quick_cancel = quick_object.cancel
    // const CameraContext = tt.createCameraContext()
    // PROMISE((SUCCESS) => {
    //   CameraContext.takePhoto({
    //     success: tt_res => {
    //       const quick_res = {
    //         uri: tt_res.tempImagePath
    //       }
    //       SUCCESS(quick_res)
    //     }
    //   })
    // }, quick_success, quick_fail, quick_complete)
  },
  /** media.takeVideo */
  takeVideo(quick_object) {
    const quick_success = quick_object.success
    const quick_fail = quick_object.fail
    const quick_complete = quick_object.complete
    quick_object = null
    // const quick_cancel = quick_object.cancel
    PROMISE((SUCCESS) => {
      tt.chooseVideo({
        success: tt_res => {
          const quick_res = {
            uri: tt_res.tempFilePath,
            size: tt_res.size,
            duration: tt_res.duration,
            height: tt_res.height,
            width: tt_res.width,
          }
          SUCCESS(quick_res)
        }
      })
    }, quick_success, quick_fail, quick_complete)
  },

  /** media.pickImage */
  pickImage(quick_object) {
    const quick_success = quick_object.success
    const quick_fail = quick_object.fail
    const quick_complete = quick_object.complete
    quick_object = null
    // const quick_cancel = quick_object.cancel
    PROMISE((SUCCESS) => {
      tt.chooseImage({
        count: 1,
        success: tt_res => {
          const quick_res = {
            tempFilePaths: tt_res.tempFilePaths,
            uri: tt_res.tempFiles[0].path,
            size: tt_res.tempFiles[0].size
          }
          SUCCESS(quick_res)
        }
      })
    }, quick_success, quick_fail, quick_complete)
  },

  /** media.pickImages */
  pickImages(quick_object) {
    const quick_success = quick_object.success
    const quick_fail = quick_object.fail
    const quick_complete = quick_object.complete
    quick_object = null
    // const quick_cancel = quick_object.cancel
    PROMISE((SUCCESS) => {
      tt.chooseImage({
        success: tt_res => {
          const quick_files = tt_res.tempFiles.map(file => ({
            uri: file.path,
            size: file.size
          }))
          const quick_res = {
            uris: tt_res.tempFilePaths,
            files: quick_files
          }
          SUCCESS(quick_res)
        }
      })
    }, quick_success, quick_fail, quick_complete)
  },


  /** media.pickVideo */
  pickVideo(quick_object) {
    const quick_success = quick_object.success
    const quick_fail = quick_object.fail
    const quick_complete = quick_object.complete
    quick_object = null
    // const quick_cancel = quick_object.cancel
    PROMISE((SUCCESS) => {
      tt.chooseVideo({
        success: tt_res => {
          const quick_res = {
            uri: tt_res.tempFilePath,
            size: tt_res.size,
            duration: tt_res.duration,
            height: tt_res.height,
            width: tt_res.width,
          }
          SUCCESS(quick_res)
        }
      })
    }, quick_success, quick_fail, quick_complete)
  },

  /** media.pickVideos */
  pickVideos(quick_object) {
    const quick_success = quick_object.success
    const quick_fail = quick_object.fail
    const quick_complete = quick_object.complete
    quick_object = null
    // const quick_cancel = quick_object.cancel
    PROMISE((SUCCESS) => {
      tt.chooseVideo({
        sourceType: ['album'],
        success: swan_res => {
          const quick_res = {
            uris: [swan_res.tempFilePath],
            files: [{
              size: swan_res.size,
              uri: swan_res.tempFilePath
            }],
            duration: swan_res.duration,
            height: swan_res.height,
            width: swan_res.width,
          }
          SUCCESS(quick_res)
        }
      })
    }, quick_success, quick_fail, quick_complete)
  },


  /** media.pickFile */
  pickFile() {
    // if (!quick_object) {
    //   return
    // }
    // const quick_success = quick_object.success
    // const quick_fail = quick_object.fail
    // const quick_complete = quick_object.complete
    // quick_object = null
    // // const quick_cancel = quick_object.cancel
    // PROMISE((SUCCESS) => {
    //   tt.chooseMessageFile({
    //     count: 1,
    //     success: tt_res => {
    //       const quick_res = {
    //         tempFiles: tt_res.tempFiles,
    //         uri: tt_res.tempFiles[0].path,
    //         size: tt_res.tempFiles[0].size,
    //         name: tt_res.tempFiles[0].name,
    //       }
    //       SUCCESS(quick_res)
    //     }
    //   })
    // }, quick_success, quick_fail, quick_complete)
  },

  /** media.saveToPhotosAlbum */
  saveToPhotosAlbum(quick_object) {
    if (!quick_object) {
      return
    }
    const quick_success = quick_object.success
    const quick_fail = quick_object.fail
    const quick_complete = quick_object.complete
    const quick_uri = quick_object.uri
    quick_object = null
    const tt_object = {
      filePath: quick_uri,
      success: quick_success,
      fail: quick_fail,
      complete: quick_complete,
    }
    tt.saveImageToPhotosAlbum(tt_object)
  },

  /** media.previewImage */
  previewImage(quick_object) {
    const quick_success = quick_object.success
    const quick_fail = quick_object.fail
    const quick_complete = quick_object.complete
    const quick_uris = quick_object.uris
    const quick_current = quick_object.current || 0
    // const quick_cancel = quick_object.cancel
    quick_object = null
    const tt_object = {
      urls: quick_uris,
      current: quick_current,
      success: quick_success,
      fail: quick_fail,
      complete: quick_complete,
    }
    tt.previewImage(tt_object)
  },
  /** media.getRingtone */
  getRingtone() {
    console.warn('getRingtone is not support')
  },
  /** setRingtone */
  setRingtone() {
    console.warn('setRingtone is not support')
  }

}
