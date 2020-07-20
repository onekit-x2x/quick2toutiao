module.exports = {
/**
 * 支付宝app支付暂未开通
 * 
 */
 pay(quick_object){
   if(!quick_object){
    return;
   }
   var quick_orderInfo = quick_object.orderInfo;
  //  var quick_callback = quick_object.callback;
   ////////////////////////
   var tt_object={};
   if(quick_orderInfo){
     tt_object.orderInfo = quick_orderInfo;
   };
  //  if(quick_callback){
  //  };

    console.error("[quick2toutiao]", "暂未开通支付宝app支付");
  }


}