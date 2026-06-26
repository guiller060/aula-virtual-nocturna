# Aula Virtual Escuela Nocturna — Guía de instalación

Aula Virtual Escuela Nocturna es la plataforma de aprendizaje de Informática de la Escuela Secundaria Nocturna Oficial de Changuinola. Es una aplicación web progresiva (PWA): esto significa que se puede **instalar como una app real** en el celular o la computadora, y luego **funciona sin internet**, igual que cualquier otra aplicación instalada.

## ⚠️ Importante: por qué no se abre solo con doble clic

Si abres `index.html` haciendo doble clic, la app cargará pero el **modo offline NO funcionará**, porque los navegadores bloquean el Service Worker (la pieza que guarda la app en caché) cuando se abre directamente desde una carpeta (`file://`). Es necesario servir los archivos a través de una dirección `http://` o `https://`, aunque sea local.

A continuación, dos formas sencillas de lograrlo.

---

## Opción 1 — Publicarlo gratis en internet (recomendado, una sola vez)

Esto te da una dirección web fija (ej: `https://aula-virtual-changuinola.netlify.app`) que cualquier estudiante puede visitar UNA vez con internet para instalarla, y después usarla sin conexión.

1. Entra a [https://app.netlify.com/drop](https://app.netlify.com/drop)
2. Arrastra la carpeta **AulaVirtualEscuelaNocturna** completa (no el ZIP, la carpeta descomprimida) a esa página.
3. Netlify te dará un enlace público en segundos.
4. Comparte ese enlace con los estudiantes (por WhatsApp, por ejemplo).
5. Cada estudiante lo abre una vez con internet, y el navegador les ofrecerá el botón **"Instalar"** (o pueden hacerlo manualmente, ver abajo).
6. Desde ese momento, la app queda instalada y funciona sin internet.

No requiere cuenta ni conocimientos técnicos.

## Opción 2 — Probarlo localmente en tu computadora (para revisar antes de publicar)

Si tienes Python instalado (la mayoría de las computadoras con Windows, Mac o Linux ya lo tienen):

1. Abre una terminal dentro de la carpeta `AulaVirtualEscuelaNocturna`.
2. Ejecuta:
   ```
   python -m http.server 8000
   ```
3. Abre tu navegador en: `http://localhost:8000`
4. La app funcionará completa, incluyendo el modo offline.

---

## Cómo instalar la app en el celular (Android)

1. Abre el enlace de Aula Virtual Escuela Nocturna en Google Chrome.
2. Aparecerá un banner azul abajo: **"Instala Aula Virtual Escuela Nocturna en tu dispositivo"** → toca **Instalar**.
3. Si no aparece automáticamente: toca el menú (⋮) de Chrome → **"Añadir a pantalla de inicio"**.
4. El ícono de Aula Virtual Escuela Nocturna aparecerá junto a tus demás apps.

## Cómo instalar la app en una computadora (Windows/Mac)

1. Abre el enlace de Aula Virtual Escuela Nocturna en Google Chrome o Microsoft Edge.
2. Verás un ícono de instalación (⊕ o pantalla con flecha) en la barra de direcciones, a la derecha.
3. Haz clic ahí → **Instalar**.
4. Aula Virtual Escuela Nocturna se abrirá como una ventana propia, igual que cualquier programa instalado.

---

## Sobre los videos de YouTube

Los videos requieren conexión a internet **la primera vez** que se reproducen (YouTube no permite guardar videos para verlos sin conexión). El resto de la app —el contenido de lectura, las preguntas, el progreso— funciona 100% sin internet en todo momento.

Si prefieres que los videos también funcionen sin conexión, una alternativa es descargar los videos como archivo `.mp4` y reemplazar el reproductor de YouTube por un reproductor de video local (puedo ayudarte a hacer ese cambio si lo necesitas).

---

## Cómo agregar tus propios videos

Abre el archivo `contenido.js` y busca, en cada unidad, la línea:
```javascript
videoId: 'dQw4w9WgXcQ',
```
Reemplaza ese texto por el ID del video real de YouTube. El ID es la parte de la URL después de `?v=`. Por ejemplo, en `https://www.youtube.com/watch?v=ABC123XYZ`, el ID es `ABC123XYZ`.

## Cómo editar el contenido teórico

También en `contenido.js`, cada unidad tiene un campo `contenido` con el texto en HTML simple (`<p>`, `<strong>`, `<ul><li>`). Puedes editarlo libremente con tu propio material de clase.

## Sobre los datos de los estudiantes

Los datos (nombre, cédula, progreso) se guardan en el dispositivo donde se usa la app, usando una tecnología llamada `localStorage`. Esto significa:

- No requiere ninguna base de datos externa ni servidor.
- Si varios estudiantes usan el mismo celular o computadora del laboratorio, todos sus registros conviven ahí — cada uno se identifica con su propia cédula.
- Si se borra el caché del navegador o se desinstala la app, esos datos se perderían. Para un uso institucional a largo plazo, sería recomendable evolucionar hacia un backend en la nube (como se describe en el documento de propuesta del proyecto).
