function agregarTarea() {
  var contenedortareas = document.getElementById('contenedor-tareas');
  var valorinput = document.getElementsByClassName('form-control')[0].value;
  document.getElementsByClassName('form-control')[0].value = "";

  if (valorinput == null || valorinput == 0){
      alert('No puede ingresar tarea vacía');
      return false;
  }

  var nodoTexto = document.createTextNode(valorinput);

  var contenedorTodo = document.createElement('div');
  var check = document.createElement('input');
  var parrafo = document.createElement('p');
  var itrash = document.createElement('i');
  var heart = document.createElement('i');

  //se le agregan clases 
  contenedorTodo.setAttribute('class','row');
  check.setAttribute('class','col-xs-2');
  check.setAttribute('type','checkbox');
  check.setAttribute('value',"");
  parrafo.setAttribute('class','col-xs-6');
  itrash.setAttribute('class','fa fa-trash-o col-xs-2');
  heart.setAttribute('class','fa fa-heart col-xs-2');
  heart.setAttribute('aria-hidden','true');

  //se agregan padres 
  parrafo.appendChild(nodoTexto);
  contenedorTodo.appendChild(check);
  contenedorTodo.appendChild(parrafo);
  contenedorTodo.appendChild(itrash);
  contenedorTodo.appendChild(heart);

  contenedortareas.appendChild(contenedorTodo);

  check.addEventListener('click', tachado);
  itrash.addEventListener('click', eliminartarea);
  heart.addEventListener('click', liked);

  function tachado(){
    parrafo.classList.toggle('crossout');
  }
  function eliminartarea(){
    contenedortareas.removeChild(contenedorTodo);
  }
  function liked(){
    heart.classList.toggle('liked');
  }


}

  

