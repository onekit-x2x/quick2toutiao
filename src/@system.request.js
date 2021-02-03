/* eslint-disable no-console */
/* eslint-disable camelcase */
import PROMISE from '../node_modules/oneutil/PROMISE'
import TASK from '../node_modules/oneutil/TASK'


module.exports = {
  /** request.upload */
  upload(quick_object) {
    if (!quick_object) {
      return
    }
    const quick_url = quick_object.url
    const quick_header = quick_object.header || {}
    const quick_files = quick_object.files
    const quick_data = quick_object.data
    const quick_success = quick_object.success
    const quick_fail = quick_object.fail
    const quick_complete = quick_object.complete
    quick_object = null
    PROMISE((SUCCESS) => {
      TASK(quick_files, (quick_file, callback) => {
        const filePath = quick_file.uri
        const name = quick_file.name
        tt.uploadFile({
          url: quick_url,
          name,
          filePath,
          header: quick_header,
          formData: quick_data[0],
          success: tt_res => {
            const quick_res = {
              code: tt_res.statusCode,
              data: tt_res.data
            }
            callback(quick_res)
          }

        })
      }, (quick_res) => {
        const res = {
          quick_res
        }
        SUCCESS(res)
      })
    }, quick_success, quick_fail, quick_complete)
  },
  /** request.download */

  download(quick_object) {
    if (!quick_object) {
      return
    }
    const quick_success = quick_object.success
    const quick_fail = quick_object.fail
    const quick_complete = quick_object.complete
    const quick_url = quick_object.url
    const filename = quick_object.filename || quick_url.substring(quick_url.lastIndexOf('/') + 1)
    const filePath = tt.env.USER_DATA_PATH + '/' + filename
    quick_object = null
    const tt_object = {
      url: quick_url,
      filePath,
    }
    PROMISE((SUCCESS) => {
      tt.downloadFile({
        url: quick_url,
        filePath,
        success: tt_res => {
          const token = '' + new Date().getTime()
          const quick_res = {
            tempFilePath: tt_res.tempFilePath,
            filePath: tt_res.filePath,
            statusCode: tt_res.statusCode,
            profile: tt_res.profile,
            token
          }
          SUCCESS(quick_res)
        }
      })
    }, quick_success, quick_fail, quick_complete)
    getApp().onekit_DownloadTask = tt.downloadFile(tt_object)
    getApp().onekit_url = quick_url
  },
  /** onDownloadComplete */

  onDownloadComplete(quick_object) {
    if (!quick_object) {
      return
    }
    const quick_success = quick_object.success
    if (getApp().onekit_DownloadTask) {
      const DownloadTask = getApp().onekit_DownloadTask
      DownloadTask.onProgressUpdate(tt_res => {
        if (tt_res.progress === 100) {
          quick_success({
            uri: getApp().onekit_url
          })
        }
      })
    }
  }
}
