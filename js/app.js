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

  const tweetObj = {
    id: Date.now(),
    // tweet: tweet,
    //Si llave y valor son iguales se puede dejar uno solo.
    tweet,
  }

  //1añadir al arreglo de tweets.
  tweets = [...tweets, tweetObj];

  crearHtml()

  //Reiniciar el textarea.
  formulario.reset();

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

//Crea un listado de los tweets.
function crearHtml() {

  limpiarHtml()
  
  if ( tweets.length > 0) {
    tweets.forEach( tweet => {
      //Crear el html.
      const li = document.createElement('LI')
      li.textContent = tweet.tweet;
      listaTweets.appendChild(li);





    });
  }
}

//limpiar Html.
function limpiarHtml() {
  while ( listaTweets.firstChild ) {
    listaTweets.removeChild(listaTweets.firstChild)
  }
}