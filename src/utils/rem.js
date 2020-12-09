(function() {
  var baseFontSize = 20
  // var baseWidth = 1916
  var designSize = 1920
  var set = function() {
    var clientWidth = document.documentElement.clientWidth || window.innerWidth

    var rem = 20
    if (clientWidth !== designSize) {
      rem = Math.floor((clientWidth / designSize) * baseFontSize)
    }
    if (rem <= 10) {
      rem = 10
    } else if (rem >= 20) {
      rem = 20
    }
    document.querySelector('html').style.fontSize = rem + 'px'
    window.baseFontSize = rem
  }
  set()
  window.addEventListener('resize', set)
})()
