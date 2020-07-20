module.exports = {
  /**file.move */
  move(quick_object) {
    return console.log("move暂不支持！")
  }
  /**file.copy */
  ,
  copy(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete;
    var quick_srcUri=quick_object.srcUri;
    var quick_srcUri=quick_object.dstUri;
    ///////////////////////////
    var tt_object = {};
    if(quick_srcUri){
      tt_object.srcPath = quick_srcUri;
    }
    if(quick_dstUri){
      tt_object.destPath = quick_srcUri;
    }
      tt_object.success = function(tt_res) {
        var quick_res = {};
        if (quick_success) {
          quick_success(quick_res);
        }
        if (quick_complete) {
          quick_complete(quick_res);
        }
      };
      tt_object.fail = function(tt_res) {
        var quick_res = {
          fail: 202
        };
        for (var tt_res_key in tt_res) {
          var tt_res_value = tt_res[tt_res_key];
          switch (tt_res_key) {
            case "errMsg":
              break;
          }
        }
        if (quick_fail) {
          quick_fail(tt_res);
        }
        if (quick_complete) {
          quick_complete(tt_res);
        }
      };
      tt.getFileSystemManager().copyFile(tt_object)
  }

  /**file.list */
  ,
  list(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete;
    var quick_uri=quick_object.uri
    ///////////////////////////////////////////////
    var tt_object = {};
    if(quick_uri){
      tt_object.dirPath=quick_uri
    }
      tt_object.success = function(tt_res) {
        var quick_res = {};
        quick_res.fileList = tt_res.files
        if (quick_success) {
          quick_success(quick_res);
        }
        if (quick_complete) {
          quick_complete(quick_res);
        }
      };
      tt_object.fail = function(tt_res) {
        if (quick_fail) {
          quick_fail(tt_res);
        }
        if (quick_complete) {
          quick_complete(tt_res);
        }
      };
      tt.getFileSystemManager().readdir(tt_object)
  }

  /**file.get */
  ,
  get(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete;
    var quick_uri=quick_object.uri;
    var quick_recursive=quick_object.recursive||false 
    ///////////////////////////////////////////////
      var tt_object = {};
      if(quick_uri){
        tt_object.filePath = quick_uri;
      }
        tt_object.success = function(tt_res) {
          var quick_res = {
            uri:tt_object.filePath,
            lastModifiedTime,
            type,
            subFiles
          };
          quick_res.length = tt_res.size
          if (quick_success) {
            quick_success(quick_res);
          }
          if (quick_complete) {
            quick_complete(quick_res);
          }
        };
        tt_object.fail = function(tt_res) {
          if (quick_fail) {
            quick_fail(tt_res);
          }
          if (quick_complete) {
            quick_complete(tt_res);
          }
        };
        tt.getFileSystemManager().getFileInfo(tt_object)
    }

    /**file.delete */
    ,
  delete(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete;
    var quick_uri=quick_object.uri;
    var tt_object = {};
    if(quick_uri){
     tt_object.filePath=quick_uri;
    }
      tt_object.success = function(tt_res) {
        var quick_res = {};
        if (quick_success) {
          quick_success(quick_res);
        }
        if (quick_complete) {
          quick_complete(quick_res);
        }
      };
      tt_object.fail = function(tt_res) {
        if (quick_fail) {
          quick_fail(tt_res);
        }
        if (quick_complete) {
          quick_complete(tt_res);
        }
      };
      tt.getFileSystemManager().unlink(tt_object)
  }

  /**file.writeText */
  ,
  writeText(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete;
    var quick_encoding=quick_object.encoding||UTF-8;
    var quick_append=quick_object.append||false;
    /////////////////////////////////////////////////
    var tt_object = {};
    if(quick_encoding){
      tt_object.encoding =quick_encoding;
    }
      tt_object.success = function(tt_res) {
        var quick_res = {};
        if (quick_success) {
          quick_success(quick_res);
        }
        if (quick_complete) {
          quick_complete(quick_res);
        }
      };
      tt_object.fail = function(tt_res) {
        if (quick_fail) {
          quick_fail(tt_res);
        }
        if (quick_complete) {
          quick_complete(tt_res);
        }
      };
      tt.getFileSystemManager().writeFile(tt_object)
  }

  /**file.writeArrayBuffer */
  ,
  writeArrayBuffer(quick_object) {
    return console.log("暂不支持！")
  }

  /**file.readText */
  ,
  readText(quick_object) {}

  /**file.readArrayBuffer */
  ,
  readArrayBuffer(quick_object) {}

  /**file.access */
  ,
  access(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete;
    var quick_uri =quick_object.uri;
    //////////////////////////////////////
    var tt_object = {};
    if(quick_uri){
      tt_object.path=quick_uri;
    }
      tt_object.success = function(tt_res) {
        var quick_res = {};
        if (quick_success) {
          quick_success(quick_res);
        }
        if (quick_complete) {
          quick_complete(quick_res);
        }
      };
      tt_object.fail = function(tt_res) {
        if (quick_fail) {
          quick_fail(tt_res);
        }
        if (quick_complete) {
          quick_complete(tt_res);
        }
      };
      tt.getFileSystemManager().access(tt_object)
  }

  /**file.mkdir */
  ,
  mkdir(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete;
    var quick_uri =quick_object.uri;
    var quick_recursive =quick_object.recursive||false;
    quick_object =null;
    ///////////////////////////////////////////////
    var tt_object = {};
    if(quick_uri){
      tt_object.dirPath=quick_uri;
    }
    if(quick_recursive){
      tt_object.recursive=quick_recursive;
    }
      tt_object.success = function(tt_res) {
        var quick_res = {};
        if (quick_success) {
          quick_success(quick_res);
        }
        if (quick_complete) {
          quick_complete(quick_res);
        }
      };
      tt_object.fail = function(tt_res) {
        if (quick_fail) {
          quick_fail(tt_res);
        }
        if (quick_complete) {
          quick_complete(tt_res);
        }
      };
      tt.getFileSystemManager().mkdir(tt_object)
  }

  /**file.rmdir */
  ,
  rmdir(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete;
    var quick_uri =quick_object.uri;
    var quick_recursive =quick_object.recursive||false;
    quick_object =null;
    ///////////////////////////////////////////////
    var tt_object = {};
    if(quick_uri){
      tt_object.dirPath=quick_uri;
    }
    if(quick_recursive){
      tt_object.recursive=quick_recursive;
    }
      tt_object.success = function(tt_res) {
        var quick_res = {};
        if (quick_success) {
          quick_success(quick_res);
        }
        if (quick_complete) {
          quick_complete(quick_res);
        }
      };
      tt_object.fail = function(tt_res) {
        if (quick_fail) {
          quick_fail(tt_res);
        }
        if (quick_complete) {
          quick_complete(tt_res);
        }
      };
      tt.getFileSystemManager().rmdir(tt_object)
  }
}