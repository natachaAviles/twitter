function agregarTarea() {
  var contetareas = document.getElementbyId('contenedor-tareas');
  var txtarea = document.getElementbyClassName('form-control').value;

  var areatarea = document.createElement('div');
  var check = document.createElement('input');
  check.type = 'checkbox';
  var nodotexto = document.createTextNode('txtarea');
  var parrafo = document.createElement('p');
  var trash = document.createElement('span');
  trash.setAtribute('class','glyphicon glyphicon-trash');
  var heart = document.createElement('span');
  heart.setAtribute('class','glyphicon glyphicon-heart');

  //Aqui se anidan nodos nietos dentro de nodos hijos

  areatarea.appendChild('parrafo');
  areatarea.appendChild('trash');
  areatarea.appendChild('heart');
  contetareas.appendChild('areatarea');
}
agregarTarea();
