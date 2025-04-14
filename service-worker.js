
const CACHE_NAME = 'ps4-mod-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/goldhen_2.3_672.bin',
  '/goldhen_2.3_900.bin',
  '/1000191741.jpg'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        return response || fetch(event.request);
      })
  );
});
