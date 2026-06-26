/* =========================================================
   AULA VIRTUAL ESCUELA NOCTURNA - Service Worker v3
   Videos en YouTube - sin caché de videos locales
   ========================================================= */

const CACHE_NAME = 'aula-virtual-nocturna-cache-v3';

const ARCHIVOS_PARA_CACHE = [
  './',
  './index.html',
  './app.js',
  './identidad.js',
  './contenido.js',
  './manifest.json',
  './img-fondo.png',
  './logo-uni.png',
  './logo-inf.png',
  './icon-192.png',
  './icon-512.png',
];

/* ---------- INSTALACIÓN ---------- */
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return Promise.allSettled(
        ARCHIVOS_PARA_CACHE.map(url =>
          cache.add(url).catch(err => console.warn('No se pudo cachear:', url, err))
        )
      );
    }).then(() => self.skipWaiting())
  );
});

/* ---------- ACTIVACIÓN: limpia cachés antiguas ---------- */
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((nombres) => {
      return Promise.all(
        nombres
          .filter((nombre) => nombre !== CACHE_NAME)
          .map((nombre) => caches.delete(nombre))
      );
    }).then(() => self.clients.claim())
  );
});

/* ---------- INTERCEPCIÓN DE PETICIONES ---------- */
self.addEventListener('fetch', (event) => {
  const url = event.request.url;

  // No interceptar peticiones a YouTube ni externos
  if (url.includes('youtube.com') || url.includes('ytimg.com') ||
      url.includes('googlevideo.com') || !url.startsWith(self.location.origin)) {
    return;
  }

  event.respondWith(
    caches.match(event.request).then((respuestaCache) => {
      if (respuestaCache) {
        return respuestaCache;
      }
      return fetch(event.request).then((respuestaRed) => {
        if (event.request.method === 'GET') {
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, respuestaRed.clone());
          });
        }
        return respuestaRed;
      }).catch(() => {
        return caches.match('./index.html');
      });
    })
  );
});
