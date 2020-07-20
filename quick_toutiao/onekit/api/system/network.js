module.exports = {
  /*  network.getType/// */
  getType(quick_object) {
    if (!quick_object) {
      return;
    }
    let quick_success = quick_object.success;
    let quick_fail = quick_object.fail;
    let quick_complete = quick_object.complete;
    quick_object=null;
    ///////////////////////////
    var tt_object = {};
      tt_object.success = function (tt_res) {
        var quick_res = {metered: false};
        for (var tt_res_key in tt_res) {
          var tt_res_value = tt_res[tt_res_key];
          switch (tt_res_key) {
            case "networkType":
              quick_res.type = tt_res_value
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
      tt_object.fail = function (tt_res) {
        if (quick_fail) {
          quick_fail(tt_res);
        }
        if (quick_complete) {
          quick_complete(tt_res);
        }
      };
      tt.getNetworkType(tt_object)
  }


  //////////////////////////subscribe监听网络连接状态
  , subscribe(quick_object) {
    if (!quick_object) {
      return;
    }
    let quick_reserved = quick_object.reserved ;
    let quick_callback = quick_object.callback;
    let quick_fail = quick_object.fail;
    quick_object=null;
    ///////////////////////////
    var tt_callback={}
    tt.onNetworkStatusChange(function(tt_callback){
      quick_callback.type = tt_callback.networkType
    })
  }
  ////////////////////////unsubscribe关闭监听网络连接状态
  , unsubscribe(quick_object){
    console.log("暂不支持！")
  }
  /**getSimOperator获取Sim卡的运营商信息 */
  ,getSimOperator(quick_object){
    console.log("暂不支持！")
  }
}