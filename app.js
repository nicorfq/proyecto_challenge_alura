/*! app.js | Documentación */

/* Documentación
   ========================================================================== */
/* ========================================================================== */

/* Índice
   ========================================================================== */
/**
 * 1. Fecha Dinámica
 * 2. Dark Mode
 * 3. Light Mode
 * 4. Botón Encriptar
 * 5. Botón Desencriptar
 * 6. Botón Tranferir Texto
 * 7. Validación Texto
 * 8. Botón Copiar
 */
/* ======================== */
/* ======================== */

/* 1. Fecha Dinámica.
  ========================================================================== */
const diaHoy     = new Date()
const year       = diaHoy.getFullYear()
const month      = diaHoy.getMonth()
const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

const fechaFooter = document.getElementById('fecha')
fechaFooter.textContent = `${monthNames[month]} - ${year}`
/* ======================== */

/* 2. Dark Mode.
  ========================================================================== */
function darkMode() {
  // Botón
  const iconLightAdd = document.querySelector('#lightMode')
  iconLightAdd.classList.remove('display-none')
  const iconDarkRemove = document.querySelector('#darkMode')
  iconDarkRemove.classList.add('display-none')

  // Añadir background y color Dark
  const logoThemeLightMode = document.querySelector('#logoAluraNormal')
  logoThemeLightMode.classList.add('display-none')
  const logoThemeDarkMode = document.querySelector('#logoAluraDark')
  logoThemeDarkMode.classList.remove('display-none')
  const titleThemeDarkMode = document.querySelector('h1')
  titleThemeDarkMode.classList.add('darkModeTitle')
  const bodyThemeDarkMode = document.querySelector('body')
  bodyThemeDarkMode.classList.add('darkModeBody')
  const textareaThemeDarkMode = document.querySelector('textarea')
  textareaThemeDarkMode.classList.add('darkModeTextarea')

  const removeShadow = document.querySelector('.contenedor__respuesta')
  removeShadow.classList.add('shadow-none')
  const contenedorRespuestaDarkMode = document.querySelector('.contenedor__respuesta')
  contenedorRespuestaDarkMode.classList.add('darkModeRespuesta')

  // Hover Dark
  const buttonHoverEncriptarDark = document.querySelector('#encriptarTexto')
  buttonHoverEncriptarDark.classList.add('darkModeButtonHover')
  const buttonHoverDesencriptarDark = document.querySelector('#desencriptarTexto')
  buttonHoverDesencriptarDark.classList.add('darkModeButtonHover')
} 
/* ======================== */

/* 3. Light Mode.
  ========================================================================== */
function lightMode() {
  // Botón
  const iconLightRemove = document.querySelector('#lightMode')
  iconLightRemove.classList.add('display-none')
  const iconDarkAdd = document.querySelector('#darkMode')
  iconDarkAdd.classList.remove('display-none')

  // Quitar background y color Dark
  const logoThemeLightMode = document.querySelector('#logoAluraNormal')
  logoThemeLightMode.classList.remove('display-none')
  const logoThemeDarkMode = document.querySelector('#logoAluraDark')
  logoThemeDarkMode.classList.add('display-none')
  const bodyThemeLightMode = document.querySelector('body')
  bodyThemeLightMode.classList.remove('darkModeBody')
  const textareaThemeLightMode = document.querySelector('textarea')
  textareaThemeLightMode.classList.remove('darkModeTextarea')
  const titleThemeLightMode = document.querySelector('#lightModeTitulo')
  titleThemeLightMode.classList.remove('darkModeTitle')

  const addShadow = document.querySelector('.contenedor__respuesta')
  addShadow.classList.remove('shadow-none')
  const contenedorRespuestaLightMode = document.querySelector('.contenedor__respuesta')
  contenedorRespuestaLightMode.classList.remove('darkModeRespuesta')

  // Hover Light
  const buttonHoverLightEncriptar = document.querySelector('#encriptarTexto')
  buttonHoverLightEncriptar.classList.remove('darkModeButtonHover')
  const buttonHoverLightDesencriptar = document.querySelector('#desencriptarTexto')
  buttonHoverLightDesencriptar.classList.remove('darkModeButtonHover')
} 
/* ======================== */

/* 4. Botón Encriptar.
  ========================================================================== */
function encriptarTextoUsuario() {
  let agregarE = document.getElementById('textoUsuario').value
  let replacedE = agregarE
    .replace(/[e]/g, "enter")
    .replace(/[i]/g, "imes")
    .replace(/[a]/g, "ai")
    .replace(/[o]/g, "ober")
    .replace(/[u]/g, "ufat")

  transferirTexto(replacedE)
}
/* ======================== */

/* 5. Botón Desencriptar.
  ========================================================================== */
function desencriptarTextoUsuario() {
  let textoUsuarioEncriptado = document.getElementById('textoUsuario').value
  let codeA = textoUsuarioEncriptado
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u")

  transferirTexto(codeA)
}
/* ======================== */

/* 6. Botón Transferir Texto.
  ========================================================================== */
function transferirTexto(texto) {
  // Agregando display-none a segundo contenedor
  let displayBlock = document.getElementById('bloqueResultado')
  displayBlock.classList.add('display-none')
  
  // Creando <p></p>
  const textoEncriptado = document.createElement('P')
  textoEncriptado.setAttribute("id", "textoParaCopiar")
  textoEncriptado.textContent = `${texto}`

  // Agregándolo al DOM
  const contenedorNuevoTexto = document.querySelector('#cuadroRespuesta')
  contenedorNuevoTexto.appendChild(textoEncriptado)
  contenedorNuevoTexto.classList.remove('display-none')

  // Agregando botón copiado
  let botonCopiar = document.getElementById('botonCopiar')
  botonCopiar.classList.remove('display-none')
}
/* ======================== */

/* 7. Validación Texto.
  ========================================================================== */
const inputTextarea = document.querySelector('#textoUsuario')

inputTextarea.addEventListener('keyup', validarTextoUsuario)
inputTextarea.addEventListener('blur', validarTextoUsuario)

function validarTextoUsuario() {
  if (!/^[a-z\s]+$/.test(document.getElementById('textoUsuario').value)) {                      
    desactivarBotones()
  } else {
    document.getElementById('encriptarTexto').removeAttribute('disabled')
    document.getElementById('desencriptarTexto').removeAttribute('disabled')
  }
}

function desactivarBotones() {
  document.getElementById('encriptarTexto').disabled = true
  document.getElementById('desencriptarTexto').disabled = true
}


validarTextoUsuario() // Revisa el campo textarea

/* 8. Botón Copiar.
  ========================================================================== */
function botonCopiar() {
  let copiarMensaje = document.querySelector('#textoParaCopiar')
  navigator.clipboard.writeText(copiarMensaje.textContent)
  alert('Texto copiado')
  borrarTexto()
}

function borrarTexto() {
  const textoResetUsuario = document.getElementById('textoUsuario').value = ''
  const textoResetRespuesta = document.getElementById('textoParaCopiar')
  textoResetRespuesta.remove('p')
}
/* ======================== */

/* 
fenterlimescimesdaidenters poberr enternfrenterntair enterstenter dentersaifimesober 
y haibenterrlober cobernclufatimesdober cobern enterximestober!
*/