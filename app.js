/* =========================================================
   AULA VIRTUAL ESCUELA NOCTURNA v3 - Lógica principal de la aplicación
   Identidad por cédula + contenido extenso + PWA offline
   ========================================================= */

/* ---------- ESTADO GLOBAL DE LA SESIÓN ---------- */
let sesion = {
  cedula: null, nombre: '', anio: 4,
};

let estadoLeccion = {
  leccionActual: null, etapa: 1, lecturaCompleta: false,
  preguntaIdx: 0, vidas: 3, correctas: 0, incorrectas: 0,
  seleccionIdx: null, respondido: false, xpGanadoEnLeccion: 0,
};

let tabLoginActual = 'ingresar';

/* ---------- NAVEGACIÓN ENTRE PANTALLAS ---------- */
function mostrarPantalla(id){
  document.querySelectorAll('.pantalla').forEach(p => p.classList.remove('activa'));
  document.getElementById(id).classList.add('activa');
}

/* =========================================================
   LOGIN / REGISTRO POR CÉDULA
   ========================================================= */
function cambiarTabLogin(tab){
  tabLoginActual = tab;
  document.getElementById('tab-ingresar').classList.toggle('activo', tab === 'ingresar');
  document.getElementById('tab-registrar').classList.toggle('activo', tab === 'registrar');
  document.getElementById('campos-registro').classList.toggle('mostrar', tab === 'registrar');
  document.getElementById('btn-entrar').textContent = tab === 'registrar' ? 'Registrarme' : 'Ingresar';
  ocultarErrorLogin();
}

function mostrarErrorLogin(msg){
  const el = document.getElementById('error-login');
  el.textContent = msg;
  el.classList.add('mostrar');
}
function ocultarErrorLogin(){
  document.getElementById('error-login').classList.remove('mostrar');
}

function procesarLogin(){
  ocultarErrorLogin();
  const cedula = document.getElementById('input-cedula').value.trim();

  if(!cedula){
    mostrarErrorLogin('Por favor ingresa tu número de cédula.');
    return;
  }

  if(tabLoginActual === 'ingresar'){
    // ---- RECONOCER ESTUDIANTE EXISTENTE ----
    const estudiante = buscarEstudiantePorCedula(cedula);
    if(!estudiante){
      mostrarErrorLogin('No encontramos esa cédula. Si es tu primera vez, usa la pestaña "Soy nuevo".');
      return;
    }
    estudiante.ultimoAcceso = new Date().toISOString();
    actualizarRacha(estudiante);
    const base = cargarBaseEstudiantes();
    base[estudiante.cedula] = estudiante;
    guardarBaseEstudiantes(base);

    iniciarSesionCon(estudiante);
    mostrarBienvenida(false);
  } else {
    // ---- REGISTRAR NUEVO ESTUDIANTE ----
    const nombre = document.getElementById('input-nombre').value.trim();
    const anio = document.getElementById('input-anio').value;

    if(!nombre){
      mostrarErrorLogin('Por favor ingresa tu nombre completo.');
      return;
    }

    const existente = buscarEstudiantePorCedula(cedula);
    if(existente){
      mostrarErrorLogin('Esa cédula ya está registrada. Usa la pestaña "Ya tengo cuenta" para ingresar.');
      return;
    }

    const nuevoEstudiante = registrarEstudiante(nombre, cedula, anio);
    iniciarSesionCon(nuevoEstudiante);
    mostrarBienvenida(true);
  }
}

function iniciarSesionCon(estudiante){
  sesion.cedula = estudiante.cedula;
  sesion.nombre = estudiante.nombre;
  sesion.anio = estudiante.anio;
  guardarSesionActiva(estudiante.cedula);
}

/* ---------- PANTALLA DE BIENVENIDA PERSONALIZADA ---------- */
function mostrarBienvenida(esNuevo){
  const estudiante = buscarEstudiantePorCedula(sesion.cedula);
  const nombrePila = sesion.nombre.split(' ')[0];

  document.getElementById('bienvenida-titulo').textContent = esNuevo
    ? `¡Bienvenido, ${nombrePila}!`
    : `Hola, ${sesion.nombre}`;

  document.getElementById('bienvenida-sub').textContent = esNuevo
    ? `Tu cuenta fue creada con éxito. Estás cursando ${sesion.anio}to año. ¡Empecemos!`
    : obtenerMensajeMotivacional(estudiante);

  mostrarPantalla('pantalla-bienvenida');
}

