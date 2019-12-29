/* eslint-disable*/
workbox.precaching.precacheAndRoute(self.__precacheManifest)

const path = '/'

self.addEventListener('notificationclick', function(event) {
  event.waitUntil(
    clients.matchAll({ type: 'window' }).then(function(clientList) {
      for (let index = 0; index < clientList.length; index++) {
        const client = clientList[index]
        if (client.url === path && 'focus' in client) {
          return client.focus()
        }
        if (clients.openWindow) {
          return clients.openWindow(path)
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
          badge: `${path}favicon.ico`,
          icon: `${path}img/notifications/timer.png`
        })

        if (Date.parse(deltaTime) < 0) {
          self.registration.showNotification('Sport Companion', {
            body: 'Countdown is Over ! 🏋️‍♀️',
            tag: 'notif',
            badge: `${path}favicon.ico`,
            renotify: true,
            icon: `${path}img/notifications/timer-sand-empty.png`
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
        badge: `${path}bodybuilding-app/favicon.ico`,
        icon: `${path}img/notifications/weight-lifter.png`
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
