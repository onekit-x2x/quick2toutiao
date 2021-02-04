/* eslint-disable camelcase */


module.exports = {
  getKeyguardLockedStatus(quick_object) {
    const quick_success = quick_object.success
    let isKeyguardLocked
    if (tt.onAppHide(() => {})) {
      isKeyguardLocked = true
    } else {
      isKeyguardLocked = false
    }
    const quick_res = {
      isKeyguardLocked
    }
    quick_success(quick_res)
  }
}
