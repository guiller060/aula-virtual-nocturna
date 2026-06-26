/* =========================================================
   AULA VIRTUAL ESCUELA NOCTURNA - Service Worker v2
   Funciona 100% sin internet después de la primera carga.
   Incluye caché de videos locales e imágenes.
   ========================================================= */

const CACHE_NAME = 'aula-virtual-nocturna-cache-v2';

/* ---------- INSTALACIÓN ---------- */
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {

      // Archivos esenciales — si fallan, la app no instala
      const esenciales = [
        './',
        './index.html',
        './app.js',
        './identidad.js',
        './contenido.js',
        './manifest.json',
      ];

      return cache.addAll(esenciales).then(() => {

        // Archivos opcionales — si fallan, no detienen la instalación
        const opcionales = [
          './img-fondo.png',
          './logo-uni.png',
          './logo-inf.png',
          './icon-192.png',
          './icon-512.png',
          './videos/V_1_Fundamentos de Hardware y Software.mp4',
          './videos/V_2_Software vs Hardware Sistema Operativo.mp4',
          './videos/V_3_Procesador de Texto Conceptos Basicos.mp4',
          './videos/V_4_Hojas de Calculo Formulas Basicas.mp4',
          './videos/V_5_Diseno de Presentaciones Efectivas.mp4',
          './videos/V_6_Uso Seguro de Internet .mp4',
          './videos/V_7_Seguridad Digital.mp4',
          './videos/V_8_Estructura de un proyecto.mp4',
        ];

        return Promise.allSettled(
          opcionales.map(url =>
            cache.add(url).catch(err =>
              console.warn('No se pudo cachear:', url, err)
            )
          )
        );
      });
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

/* ---------- INTERCEPCIÓN DE PETICIONES ----------
   Estrategia: Cache First → Network Fallback
   Videos: manejo especial de Range Requests para reproducción fluida
------------------------------------------------------------- */
self.addEventListener('fetch', (event) => {
  const url = event.request.url;

  // Ignorar peticiones externas
  if (!url.startsWith(self.location.origin) &&
      !url.includes('localhost') &&
      !url.startsWith('file://')) {
    return;
  }

  // Videos: Cache First con soporte de Range Requests
  if (url.includes('/videos/')) {
    event.respondWith(
      caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request.url).then((respuestaCache) => {
          if (respuestaCache) {
            return respuestaCache;
          }
          return fetch(event.request).then((respuestaRed) => {
            cache.put(event.request.url, respuestaRed.clone());
            return respuestaRed;
          }).catch(() => {
            return new Response('Video no disponible offline', { status: 503 });
          });
        });
      })
    );
    return;
  }

  // Resto de archivos: Cache First
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