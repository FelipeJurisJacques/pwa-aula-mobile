const PRECACHE = 'precache-v1'

const PRECACHE_URLS = [
    'index.html'
]

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(PRECACHE)
        .then(Cache => Cache.addAll(PRECACHE_URLS))
        .then(self.skipWaiting())
    )
})