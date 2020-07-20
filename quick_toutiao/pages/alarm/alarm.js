// pages/alarm/alarm.js
export default {
  private: {
    componentName: 'Alarm',
    hour: 0,
    minute: 0,
    message: '头条闹钟',
    vibrate: true,
    repeat: false,
    days: [],
    provider: '',
    ringtone: ''
  },
  onInit() {
    this.$page.setTitleBar({ text: '闹钟设置' })

    this.provider = alarm.getProvider()
  },
  setAlarm() {
    const day = [new Date().getDay() - 1]

    this.days = this.repeat ? [0, 1, 2, 3, 4, 5, 6] : day

    alarm.setAlarm({
      hour: this.hour,
      minute: this.minute,
      message: this.message,
      vibrate: this.vibrate,
      ringtone: this.ringtone,
      days: this.days,
      success() {
        prompt.showToast({
          message: '设置闹钟成功'
        })
      },
      fail(data, code) {
        console.log('set alarm failed：code' + code.code)
      },
    })
  },
  pickVideo() {
    const _this = this

    media.pickFile({
      success(data) {
        prompt.showToast({
          message: 'data.uri:' + data.uri
        })
        _this.ringtone = data.uri
      },
      fail(data, code) {
        prompt.showToast({
          message: '选择铃声失败:' + code
        })
      }
    })
  },
  setAlarmHour(e) {
    this.hour = e.progress
  },
  setAlarmMinute(e) {
    this.minute = e.progress
  },
  setAlarmMsg(e) {
    this.message = e.value
  },
  switchAlarmVibrate(e) {
    this.vibrate = e.checked
  },
  switchAlarmRepeat(e) {
    this.repeat = e.checked
  }
}


Page({
  data: {

  },
  onLoad: function (options) {

  }
})