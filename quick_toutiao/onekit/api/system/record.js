module.exports = {
/*** record.start 开始录音*/
start(quick_object) {
  if (!quick_object) {
    return;
  }
  let quick_success = quick_object.success;
  let quick_fail = quick_object.fail;
  let quick_complete = quick_object.complete;
  let quick_duration = quick_object.duration;
  let quick_sampleRate = quick_object.sampleRate||8000;
  let quick_numberOfChannels = quick_object.numberOfChannels;
  let quick_encodeBitRate = quick_object.encodeBitRate;
  let quick_format = quick_object.format;
  quick_object = null;
////////////////////////////////////////////////
    var tt_object = {};
    if(quick_duration){
      tt_object.duration=quick_duration;
    }
    if(quick_sampleRate){
       tt_object.quick_sampleRate = quick_sampleRate;
    }
    if(quick_numberOfChannels){
     tt_object.numberOfChannels= quick_numberOfChannels;
    }
    if(quick_encodeBitRate){
      tt_object.encodeBitRate = quick_encodeBitRate;
    }
    if(quick_format){
      tt_object.frameSize=quick_format;
    }

      tt_object.success = function (tt_res) {
        var quick_res = {};
        quick_res.uri = tt_res.tempFilePath
        if (quick_success) {
          quick_success(quick_res);
        }
        if (quick_complete) {
          quick_complete(quick_res);
        }
      };
      tt_object.fail = function (tt_res) {
        if (quick_fail) {
          quick_fail(tt_res);
        }
        if (quick_complete) {
          quick_complete(tt_res);
        }
      };
    const recorderManager = tt.getRecorderManager()
    recorderManager.start(tt_object)
  }
  /**record.stop 停止录音*/
  , stop(object) {
    const recorderManager = tt.getRecorderManager()
    recorderManager.stop()
  }
}
