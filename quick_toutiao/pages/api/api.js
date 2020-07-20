

var openid, session_key, out_trade_no, trade_no;
Page({
  data: {},
  onLoad: function () {
    /////////////////////////登录///////////////////////
    tt.login({
      success(res) {
        console.log(res.code);
        tt.request({
          // url: URL_app + 'jscode2session' + EXT, // 目标服务器url
          url: "https://www.onekitwx.com/toutiao/jscode2session",
          data: {
            JSCODE: res.code
          },
          header: {
            "content-type": "application/x-www-form-urlencoded"
          },
          method: 'POST',
          success: (res) => {
            console.log(res.data);
            openid = res.data.openid;
            session_key = res.data.session_key
          }
        });
      },
      fail(res) {
        console.log(`login调用失败`);
      }

    });
  },
  ////////////////////获取用户信息////////////////////
  getUserInfo_tap: (e) => {
    // console.log(e.detail);

    tt.getUserInfo({
      withCredentials: true,
      success(res) {
        console.log(res);
        console.log(session_key);
        tt.request({
          url: "https://www.onekitwx.com/toutiao/decrypt",
          data: {
            'session_key': session_key,
            data: JSON.stringify(res)
          },
          header: {
            "content-type": "application/x-www-form-urlencoded"
          },
          method: 'POST',
          success: (res2) => {
            console.log(res2.data);
          }
        });

      },
      fail(res) {
        console.log(`getUserInfo调用失败`);
      }
    });
  },



  ///////////////////获取手机号码/////////////////////
  getPhoneNumber_tap: (e) => {
    console.log(e.detail)
    tt.request({
      // url: URL_app + 'decrypt' + EXT,
      url: "https://www.onekitwx.com/toutiao/decrypt",
      data: {
        data: JSON.stringify(e.detail),
        'session_key': session_key,

      },
      header: {
        "content-type": "application/x-www-form-urlencoded"
      },
      method: 'POST',
      success(res) {
        console.log(res.data)
      }
    }
    );
  }


})