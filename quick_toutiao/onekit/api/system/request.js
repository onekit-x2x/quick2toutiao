module.exports = {
  /**request.upload*/
  upload(quick_object) {
    if (!quick_object) {
      return;
    }
    let quick_url = quick_object.url;
    let quick_header = quick_object.header;
    let quick_files = quick_object.files;
    let quick_method = quick_object.method;
    let quick_data = quick_object.data;
    let quick_success = quick_object.success;
    let quick_fail = quick_object.fail;
    let quick_complete = quick_object.complete;
    //////////////////////////////////////
    var count = quick_files.length;
    var tt_object = {};
    if(quick_url){
      tt_object.url=quick_url;
    }
    if (quick_header) {
      tt_object.header = quick_header;
    }
    if (quick_data) {
      tt_object.formData = quick_data;
    }

    tt_object.success = function(tt_res) {
      console.log("upload success", tt_res);
    }
    tt_object.fail = function(tt_res) {
      console.log("upload fail", tt_res);
    }
    tt_object.complete = function(tt_res) {
      console.log("upload complete", tt_res);
      var quick_res = {
        headers: tt_res.header,
        code: tt_res.statusCode,
        data: tt_res.data
      };
      check(quick_res);
    }
    for (var file of quick_files) {
      tt_object.filePath = file.uri;
      tt_object.name = file.name || "file";
      console.log(tt_object);
      tt.uploadFile(tt_object);
      delete tt_object.formData;
    }
    function check(quick_res) {
      count--;
      if (count > 0) {
        return;
      }
      if (quick_res.code == 200) {
        if (quick_success) {
          quick_success(quick_res);
        }
      } else {
        if (quick_fail) {
          quick_fail(quick_res);
        }
      }
      if (quick_complete) {
        quick_complete(quick_res);
      }

    }
  }

  /**request.download */
  ,
  download(quick_object) {
    var that = this;
    var tt_object = {};
    if (!quick_object) {
      return;
    }
    let quick_success = quick_object.success;
    let quick_fail = quick_object.fail;
    let quick_complete = quick_object.complete;
    let url = quick_object.url;
    let filename = quick_object.filename || url.substring(url.lastIndexOf("/") + 1);
    let description = quick_object.description || filename;
    tt_object.url = url;
    tt_object.filePath = tt.env.USER_DATA_PATH + "/" + filename;
    if (quick_object.header) {
      tt_object.header = quick_object.header;
    }

    tt_object.success = function(tt_res) {
      console.log("tt_dowload_success ", tt_res);
      var token = "" + new Date().getTime();
      getApp().onekit.download[token] = tt_res.tempFilePath ? tt_res.tempFilePath : tt_res.filePath;
      var return_res = {
        token,
      };
      if (quick_success) {
        quick_success(return_res);
      }
      if (quick_complete) {
        quick_complete(return_res);
      }

      //图片未下载完成就调用监听接口获取uri，导致获取为空的处理方法
      if (that.callback) {
        that.callback({
          uri: that.url
        });
        that.callback = null;
      }

    }
    tt_object.fail = function(tt_res) {
      console.log(tt_res);
      if (quick_fail) {
        quick_fail(tt_res, 1000);
      }
      if (quick_complete) {
        quick_complete(tt_res, 1000);
      }
    };

    this.downloadTask = tt.downloadFile(tt_object);
    this.downloadTask.onProgressUpdate((res) => {
      that.progress = res.progress;
      console.log('下载进度', res.progress)
      // console.log('已经下载的数据长度', res.totalBytesWritten)
      // console.log('预期需要下载的数据总长度', res.totalBytesExpectedToWrite);

    })
  }

  /**onDownloadComplete */
  ,
  onDownloadComplete(quick_object) {
     if (!quick_object) {
      return;
    }
    let quick_success = quick_object.success;
    let quick_fail = quick_object.fail;
    let quick_complete = quick_object.complete;
    let token = quick_object.token;
    quick_object = null;
    /////////////////////////////////////////////////////////
var uri = getApp().onekit.download[token];
      var return_res = {
        uri
      };
      if (quick_success) {
        quick_success(return_res);
      }
      if (quick_complete) {
        quick_complete(return_res);
      }

  }
}