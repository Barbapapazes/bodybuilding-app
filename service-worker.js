importScripts("/bodybuilding-app/precache-manifest.52aa5d8803222d2891510566d554bda3.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

// eslint-disable-next-line
workbox.precaching.precacheAndRoute(self.__precacheManifest)

self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting()
  }
})

