(function () {
  console.log('haaha',navigator)
  if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').then(()=>{
      console.log('service-worker注册成功')
    })
  }else {
    console.log('service-worker注册失败')
  }
})()
