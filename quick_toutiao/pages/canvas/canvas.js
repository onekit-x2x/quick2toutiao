// pages/canvas/canvas.js
import { drawClock, drawLogo, drawGradientLogo, grayFilter, drawRectByGloComOperation } from '../../onekit/canvas.js'
Page({
  data: {
    componentName: 'canvas',
    globalCompositeOperation: 'source-over',
    imageUrl: '',
    blur: '0',
    color: 'black',
    OffsetX: '0',
    OffsetY: '0'

  },
  onLoad: function (options) {

  }
})