/* eslint-disable camelcase */
/* eslint-disable no-console */
module.exports = {

  share(quick_object) {
    if (!quick_object) {
      return
    }
    const quick_type = quick_object.type
    const quick_data = quick_object.data
    const quick_success = quick_object.success
    const quick_fail = quick_object.fail
    const quick_complete = quick_object.complete
    // ////////////////////////////////////////////
    const tt_object = {}
    if (quick_type.indexOf('text/') === 0) {
      console.log('[quick2toutiao] not support share text')
    } else if (quick_type.indexOf('/') === 0) {
      // 应用内路径
      tt_object.path = quick_data
    } else {
      // 下载的文件路径

    }

    const tt_callback = {}
    if (quick_complete) {
      tt_callback.complete = quick_complete
    }
    if (quick_success) {
      tt_callback.success = quick_success
    }
    if (quick_fail) {
      tt_callback.fail = quick_fail
    }
    if (quick_object.cancel) {
      tt_callback.cancel = quick_object.cancel
    }

    tt.navigateTo({
      url: `/onekit/page/share.share/share.share?param=${JSON.stringify(tt_object)}`,
      events: tt_callback,
    })
  }

}
