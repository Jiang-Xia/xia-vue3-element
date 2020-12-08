function watermark(waterMarkTxt, className) { // 水印
  var watermarkdivs = []
  // 加载水印
  var loadMark = function() {
    var defaultSettings = {
      watermark_txt: waterMarkTxt,
      watermark_x: -2, // 水印起始位置x轴坐标
      watermark_y: 20, // 水印起始位置Y轴坐标
      watermark_rows: 4, // 水印行数
      watermark_cols: 5, // 水印列数
      watermark_x_space: 60, // 水印x轴间隔
      watermark_y_space: 70, // 水印y轴间隔
      watermark_color: '#000000', // 水印字体颜色
      watermark_alpha: 0.05, // 水印透明度，小于等于0.003,不可恢复到水印。
      watermark_fontsize: '20px', // 水印字体
      watermark_font: 'CN Bold Bold', // 水印字体
      watermark_line_height: 30, // 水印行高
      watermark_width: 333, // 水印宽度
      watermark_height: 136, // 水印长度
      watermark_angle: 15, // 水印倾斜度数
      // watermark_bg_color:'yellow',
      watermark_bg_alpha: 0.5 // 加透明度导致隐形水印无法读取

    }
    // 采用配置项替换默认值，作用类似jquery.extend
    if (arguments.length === 1 && typeof arguments[0] === 'object') {
      var src = arguments[0] || {}
      for (const key in src) {
        if (src[key] && defaultSettings[key] && src[key] === defaultSettings[key]) { continue } else if (src[key]) { defaultSettings[key] = src[key] }
      }
    }

    var oTemp = document.createDocumentFragment()

    if (watermarkdivs && watermarkdivs.length > 0) {
      document.getElementsByClassName(className)[0].removeChild(document.getElementById('otdivid'))
      watermarkdivs = []
    }
    var x
    var y
    for (var i = 0; i < defaultSettings.watermark_rows; i++) {
      y = defaultSettings.watermark_y + (defaultSettings.watermark_y_space + defaultSettings.watermark_height) * i
      for (var j = 0; j < defaultSettings.watermark_cols; j++) {
        x = defaultSettings.watermark_x + (defaultSettings.watermark_width + defaultSettings.watermark_x_space) * j

        var mask_div = document.createElement('div')
        mask_div.id = '_mask_div' + i + j
        mask_div.className = '_mask_div'
        // mask_div.appendChild(document.createTextNode(defaultSettings.watermark_txt));
        // 设置水印div倾斜显示
        mask_div.style.webkitTransform = 'rotate(-' + defaultSettings.watermark_angle + 'deg)'
        mask_div.style.MozTransform = 'rotate(-' + defaultSettings.watermark_angle + 'deg)'
        mask_div.style.msTransform = 'rotate(-' + defaultSettings.watermark_angle + 'deg)'
        mask_div.style.OTransform = 'rotate(-' + defaultSettings.watermark_angle + 'deg)'
        mask_div.style.transform = 'rotate(-' + defaultSettings.watermark_angle + 'deg)'
        mask_div.style.visibility = ''
        mask_div.style.position = 'fixed'
        // 选不中
        mask_div.style.left = x + 'px'
        mask_div.style.top = y + 'px'
        mask_div.style.overflow = 'hidden'
        mask_div.style.zIndex = '9'
        mask_div.style.pointerEvents = 'none'
        // mask_div.style.border="solid #eee 1px";
        mask_div.style.opacity = defaultSettings.watermark_alpha
        mask_div.style.fontSize = defaultSettings.watermark_fontsize
        mask_div.style.fontFamily = defaultSettings.watermark_font
        mask_div.style.color = defaultSettings.watermark_color
        mask_div.style.textAlign = 'center'
        mask_div.style.lineHeight = defaultSettings.watermark_line_height + 'px'
        mask_div.style.width = defaultSettings.watermark_width + 'px'
        mask_div.style.height = defaultSettings.watermark_height + 'px'
        mask_div.style.display = 'block'
        mask_div.style.fontWeight = '900'
        mask_div.style.zIndex = '2000'
        oTemp.appendChild(mask_div)
      }
    }

    document.getElementsByClassName(className)[0].appendChild(oTemp)

    const divs = document.querySelectorAll('._mask_div')
    for (let i = 0; i < divs.length; i++) {
      divs[i].innerHTML = defaultSettings.watermark_txt
    }
  }

  watermark.load = function(settings) {
    function del() {
      const divs = document.querySelectorAll('._mask_div')
      for (let i = 0; i < divs.length; i++) {
        divs[i].parentNode.removeChild(divs[i])
        console.log(divs[i].parentElement)
      }
    }
    del()
    window.onload = function() {
      del()
      loadMark(settings)
    }
    window.onresize = function() {
      del()
      loadMark(settings)
    }
    del()
    loadMark(settings)
  }
  watermark.load({
    watermark_txt: waterMarkTxt
  })
}
export default watermark