function irAlMapa(){
  renderMapa();
  mostrarPantalla('pantalla-mapa');
}

function cerrarSesionUsuario(){
  cerrarSesionActiva();
  sesion = { cedula: null, nombre: '', anio: 4 };
  document.getElementById('input-cedula').value = '';
  document.getElementById('input-nombre').value = '';
  cambiarTabLogin('ingresar');
  mostrarPantalla('pantalla-login');
}

/* =========================================================
   MAPA DE LECCIONES
   ========================================================= */
function renderMapa(){
  const estudiante = buscarEstudiantePorCedula(sesion.cedula);
  if(!estudiante) { cerrarSesionUsuario(); return; }

  const nombrePila = estudiante.nombre.split(' ')[0];
  document.getElementById('saludo-nombre').textContent = `Hola, ${nombrePila} 👋`;
  document.getElementById('saludo-msg').textContent = obtenerMensajeMotivacional(estudiante);

  document.getElementById('mapa-anio-label').textContent = estudiante.anio + 'to año';
  document.getElementById('mapa-xp').textContent = estudiante.xpTotal;
  document.getElementById('mapa-racha').textContent = estudiante.racha;
  document.getElementById('mapa-avance-fill').style.width = calcularPorcentajeAvance(estudiante) + '%';

  const lista = document.getElementById('lista-unidades');
  lista.innerHTML = '';
  const unidades = BANCO_LECCIONES[estudiante.anio];

  unidades.forEach((u, idx) => {
    const completa = estudiante.unidadesCompletas.includes(u.id);
    const bloqueada = idx > 0 && !estudiante.unidadesCompletas.includes(unidades[idx-1].id);

    const card = document.createElement('div');
    card.className = 'unidad-card' + (completa ? ' completa' : '') + (bloqueada ? ' bloqueada' : '');
    card.innerHTML = `
      <div class="unidad-icono">${completa ? '✓' : (idx+1)}</div>
      <div class="unidad-info">
        <div class="unidad-titulo">${u.titulo}</div>
        <div class="unidad-desc">${u.desc} · Leer → Video → ${u.preguntas.length} preguntas</div>
      </div>
      ${completa ? '<span class="unidad-check">✓</span>' : ''}
    `;
    if(!bloqueada){
      card.onclick = () => iniciarLeccion(u);
    }
    lista.appendChild(card);
  });
}

/* =========================================================
   FLUJO DE LECCIÓN: Leer -> Video -> Practicar
   ========================================================= */
function iniciarLeccion(unidad){
  estadoLeccion = {
    leccionActual: unidad, etapa: 1, lecturaCompleta: false,
    preguntaIdx: 0, vidas: 3, correctas: 0, incorrectas: 0,
    seleccionIdx: null, respondido: false, xpGanadoEnLeccion: 0,
  };
  document.getElementById('leccion-titulo-top').textContent = unidad.titulo;
  renderEtapa();
  mostrarPantalla('pantalla-leccion');
}

function salirLeccion(){ mostrarPantalla('pantalla-mapa'); }

function renderEtapa(){
  actualizarIndicadorPasos();
  document.getElementById('leccion-vidas').textContent = estadoLeccion.vidas;
  document.getElementById('leccion-xp').textContent = estadoLeccion.xpGanadoEnLeccion;

  if(estadoLeccion.etapa === 1) renderEtapaLectura();
  else if(estadoLeccion.etapa === 2) renderEtapaVideo();
  else renderPregunta();
}

function actualizarIndicadorPasos(){
  for(let i=1; i<=3; i++){
    const circulo = document.getElementById('circulo-'+i);
    const label = document.getElementById('label-'+i);
    circulo.className = 'paso-circulo';
    label.classList.remove('activo-label');
    if(i < estadoLeccion.etapa){ circulo.classList.add('hecho'); circulo.textContent = '✓'; }
    else if(i === estadoLeccion.etapa){ circulo.classList.add('activo'); circulo.textContent = i; label.classList.add('activo-label'); }
    else { circulo.textContent = i; }
  }
  document.getElementById('linea-1').className = 'paso-linea' + (estadoLeccion.etapa > 1 ? ' hecho' : '');
  document.getElementById('linea-2').className = 'paso-linea' + (estadoLeccion.etapa > 2 ? ' hecho' : '');
  document.getElementById('leccion-barra').style.width = (((estadoLeccion.etapa - 1) / 3) * 100) + '%';
}

