// zeng/zeng.js
import quickapp2toutiao from '../quickapp2toutiao/index'

const router = quickapp2toutiao['@system.router']
const prompt  = quickapp2toutiao['@system.prompt']
const webview  = quickapp2toutiao['@system.webview']
const request  = quickapp2toutiao['@system.request']
const media   = quickapp2toutiao['@system.media']
const fetch    = quickapp2toutiao['@system.fetch']
const websocketfactory     = quickapp2toutiao['@system.websocketfactory']
const storage     = quickapp2toutiao['@system.storage']
const file     = quickapp2toutiao['@system.file']
const vibrator = quickapp2toutiao['@system.vibrator']
const barcode = quickapp2toutiao['@system.barcode']
const sensor = quickapp2toutiao['@system.sensor']
const clipboard = quickapp2toutiao['@system.clipboard']
const geolocation = quickapp2toutiao['@system.geolocation']
const network = quickapp2toutiao['@system.network']
const device  = quickapp2toutiao['@system.device']
const brightness  = quickapp2toutiao['@system.brightness']
const battery  = quickapp2toutiao['@system.battery']
Page({
  data: {

  },
  onLoad() {
    battery.getStatus({
      success: function(data) {
        console.log(`handling success: ${data.level}`)
      },
      fail: function(data,) {
        console.log(data)
      }
    })
    // device.getInfo({
    //   success: function(ret) {
    //     console.log(ret)
    //   }
    // })
    // brightness.setValue({
    //   value: 100,
    //   success: function() {
    //     console.log('handling success')
    //   },
    //   fail: function(data, code) {
    //     console.log(`handling fail, code = ${code}`)
    //   }
    // })
    // brightness.getValue({
    //   success: function(data) {
    //     console.log(`handling success, value = ${data.value}`)
    //   },
    //   fail: function(data, code) {
    //     console.log(`handling fail, code = ${code}`)
    //   }
    // })
    // brightness.getMode({
    //   success: function(data) {
    //     console.log(`handling success, mode = ${data.mode}`)
    //   },
    //   fail: function(data, code) {
    //     console.log(`handling fail, code = ${code}`)
    //   }
    // })
    // brightness.setKeepScreenOn({
    //   keepScreenOn: true,
    //   success: function() {
    //     console.log('handling success')
    //   },
    //   fail: function(data, code) {
    //     console.log(`handling fail, code = ${code}`)
    //   }
    // })
    // device.getId({
    //   type: ['device', 'mac'],
    //   success: function(data) {
    //     console.log(`handling success: ${data.device}`)
    //   },
    //   fail: function(data, code) {
    //     console.log(`handling fail, code = ${code}`)
    //   }
    // })
    // network.getType({
    //   success: function(data) {
    //     console.log(`handling success: ${data.type}`)
    //   }
    // })
    // network.subscribe({
    //   callback: function(data) {
    //     console.log('handling callback')
    //   }
    // })
    //network.unsubscribe()
    // geolocation.subscribe({
    //   callback: function(data) {
    //     console.log(
    //       `handling success: longitude = ${data.longitude}, latitude = ${
    //         data.latitude
    //       }`
    //     )
    //   },
    //   fail: function(data, code) {
    //     console.log(`handling fail, code = ${code}`)
    //   }
    // })
    // geolocation.getLocationType({
    //   success: function(data) {
    //     console.log(`handling success: locationType = ${data.types}`)
    //   },
    //   fail: function(data, code) {
    //     console.log(`handling fail, code = ${code}`)
    //   }
    // })
    // geolocation.getLocation({
    //   success: function(data) {
    //     console.log(
    //       data
    //     )
    //   },
    //   fail: function(data, code) {
    //     console.log(`handling fail, code = ${code}`)
    //   }
    // })
    // tt.authorize({
    //   scope: "scope.userLocation",
    //   success: (res) => {
    //     console.log("authorize", res);
    //     tt.chooseLocation({
    //       success: (res) => {
    //         console.log("chooseLocation success: ", res);
    //       },
    //       fail: (err) => {
    //         console.log("chooseLocation fail: " + err.errMsg);
    //       },
    //     });
    //   },
    //   fail: (err) => {
    //     tt.openSetting({});
    //   },
    // });
    // geolocation.chooseLocation({
    //   latitude: 22.553594050274,
    // longitude: 114.0586290118,
    //   success: function(data) {
    //     console.log(
    //       data
    //     )
    //   },
    //   fail: function(data, code) {
    //     console.log(`choose location fail, code = ${code}`)
    //   },
    //   complete: function() {
    //     console.log(`choose location complete`)
    //   }
    // })
    // geolocation.openLocation({
    //   latitude: 22.553594050274,
    //   longitude: 114.0586290118,
    //   success: function() {
    //     console.log(`open location success`)
    //   },
    //   fail: function(data, code) {
    //     console.log(`open location fail, code = ${code}`)
    //   },
    //   complete: function() {
    //     console.log(`open location complete`)
    //   }
    // })
    // clipboard.set({
    //   text: 'text'
    // })
    // clipboard.get({
    //   success: function(data) {
    //     console.log(`handling success: ${data.text}`)
    //   },
    //   fail: function(data, code) {
    //     console.log(`handling fail, code = ${code}`)
    //   }
    // })
    // sensor.unsubscribeCompass()
    // sensor.subscribeCompass({
    //   callback: function(ret) {
    //     console.log(ret)
    //   }
    // })
    
    
    
   
    
   
    // sensor.subscribeAccelerometer({
    //   callback: function(ret) {
    //     console.log(ret)
    //   }
    // })
    // sensor.unsubscribeAccelerometer()
   
    // vibrator.vibrate({
    //   mode: 'long'
    // })
    // barcode.scan({
    //   success: function(data) {
    //     console.log(data)
    //   },
    //   fail: function(data, code) {
    //     console.log(`handling fail, code = ${code}`)
    //   }
    // })
    // file.mkdir({
    //   uri: 'internal://files/dor',
    //   recursive:true,
    //   success: function(data) {
    //     console.log(data,'sssssssssss')
    //   },
    //   fail: function(data, code) {
    //     console.log(`handling fail, code = ${code}`)
    //   }
    // })
    // file.get({
    //   uri: 'internal://files/dir/a.txt',
    //   success: function(data) {
    //     console.log(data)
       
    //   },
    //   fail: function(data, code) {
    //     console.log(`handling fail, code = ${code}`)
    //   }
    // })
    // file.move({
    //   srcUri: 'internal://files/dor/b.txt',
    //   dstUri: 'internal://files/dir/',
    //   success: function(uri) {
    //     console.log(uri)
    //   },
    //   fail: function(data, code) {
    //     console.log(`handling fail, code = ${code}`)
    //   }
    // })
    // file.copy({
    //   srcUri: 'internal://files/dor/d.txt',
    //   dstUri: 'internal://files/dir/',
    //   success: function(uri) {
    //     console.log(uri)
    //   },
    //   fail: function(data, code) {
    //     console.log(`handling fail, code = ${code}`)
    //   }
    // })
    // file.list({
    //   uri: 'internal://files/dor',
    //   success: function(data) {
    //     console.log(data.fileList)
    //   },
    //   fail: function(data, code) {
    //     console.log(`handling fail, code = ${code}`)
    //   }
    // })
    // file.list({
    //   uri: 'internal://files/dir',
    //   success: function(data) {
    //     console.log(data.fileList)
    //   },
    //   fail: function(data, code) {
    //     console.log(`handling fail, code = ${code}`)
    //   }
    // })
    // file.delete({
    //   uri: 'internal://files/dir/a.txt',
    //   success: function(data) {
    //     console.log('handling success')
    //   },
    //   fail: function(data, code) {
    //     console.log(`handling fail, code = ${code}`)
    //   }
    // })
    // const buffer = new ArrayBuffer(8)
    // file.writeArrayBuffer({
    //   uri: 'internal://files/dor/d.txt',
    //   buffer: buffer,
    //   success: function(data) {
    //     console.log(data)
    //   },
    //   fail: function(data, code) {
    //     console.log(`handling fail, code = ${code}`)
    //   }
    // })
    // file.readArrayBuffer({
    //   uri: 'internal://files/dir/a.txt',
    //   position: 100,
    //   length: 100,
    //   success: function(data) {
    //     console.log(data)
    //   },
    //   fail: function(data, code) {
    //     console.log(`handling fail, code = ${code}`)
    //   }
    // })
    // file.writeText({
    //   uri: 'internal://files/dir/a.txt',
    //   text: 'test',
    //   success: function(data) {
    //     console.log(data)
    //   },
    //   fail: function(data, code) {
    //     console.log(`handling fail, code = ${code}`)
    //   }
    // })
    // file.readText({
    //   uri: 'internal://files/dir/a.txt',
    //   success: function(data) {
    //     console.log('text: ' + data.text)
    //   },
    //   fail: function(data, code) {
    //     console.log(`handling fail, code = ${code}`)
    //   }
    // })
    // file.rmdir({
    //   uri: 'internal://files/dir/',
    //   success: function(data) {
    //     console.log(data)
    //   },
    //   fail: function(data, code) {
    //     console.log(`handling fail, code = ${code}`)
    //   }
    // })
    // file.access({
    //   uri: 'internal://files/dir',
    //   success: function(data) {
    //     console.log(data)
    //   },
    //   fail: function(data) {
    //     console.log(data)
    //   }
    // })
    // storage.set({
    //   key: 'A1',
    //   value: 'V1',
    //   success: function(data) {
    //     console.log('handling success')
    //   },
    //   fail: function(data, code) {
    //     console.log(`handling fail, code = ${code}`)
    //   }
    // })
    // storage.key({
    //   index: 0,
    //   success: function(data) {
    //     console.log(`handling success, key = ${data}`)
    //   },
    //   fail: function(data, code) {
    //     console.log(`handling fail, code = ${code}`)
    //   }
    // })
    // let length = storage.length
    // console.log(length)
    // storage.get({
    //   key: 'A1',
    //   success: function(data) {
    //     console.log(data)
    //   },
    //   fail: function(data, code) {
    //     console.log(`handling fail, code = ${code}`)
    //   }
    // })
    // storage.clear({
    //   success: function(data) {
    //     console.log('handling success')
    //   },
    //   fail: function(data, code) {
    //     console.log(`handling fail, code = ${code}`)
    //   }
    // })
    // storage.delete({
    //   key: 'A1',
    //   success: function(data) {
    //     console.log('handling success')
    //   },
    //   fail: function(data, code) {
    //     console.log(`handling fail, code = ${code}`)
    //   }
    // })
    
    // const ws = websocketfactory.create({
    //   url: '',
    //   header: {
    //     'content-type': 'application/json'
    //   },
    //   protocols: ['protocol']
    // })
    // ws.onopen = function(data) {
    //           console.log(data)
    //         }
    // ws.send({
    //   data: 'send message',
    //   success: function() {
    //     console.log(`send success`)
    //   },
    //   fail: function(data, code) {
    //     console.log(`handling fail, code = ${code}`)
    //   }
    // })
    
    
  }
})
