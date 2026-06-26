/* =========================================================
   AULA VIRTUAL ESCUELA NOCTURNA - Sistema de identidad y seguimiento de aprendizaje
   Cada estudiante se identifica de forma única por su CÉDULA.
   Todo se guarda en localStorage para funcionar SIN INTERNET.
   ========================================================= */

const LS_KEY_ESTUDIANTES = 'aula_virtual_estudiantes';

/* ----------------------------------------------------------
   Estructura de datos guardada por estudiante (ejemplo):
   {
     "8-123-4567": {
        cedula: "8-123-4567",
        nombre: "Alfredo Bailey",
        anio: 5,
        fechaRegistro: "2026-06-20T10:00:00.000Z",
        ultimoAcceso: "2026-06-21T19:30:00.000Z",
        xpTotal: 120,
        racha: 3,
        ultimaFechaUso: "2026-06-21",  // para calcular la racha
        unidadesCompletas: ["u1","u2"],
        historial: [
          { unidadId: "u1", fecha: "...", correctas: 4, incorrectas: 1, xpGanado: 40 }
        ]
     },
     "8-987-6543": { ... }
   }
---------------------------------------------------------- */

/* ---------- Utilidades de almacenamiento ---------- */
function cargarBaseEstudiantes(){
  try {
    const raw = localStorage.getItem(LS_KEY_ESTUDIANTES);
    return raw ? JSON.parse(raw) : {};
  } catch(e){
    console.error('Error al leer la base de estudiantes:', e);
    return {};
  }
}

function guardarBaseEstudiantes(base){
  try {
    localStorage.setItem(LS_KEY_ESTUDIANTES, JSON.stringify(base));
    return true;
  } catch(e){
    console.error('Error al guardar la base de estudiantes:', e);
    return false;
  }
}

/* ---------- Normalización de cédula ----------
   Acepta formatos con o sin guiones (8-123-4567 u 8123-4567)
   y los normaliza para usarlos como llave única (ID).
------------------------------------------------- */
function normalizarCedula(cedula){
  return cedula.trim().toUpperCase().replace(/\s+/g, '');
}

/* ---------- Buscar estudiante por cédula ---------- */
function buscarEstudiantePorCedula(cedula){
  const base = cargarBaseEstudiantes();
  const id = normalizarCedula(cedula);
  return base[id] || null;
}

/* ---------- Registrar un estudiante nuevo ---------- */
function registrarEstudiante(nombre, cedula, anio){
  const base = cargarBaseEstudiantes();
  const id = normalizarCedula(cedula);

  if(base[id]){
    // Ya existe: no lo sobrescribimos, solo actualizamos último acceso
    base[id].ultimoAcceso = new Date().toISOString();
    guardarBaseEstudiantes(base);
    return base[id];
  }

  const nuevoEstudiante = {
    cedula: id,
    nombre: nombre.trim(),
    anio: parseInt(anio),
    fechaRegistro: new Date().toISOString(),
    ultimoAcceso: new Date().toISOString(),
    xpTotal: 0,
    racha: 1,
    ultimaFechaUso: fechaHoy(),
    unidadesCompletas: [],
    historial: [],
  };

  base[id] = nuevoEstudiante;
  guardarBaseEstudiantes(base);
  return nuevoEstudiante;
}

/* ---------- Fecha actual en formato YYYY-MM-DD (para racha) ---------- */
function fechaHoy(){
  const d = new Date();
  return d.toISOString().split('T')[0];
}

/* ---------- Actualizar racha de días consecutivos ---------- */
function actualizarRacha(estudiante){
  const hoy = fechaHoy();
  const ultimaFecha = estudiante.ultimaFechaUso;

  if(ultimaFecha === hoy){
    // Ya usó la app hoy, no cambia la racha
    return estudiante.racha;
  }

  const ayer = new Date();
  ayer.setDate(ayer.getDate() - 1);
  const ayerStr = ayer.toISOString().split('T')[0];

  if(ultimaFecha === ayerStr){
    // Usó la app ayer: la racha continúa
    estudiante.racha += 1;
  } else {
    // Pasó más de un día: la racha se reinicia
    estudiante.racha = 1;
  }

  estudiante.ultimaFechaUso = hoy;
  return estudiante.racha;
}

/* ---------- Guardar el progreso de una lección completada ---------- */
function guardarProgresoLeccion(cedula, unidadId, correctas, incorrectas, xpGanado){
  const base = cargarBaseEstudiantes();
  const id = normalizarCedula(cedula);
  const estudiante = base[id];
  if(!estudiante) return null;

  estudiante.xpTotal += xpGanado;
  estudiante.ultimoAcceso = new Date().toISOString();
  actualizarRacha(estudiante);

  if(!estudiante.unidadesCompletas.includes(unidadId)){
    estudiante.unidadesCompletas.push(unidadId);
  }

  estudiante.historial.push({
    unidadId, fecha: new Date().toISOString(), correctas, incorrectas, xpGanado
  });

  base[id] = estudiante;
  guardarBaseEstudiantes(base);
  return estudiante;
}

/* ---------- Obtener lista de todos los estudiantes (para el panel docente) ---------- */
function listarTodosLosEstudiantes(){
  const base = cargarBaseEstudiantes();
  return Object.values(base).sort((a, b) => b.xpTotal - a.xpTotal);
}

/* ---------- Calcular porcentaje de avance de un estudiante ---------- */
function calcularPorcentajeAvance(estudiante){
  const totalUnidadesDelAnio = (typeof BANCO_LECCIONES !== 'undefined' && BANCO_LECCIONES[estudiante.anio])
    ? BANCO_LECCIONES[estudiante.anio].length : 1;
  return Math.round((estudiante.unidadesCompletas.length / totalUnidadesDelAnio) * 100);
}

/* ---------- Frases motivacionales dinámicas según el avance ---------- */
function obtenerMensajeMotivacional(estudiante){
  const pct = calcularPorcentajeAvance(estudiante);
  const nombrePila = estudiante.nombre.split(' ')[0];

  if(pct === 0){
    return `¡Bienvenido, ${nombrePila}! Hoy es un gran día para comenzar.`;
  } else if(pct < 30){
    return `¡Vas muy bien, ${nombrePila}! Sigue así.`;
  } else if(pct < 70){
    return `¡Lo estás logrando, ${nombrePila}! Ya llevas más de la mitad del camino.`;
  } else if(pct < 100){
    return `¡Casi lo tienes, ${nombrePila}! Ya falta poco para terminar.`;
  } else {
    return `¡Felicidades, ${nombrePila}! Completaste todo tu año. 🎉`;
  }
}

/* ---------- Sesión activa (quién está usando la app ahora mismo) ---------- */
const LS_KEY_SESION = 'aula_virtual_sesion_activa';

function guardarSesionActiva(cedula){
  localStorage.setItem(LS_KEY_SESION, normalizarCedula(cedula));
}

function obtenerSesionActiva(){
  return localStorage.getItem(LS_KEY_SESION);
}

function cerrarSesionActiva(){
  localStorage.removeItem(LS_KEY_SESION);
}
