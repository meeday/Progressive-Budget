const FILES_TO_CACHE = [
  "/",
  "/index.html",
  "/styles.css",
  "/dist/bundle.js",
  "/icons/icon-192x192.png",
  "/icons/icon-192x192.png"
];

const CACHE_NAME = "static-cache-v1";
const DATA_CACHE_NAME = "data-cache-v1";

self.addEventListener("install", event => {
  event.waitUntil(
    caches
    .open(CACHE_NAME)
    .then(cache => cache.addAll(FILES_TO_CACHE))
    .then(() => self.slipWaiting())
  );
});

self.addEventListener("activate", event => {
  const currentCaches = [CACHE_NAME, DATA_CACHE_NAME];
  event.waitUntil(
    caches
    .keys()
    .then(cacheNames => {
      return cacheNames.filter(
        cacheName => !currentCaches.includes(cacheName)
      );
    })
    .then(cachesToDelete => {
      return Promise.all(
        cachesToDelete.map(cacheToDelete => {
          return caches.delete(cacheToDelete);
        })
      );
    })
    .then(() => self.Clients.claim())
  );
});


