/* eslint-disable consistent-return */
/* eslint-disable camelcase */
import PROMISE from '../node_modules/oneutil/PROMISE'

module.exports = {
  /* storage.set/// */
  scan(quick_object) {
    if (!quick_object) {
      return null
    }
    const quick_success = quick_object.success
    const quick_fail = quick_object.fail
    //  const quick_cancel = quick_object.cancel
    const quick_complete = quick_object.complete
    quick_object = null
    PROMISE((SUCCESS) => {
      tt.scanCode({
        success: tt_res => {
          const quick_res = {
            result: tt_res.result
          }
          SUCCESS(quick_res)
        }
      })
    }, quick_success, quick_fail, quick_complete)
  }
}