/* ---------- ETAPA 1: LEER (con bloqueo por scroll) ---------- */
function renderEtapaLectura(){
  const leccion = estadoLeccion.leccionActual;
  const cuerpo = document.getElementById('leccion-cuerpo');
  cuerpo.innerHTML = `
    <div class="lectura-titulo">📖 ${leccion.titulo}</div>
    <div class="lectura-scroll" id="caja-lectura">
      ${leccion.contenido}
      <div class="lectura-fin-marcador" id="marcador-fin">— Fin del contenido —</div>
    </div>
    <div class="barra-lectura-track"><div class="barra-lectura-fill" id="barra-lectura"></div></div>
    <div class="aviso-scroll" id="aviso-lectura">⬇️ Desplázate hacia abajo para leer todo el contenido</div>
  `;
  const btnAccion = document.getElementById('btn-accion');
  btnAccion.textContent = 'Leer contenido completo';
  btnAccion.disabled = true;
  btnAccion.className = 'btn-principal';
  btnAccion.onclick = null;

  const caja = document.getElementById('caja-lectura');
  caja.addEventListener('scroll', onScrollLectura);
  setTimeout(() => onScrollLectura({ target: caja }), 100);
}

function onScrollLectura(e){
  const el = e.target;
  const scrollMax = el.scrollHeight - el.clientHeight;
  const pct = scrollMax <= 0 ? 100 : Math.min(100, Math.round((el.scrollTop / scrollMax) * 100));
  const barra = document.getElementById('barra-lectura');
  if(barra) barra.style.width = pct + '%';

  if(pct >= 97 && !estadoLeccion.lecturaCompleta){
    estadoLeccion.lecturaCompleta = true;
    const aviso = document.getElementById('aviso-lectura');
    if(aviso){ aviso.textContent = '✓ Contenido leído por completo. ¡Ya puedes continuar!'; aviso.classList.add('completo'); }
    const btnAccion = document.getElementById('btn-accion');
    btnAccion.disabled = false;
    btnAccion.textContent = 'Continuar al video →';
    btnAccion.className = 'btn-principal continuar';
    btnAccion.onclick = () => { estadoLeccion.etapa = 2; renderEtapa(); };
  }
}

/* ---------- ETAPA 2: VIDEO LOCAL ---------- */
function renderEtapaVideo(){
  const leccion = estadoLeccion.leccionActual;
  const cuerpo = document.getElementById('leccion-cuerpo');

  cuerpo.innerHTML = `
    <div class="video-titulo">🎬 ${leccion.videoTitulo || 'Video explicativo'}</div>
    <div class="video-wrapper">
      <video controls controlsList="nodownload" style="width:100%;height:100%;border-radius:8px;background:#000;">
        <source src="${leccion.videoSrc}" type="video/mp4">
        Tu navegador no soporta la reproducción de video.
      </video>
    </div>
    <p class="video-nota">Mira el video completo para reforzar lo aprendido en la lectura. Cuando estés listo, continúa a la práctica.</p>
  `;
  const btnAccion = document.getElementById('btn-accion');
  btnAccion.textContent = 'Continuar a la práctica →';
  btnAccion.disabled = false;
  btnAccion.className = 'btn-principal continuar';
  btnAccion.onclick = () => { estadoLeccion.etapa = 3; estadoLeccion.preguntaIdx = 0; renderEtapa(); };
}

