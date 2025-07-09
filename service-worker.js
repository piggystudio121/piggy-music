// service-worker.js
self.addEventListener("install", e => {
  console.log("Service Worker instalado");
});

self.addEventListener("fetch", event => {
  event.respondWith(fetch(event.request));
});
