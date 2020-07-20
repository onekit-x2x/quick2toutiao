module.exports = {

  //getImageInfo获取图片信息
  getImageInfo(quick_object) {
    var tt_object = {};
    for (var quick_object_key of Object.keys(quick_object)) {
      var quick_object_value = quick_object[quick_object_key];
      switch (quick_object_key) {
        case "uri":
          if (quick_object_value.indexOf("internal://") == 0) {
            console.error("quick2toutiao", "暂不支持 image-getImageInfo 访问系统文件");
            return false;
          }
          tt_object["src"] = quick_object_value;
          break;
        case "success":
          break;
        case "fail":
          break;
        case "complete":
          break;
      }
    }

    //获取图片的大小
    function _doit(path, result, callback) {
      tt.getFileSystemManager().getFileInfo({
        filePath: tt_object.src,
        success: function(res) {
          result["size"] = res.size;
          callback(result);
        }
      });
    }

    tt_object["success"] = function(res) {
      console.log("success", res);
      if (quick_object.success) {
        var result = {
          width: res.width,
          height: res.height,
          uri: tt_object.src,
        };
        _doit(tt_object.src, result, function(res) {
          quick_object.success(res);
        });
      }
    }

    tt_object["fail"] = function(res) {
      console.log("fail", res);

      if (quick_object.fail) {
        var code;
        if (res.errMsg.indexOf("getImageInfo:fail file not found") == 0) {
          code = 301;
        } else if (res.errMsg.indexOf("getImageInfo:fail parameter error: parameter.src should be String instead of Undefined;") == 0) {
          code = 202;
        } else {
          code = 300;
        }
        quick_object.fail(res, code);
      }

    }

    tt_object["complete"] = function(res) {
      console.log("complete", res);
      if (quick_object.complete) {
        if (res.errMsg.indexOf("getImageInfo:ok") == 0) {
          var result = {
            width: res.width,
            height: res.height,
            uri: tt_object.src,
          };
          _doit(tt_object.src, result, function(data) {
            quick_object.complete(data);
          });
        } else if (res.errMsg.indexOf("getImageInfo:fail file not found") == 0) {
          quick_object.complete(res, 301);
        } else if (res.errMsg.indexOf("getImageInfo:fail parameter error: parameter.src should be String instead of Undefined;") == 0) {
          quick_object.complete(res, 202);
        } else {
          quick_object.complete(res, 300);
        }

      }

    }

    console.log(tt_object);
    tt.getImageInfo(tt_object);
  }

  //压缩图片
  , compressImage(quick_object) {
    var tt_object = {};
    for (var quick_object_key of Object.keys(quick_object)) {
      var quick_object_value = quick_object[quick_object_key];
      switch (quick_object_key) {
        case "uri":
          if (quick_object_value.indexOf("internal://") == 0) {
            console.error("quick2toutiao", "暂不支持 image-compressImage 访问系统文件");
            return false;
          }
          tt_object["src"] = quick_object_value;
          break;
        case "quality":
          tt_object[quick_object_key] = quick_object_value;
          break;
        case "ratio":
          //无该使用该参数
          break;
        case "format":
          //无法使用该参数
          break;
        case "success":
        case "fail":
        case "complete":
          break;
      }
    }

    tt_object["success"] = function(res) {
      console.log("success", res);
      if (quick_object.success) {
        quick_object.success({
          uri: res.tempFilePath
        });
      }
    }

    tt_object["fail"] = function(res) {
      console.log("fail", res);

      if (quick_object.fail) {
        var code;
        if (res.errMsg.indexOf("compressImage:fail file doesn't exist") == 0) {
          code = 301;
        } else if (res.errMsg.indexOf("compressImage:fail decode image fail") == 0) {
          code = 202;
        } else {
          code = 300;
        }

        quick_object.fail(res, code);
      }

    }

    tt_object["complete"] = function(res) {
      console.log("complete", res);
      if (quick_object.complete) {
        var code;
        var result = res;
        if (res.errMsg.indexOf("compressImage:ok") == 0) {
          result = {
            uri: res.tempFilePath
          };
        } else if (res.errMsg.indexOf("compressImage:fail file doesn't exist") == 0) {
          code = 301;
        } else if (res.errMsg.indexOf("compressImage:fail decode image fail") == 0) {
          code = 202;
        } else {
          code = 300;
        }

        quick_object.complete(result, code);
      }
    }

    console.log(tt_object);
    tt.compressImage(tt_object);
  }

  //对图片按顺序执行编辑操作
  //暂不支持
  , applyOperations(quick_object) {
    var tt_object = {};
    var tt_events = {};
    for (var quick_object_key of Object.keys(quick_object)) {
      var quick_object_value = quick_object[quick_object_key];
      //
      if (["success", "fail", "complete"].indexOf(quick_object_key) >= 0) {
        tt_events[quick_object_key] = quick_object_value;
      } else {
        tt_object[quick_object_key] = quick_object_value;
      }
    }
    tt.navigateTo({
      url: `/onekit/page/image.applyOperations/image.applyOperations?params=${JSON.stringify(tt_object)}`,
      events: tt_events
    })
  }

  //打开编辑器来编辑图片
  , editImage(quick_object) {
    // var tt_object = {};
    // for (var quick_object_key of Object.keys(quick_object_value)){
    //   var quick_object_value = quick_object[quick_object_key];
    //   switch (quick_object_key){
    //     case "uri":
    //       break;
    //     case "aspectRatioX":
    //       break;
    //     case "aspectRatioY":
    //       break;
    //     case "success":
    //     case "fail":
    //     case "cancel":
    //     case "complete":
    //       break;
    //   }
    // }
    var tt_object = {};
    var tt_events = {};
    for (var quick_object_key of Object.keys(quick_object)) {
      var quick_object_value = quick_object[quick_object_key];
      //
      if (["success", "fail", "complete"].indexOf(quick_object_key) >= 0) {
        tt_events[quick_object_key] = quick_object_value;
      } else {
        tt_object[quick_object_key] = quick_object_value;
      }
    }

    //去裁剪
    tt.navigateTo({
      url: `/onekit/page/image.editImage/image.editImage?tt_params=${JSON.stringify(tt_object)}`,
      events: tt_events
    })
  }

  //获取图片的exif信息
  , getExifAttributes(quick_object) {
    var tt_object = {};
    for (var quick_object_key of Object.keys(quick_object)) {
      var quick_object_value = quick_object[quick_object_key];
      switch (quick_object_key) {
        case "uri":
          if (quick_object_value.indexOf("internal://") == 0) {
            console.error("quick2toutiao", "暂不支持 image-getExifAttribuets 访问系统文件");
            return false;
          }

          tt_object["src"] = quick_object_value;
          break;
        case "success":
        case "fail":
        case "complete":
          break;
      }
    }


    tt_object["success"] = function(res) {
      console.log("success", res);
      if (quick_object.success) {
        quick_object.success({
          uri: tt_object.src,
          attributes: res.orientation
        });
      }
    }

    tt_object["fail"] = function(res) {
      console.log("fail", res);

      if (quick_object.fail) {
        var code;
        if (res.errMsg.indexOf("getImageInfo:fail file not found") == 0) {
          code = 301;
        } else if (res.errMsg.indexOf("getImageInfo:fail parameter error: parameter.src should be String instead of Undefined;") == 0) {
          code = 202;
        } else {
          code = 300;
        }

        quick_object.fail(res, code);
      }

    }

    tt_object["complete"] = function(res) {
      console.log("complete", res);
      if (quick_object.complete) {
        var code;
        var result = {};
        if (res.errMsg.indexOf("getImageInfo:ok") == 0) {
          result = {
            uri: tt_object.src,
            attributes: res.orientation
          };
        } else if (res.errMsg.indexOf("getImageInfo:fail file not found") == 0) {
          result = res;
          code = 301;
        } else if (res.errMsg.indexOf("getImageInfo:fail parameter error: parameter.src should be String instead of Undefined;") == 0) {
          result = res;
          code = 202;
        }
        quick_object.complete(result, code);
      }
    }

    console.log(tt_object);
    tt.getImageInfo(tt_object);

  }

  //设置图片的exif信息
  , setExifAttributes(quick_object) {
    console.error("quick2toutiao", "暂不支持 image-setExifAttributes 设置图片的exif信息");
    if (quick_object.fail) {
      quick_object.fail({
        errMsg: "暂不支持 image-setExifAttributes 设置图片的exif信息",
      }, 300);
    }
  }

}