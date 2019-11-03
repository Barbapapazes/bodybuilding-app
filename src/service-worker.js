/* eslint-disable*/
workbox.precaching.precacheAndRoute(self.__precacheManifest)

self.addEventListener('notificationclick', function(event) {
  event.waitUntil(
    clients.matchAll({ type: 'window' }).then(function(clientList) {
      for (let index = 0; index < clientList.length; index++) {
        const client = clientList[index]
        if (
          client.url === 'https://barbapapazes.github.io/bodybuilding-app/' &&
          'focus' in client
        ) {
          return client.focus()
        }
        if (clients.openWindow) {
          return clients.openWindow(
            'https://barbapapazes.github.io/bodybuilding-app/'
          )
        }
      }
    })
  )

  // close all notifications
  self.registration.getNotifications().then(function(notifications) {
    notifications.forEach(function(notification) {
      notification.close()
    })
  })
})

let interval = undefined
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting()
  } else if (event.data && event.data.type === 'EMIT_NOTIFICATION') {
    event.waitUntil(
      (interval = setInterval(() => {
        const now = new Date()
        const deltaTime = new Date(event.data.data - now),
          hour = deltaTime.getUTCHours(),
          min = deltaTime.getUTCMinutes(),
          sec = deltaTime.getUTCSeconds()

        console.log(hour, min, sec, event.data.data)
        event.waitUntil(
          self.registration.showNotification('Sport Companion', {
            body: hour + ' ' + min + ' ' + sec,
            tag: 'notif'
          })
        )

        if (Date.parse(deltaTime) < 0) {
          self.registration.showNotification('Sport Companion', {
            body: 'countdown is over',
            tag: 'notif'
          })
          interval = clearInterval(interval)
        }
      }, 750))
    )
  } else if (event.data && event.data.type === 'STOP_NOTIFICATION') {
    console.log('clear interval')
    event.waitUntil(
      self.registration.showNotification('Hello world', {
        body: "le's train",
        tag: 'notif'
      })
    )

    interval = clearInterval(interval)
  }
})