/* ---------- ETAPA 3: PRACTICAR (verde / rojo) ---------- */
function renderPregunta(){
  estadoLeccion.respondido = false;
  estadoLeccion.seleccionIdx = null;
  const leccion = estadoLeccion.leccionActual;
  const p = leccion.preguntas[estadoLeccion.preguntaIdx];
  const cuerpo = document.getElementById('leccion-cuerpo');

  cuerpo.innerHTML = `
    <div class="pregunta-texto">${(estadoLeccion.preguntaIdx+1)}. ${p.q}</div>
    <div id="contenedor-opciones"></div>
    <div class="retroalimentacion" id="caja-retroalimentacion"></div>
  `;

  const pctPractica = Math.round((estadoLeccion.preguntaIdx / leccion.preguntas.length) * 100);
  const pctGeneralBase = (2/3) * 100;
  document.getElementById('leccion-barra').style.width = (pctGeneralBase + (pctPractica/3)) + '%';

  const cont = document.getElementById('contenedor-opciones');
  p.opciones.forEach((op, i) => {
    const btn = document.createElement('button');
    btn.className = 'opcion'; btn.textContent = op;
    btn.onclick = () => seleccionarOpcion(i, btn);
    cont.appendChild(btn);
  });

  const btnAccion = document.getElementById('btn-accion');
  btnAccion.disabled = true; btnAccion.textContent = 'Comprobar'; btnAccion.className = 'btn-principal';
  btnAccion.onclick = comprobarRespuesta;
}

function seleccionarOpcion(i, btn){
  if(estadoLeccion.respondido) return;
  document.querySelectorAll('.opcion').forEach(b => b.classList.remove('seleccionada'));
  btn.classList.add('seleccionada');
  estadoLeccion.seleccionIdx = i;
  document.getElementById('btn-accion').disabled = false;
}

function comprobarRespuesta(){
  if(estadoLeccion.seleccionIdx === null) return;
  estadoLeccion.respondido = true;
  const leccion = estadoLeccion.leccionActual;
  const p = leccion.preguntas[estadoLeccion.preguntaIdx];
  const botones = document.querySelectorAll('.opcion');
  botones.forEach(b => b.classList.add('bloqueada'));
  const fb = document.getElementById('caja-retroalimentacion');

  if(estadoLeccion.seleccionIdx === p.correcta){
    botones[estadoLeccion.seleccionIdx].classList.add('correcta');
    botones[estadoLeccion.seleccionIdx].innerHTML += '<span class="marca">✓</span>';
    estadoLeccion.xpGanadoEnLeccion += 10;
    estadoLeccion.correctas++;
    fb.className = 'retroalimentacion mostrar correcta-fb';
    fb.innerHTML = '<b>¡Correcto! +10 XP</b>' + p.exp;
  } else {
    botones[estadoLeccion.seleccionIdx].classList.add('incorrecta');
    botones[estadoLeccion.seleccionIdx].innerHTML += '<span class="marca">✕</span>';
    botones[p.correcta].classList.add('correcta');
    botones[p.correcta].innerHTML += '<span class="marca">✓</span>';
    estadoLeccion.vidas--;
    estadoLeccion.incorrectas++;
    fb.className = 'retroalimentacion mostrar incorrecta-fb';
    fb.innerHTML = '<b>Incorrecto</b>' + p.exp;
  }

  document.getElementById('leccion-xp').textContent = estadoLeccion.xpGanadoEnLeccion;
  document.getElementById('leccion-vidas').textContent = Math.max(estadoLeccion.vidas, 0);

  const btnAccion = document.getElementById('btn-accion');
  const esUltima = estadoLeccion.preguntaIdx >= leccion.preguntas.length - 1;
  btnAccion.textContent = (esUltima || estadoLeccion.vidas <= 0) ? 'Ver resultado' : 'Continuar';
  btnAccion.className = 'btn-principal continuar';
  btnAccion.onclick = avanzarPregunta;
}

function avanzarPregunta(){
  estadoLeccion.preguntaIdx++;
  const leccion = estadoLeccion.leccionActual;
  if(estadoLeccion.vidas <= 0 || estadoLeccion.preguntaIdx >= leccion.preguntas.length){
    mostrarResultado();
  } else {
    renderPregunta();
  }
}

