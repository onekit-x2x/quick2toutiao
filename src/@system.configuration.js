/* eslint-disable no-console */
/* eslint-disable camelcase */
// import PROMISE from '../node_modules/oneutil/PROMISE'

module.exports = {
  getLocale() {
    const tt_res = tt.getSystemInfoSync()
    const quick_res = {
      language: tt_res.language,
      countryOrRegion: 'CN'
    }
    return quick_res
  },
  setLocale() {

  },
  getThemeMode() {
    const tt_res = tt.getSystemInfoSync()
    if (tt_res.theme === 'light') {
      return 0
    } else {
      return 1
    }
  }

}
