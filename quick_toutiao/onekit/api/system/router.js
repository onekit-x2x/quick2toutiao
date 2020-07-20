import URL from "../../js/URL.js"
module.exports = {
  /*  network.getType/// */
  push(quick_object) {
    if(!quick_object){
      return;
    }
    var quick_uri = quick_object.uri;
    var quick_params = quick_object.params;
    /////////////////
    var tt_object = {};
    var url = new URL(quick_uri);
    console.log(url)
    if (url.scheme) {
      switch (url.scheme) {
        case "tel":
          tt.makePhoneCall({
            phoneNumber: url.host,
          });
          break;
        case "sms":
          tt.showModal({
            title: '不支持',
            content: '微信小程序暂不支持发短信',
          });
          break;
        case "http":
        case "https":
          tt.navigateTo({
            url: `/onekit/page/router.push/ie?url=${encodeURI(quick_uri)}`
          })
          break;
        case "internal":
          tt.showModal({
            title: '带配置',
            content: '请配置要打开的App',
          });
          break;
        case "hap":
          switch (url.host) {
            case "app":
              tt.showModal({
                title: '带配置',
                content: '请配置要打开的小程序',
              });
              break;
            case "settings":
            case "app":
              tt.showModal({
                title: '不支持',
                content: '微信小程序暂不支持打开手机设置',
              });
              break;
            default:
              throw new Error(url.host);
          }
          // tt.showModal({
          //   title: '不支持',
          //   content: '微信小程序暂不支持',
          // });
          break;
        default:
          throw new Error(url.scheme);
      }
    } else {
      if(quick_params){
        tt_object.url = quick_uri + `?params=${quick_params.body}`;
      }else{
        tt_object.url = quick_uri;
      }
      tt.navigateTo(tt_object);
    }

  }

  /**router.replace */
  ,
  replace(quick_object) {
    var quick_uri = quick_object.uri;
    /////////////////
    var tt_object = {};
    var url = new URL(quick_uri);
    tt_object.url = quick_uri;
    tt.redirectTo(tt_object);
  }
  /**router.back */
  ,
  back(quick_object) {
    var quick_uri = quick_object.uri;
    /////////////////
    var tt_object = {};
    var url = new URL(quick_uri);
    tt_object.url = quick_uri;
    tt.navigateBack(tt_object);
  }

  /**router.clear() */
  ,
  clear(quick_object) {
    var tt_object = {};
  }
  /**router.getLength */
  ,
  getLength(quick_object) {
    var tt_object = {};
  }
  /**router.getState */
  ,
  getState(quick_object) {
    var tt_object = {};
  }
  /**router.getPages */
  ,
  getPages(quick_object) {
    var tt_object = {};
  }
}