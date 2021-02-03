// zeng/zeng.js
import {
  OnekitPage,
  swan
} from '../quickapp2toutiao/index'

OnekitPage({
  data: {

  },
  onLoad() {
    swan.nextTick(res => {
      console.log('heihei')
    })
    console.log('hello')





  }
})
