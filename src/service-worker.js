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

        const time =
          this.zeroPrefix(hour, 2) +
          ':' +
          this.zeroPrefix(min, 2) +
          ':' +
          this.zeroPrefix(sec, 2)

        self.registration.showNotification('Countdown', {
          body: time,
          tag: 'notif',
          badge: '/bodybuilding-app/favicon.ico',
          icon: '/bodybuilding-app/img/notifications/timer.png'
        })

        if (Date.parse(deltaTime) < 0) {
          self.registration.showNotification('Sport Companion', {
            body: 'Countdown is Over ! 🏋️‍♀️',
            tag: 'notif',
            badge: '/bodybuilding-app/favicon.ico',
            renotify: true,
            icon: '/bodybuilding-app/img/notifications/timer-sand-empty.png'
          })
          interval = clearInterval(interval)
        }
      }, 750))
    )
  } else if (event.data && event.data.type === 'STOP_NOTIFICATION') {
    event.waitUntil(
      self.registration.showNotification('Sport Companion', {
        body: "Let's Train ! 💪",
        tag: 'notif',
        badge: '/bodybuilding-app/favicon.ico',
        icon: '/bodybuilding-app/img/notifications/weight-lifter.png'
      })
    )

    interval = clearInterval(interval)
  }
})

zeroPrefix = function(num, digit) {
  let zero = ''
  for (let index = 0; index < digit; index++) {
    zero += '0'
  }
  return (zero + num).slice(-digit)
}