/* ---------- RESULTADO + GUARDADO PERSISTENTE DEL PROGRESO ---------- */
function mostrarResultado(){
  const leccion = estadoLeccion.leccionActual;
  const totalRespondidas = estadoLeccion.correctas + estadoLeccion.incorrectas;
  const pct = totalRespondidas > 0 ? Math.round((estadoLeccion.correctas / totalRespondidas) * 100) : 0;
  const aprobo = estadoLeccion.vidas > 0;

  document.getElementById('resultado-pct').textContent = pct + '%';
  document.getElementById('resultado-correctas').textContent = estadoLeccion.correctas;
  document.getElementById('resultado-incorrectas').textContent = estadoLeccion.incorrectas;
  document.getElementById('resultado-xp').textContent = estadoLeccion.xpGanadoEnLeccion;

  const card = document.getElementById('resultado-card');
  const icono = document.querySelector('.resultado-icono');
  const label = document.getElementById('resultado-label');

  if(aprobo){
    card.className = 'resultado-card';
    icono.textContent = '🏆';
    // ---- GUARDADO PERSISTENTE: queda asociado a la cédula del estudiante ----
    guardarProgresoLeccion(sesion.cedula, leccion.id, estadoLeccion.correctas, estadoLeccion.incorrectas, estadoLeccion.xpGanadoEnLeccion);
    const estudianteActualizado = buscarEstudiantePorCedula(sesion.cedula);
    label.textContent = obtenerMensajeMotivacional(estudianteActualizado);
  } else {
    card.className = 'resultado-card game-over';
    icono.textContent = '💔';
    label.textContent = 'Te quedaste sin vidas. ¡Inténtalo de nuevo!';
  }

  mostrarPantalla('pantalla-resultado');
}

function volverAlMapa(){
  renderMapa();
  mostrarPantalla('pantalla-mapa');
}

/* =========================================================
   PANEL DOCENTE — lista de todos los estudiantes registrados
   en este dispositivo, con su avance individual.
   ========================================================= */
function abrirPanelDocente(){
  renderPanelDocente();
  mostrarPantalla('pantalla-docente');
}

function renderPanelDocente(){
  const estudiantes = listarTodosLosEstudiantes();
  const lista = document.getElementById('docente-lista');

  if(estudiantes.length === 0){
    lista.innerHTML = '<div class="docente-vacio">Aún no hay estudiantes registrados en este dispositivo.</div>';
    return;
  }

  lista.innerHTML = estudiantes.map(est => {
    const pct = calcularPorcentajeAvance(est);
    const totalPreguntas = est.historial.reduce((acc, h) => acc + h.correctas + h.incorrectas, 0);
    const totalCorrectas = est.historial.reduce((acc, h) => acc + h.correctas, 0);
    const precision = totalPreguntas > 0 ? Math.round((totalCorrectas / totalPreguntas) * 100) : 0;
    return `
      <div class="docente-fila">
        <div class="docente-fila-top">
          <div>
            <div class="docente-nombre">${est.nombre}</div>
            <div class="docente-cedula">Cédula: ${est.cedula}</div>
          </div>
          <span class="docente-anio-badge">${est.anio}to año</span>
        </div>
        <div class="docente-barra-track"><div class="docente-barra-fill" style="width:${pct}%"></div></div>
        <div class="docente-fila-meta">
          <span>${pct}% completado · ${est.unidadesCompletas.length} unidades</span>
          <span>⚡ ${est.xpTotal} XP · 🎯 ${precision}% precisión</span>
        </div>
      </div>
    `;
  }).join('');
}

/* =========================================================
   PWA: instalación y detección de conexión
   ========================================================= */
let eventoInstalacionDiferido = null;

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  eventoInstalacionDiferido = e;
  document.getElementById('banner-instalar').classList.add('mostrar');
});

function instalarApp(){
  if(!eventoInstalacionDiferido) return;
  eventoInstalacionDiferido.prompt();
  eventoInstalacionDiferido.userChoice.then(() => {
    eventoInstalacionDiferido = null;
    document.getElementById('banner-instalar').classList.remove('mostrar');
  });
}

function actualizarBannerConexion(){
  document.getElementById('banner-offline').classList.toggle('mostrar', !navigator.onLine);
}
window.addEventListener('online', actualizarBannerConexion);
window.addEventListener('offline', actualizarBannerConexion);

/* ---------- Registro del Service Worker (modo offline) ---------- */
if('serviceWorker' in navigator){
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch(err => {
      console.warn('No se pudo registrar el Service Worker:', err);
    });
  });
}

/* =========================================================
   INICIALIZACIÓN: si hay una sesión activa guardada,
   reconoce automáticamente al estudiante al abrir la app.
   ========================================================= */
(function inicializar(){
  actualizarBannerConexion();
  const cedulaActiva = obtenerSesionActiva();
  if(cedulaActiva){
    const estudiante = buscarEstudiantePorCedula(cedulaActiva);
    if(estudiante){
      iniciarSesionCon(estudiante);
      renderMapa();
      mostrarPantalla('pantalla-mapa');
    }
  }
})();