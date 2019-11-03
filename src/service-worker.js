// eslint-disable-next-line
workbox.precaching.precacheAndRoute(self.__precacheManifest)

let interval = undefined
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting()
  } else if (event.data && event.data.type === 'EMIT_NOTIFICATION') {
    interval = setInterval(() => {
      const now = new Date()
      const deltaTime = new Date(event.data.data - now),
        hour = deltaTime.getUTCHours(),
        min = deltaTime.getUTCMinutes(),
        sec = deltaTime.getUTCSeconds()

      console.log(hour, min, sec, event.data.data)
      self.registration.showNotification('Sport Companion', {
        body: hour + ' ' + min + ' ' + sec,
        tag: 'notif'
      })

      if (Date.parse(deltaTime) < 0) {
        self.registration.showNotification('Sport Companion', {
          body: 'countdown is over',
          tag: 'notif'
        })
        interval = clearInterval(interval)
      }
    }, 200)
  } else if (event.data && event.data.type === 'STOP_NOTIFICATION') {
    console.log('clear interval')
    self.registration.showNotification('Hello world', {
      body: 'le\'s train',
      tag: 'notif'
    })
    interval = clearInterval(interval)
  }
})
