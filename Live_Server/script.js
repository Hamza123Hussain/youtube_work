document.getElementById('playBtn').addEventListener('click', function () {
  let iframe = document.getElementById('youtube-video')
  let src = iframe.src
  if (src.indexOf('&autoplay=1') == -1) {
    iframe.src += '&autoplay=1'
  }
})

document.getElementById('pauseBtn').addEventListener('click', function () {
  let iframe = document.getElementById('youtube-video')
  let src = iframe.src
  iframe.src = src.replace('&autoplay=1', '')
})
