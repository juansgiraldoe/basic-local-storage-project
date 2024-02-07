//Variables.
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');

let tweets = []






//eventlisteners.
eventListeners();
function eventListeners() {
  formulario.addEventListener('submit', agregarTweet)
}





//Funciones.

function agregarTweet(e) {
  e.preventDefault();

  //Textarea donde el usuario escribe.
  const tweet = document.querySelector('#tweet').value;

  //Validación.
  if ( tweet.trim() === '' ) {
    mostrarError('Tu tweet no puede ir vacio. Escribe algo.');
    return; //Evita que se ejecuten mas lineas de codigo.
  }

  console.log(tweet);

}

//Crear y mostrar el mensaje de error.
function mostrarError(mensaje){
  const mensajeError = document.createElement('P');
  mensajeError.textContent = mensaje;
  mensajeError.classList.add('error');

  const contenido = document.querySelector('#contenido')
  contenido.appendChild(mensajeError)
  
  //Elimina la alerta dspues de 3 segundos.
  setTimeout(() => {
    mensajeError.remove();
  }, 2000);
}