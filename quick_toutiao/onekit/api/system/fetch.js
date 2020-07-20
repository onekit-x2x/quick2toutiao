module.exports = {
  fetch(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_success = quick_object.success;
    var quick_fail = quick_object.fail;
    var quick_complete = quick_object.complete;
    var quick_url = quick_object.url;
    var quick_data = quick_object.data;
    var quick_header	= quick_object.header;
    var quick_method  = quick_object.method;
    var quick_responseType = quick_object.responseType;
    quick_object =null;
    //////////////////////////////////
    var tt_object = {};
    if(quick_url){
      tt_object.url = quick_url
    }
    if(quick_data){
      tt_object.data=quick_data
    }
    if(quick_header){
      tt_object.header= quick_header
    }
    if(quick_method){
      tt_object.method=quick_method
    }
    if(quick_responseType){
      tt_object.responseType=quick_responseType
    }
      tt_object.success = function(tt_res) {
        // console.log(tt_res);
        var quick_res = {};
        for (var tt_res_key in tt_res) {
          var tt_res_value = tt_res[tt_res_key];
          switch (tt_res_key) {
            case "statusCode": //头条
              quick_res.code = tt_res.statusCode //快应用
              break;
            case "header":
              var tt_res_header = tt_res_value;
              var quick_res_headers = {};
              for (var tt_res_header_key in tt_res_header) { // 循环header里面的属性 对cookies做处理
                var tt_res_header_value = tt_res_header[tt_res_header_key];
                //console.log(tt_res_headers_key, tt_res_headers_value);
                switch (tt_res_header_key) {
                  case "Set-Cookie":
                    var tt_res_header_cookies;
                    if (tt_res_header_value) {
                      tt_res_header_cookies = tt_res_header_value.split(",");
                    } else {
                      tt_res_header_cookies = "";
                    }
                    quick_res_headers[tt_res_header_key] = tt_res_header_cookies
                    break
                  default:
                    quick_res_headers[tt_res_header_key] = tt_res_header_value;
                    break;
                }
              };
              quick_res.header = quick_res_headers;
              break;
            case "cookies":
              break;
            case "errMsg":
              break;
            default:
              quick_res[tt_res_key] = tt_res_value;
              break;
          }
        }
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
      tt.request(tt_object);
  }
}