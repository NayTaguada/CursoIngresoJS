/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/
var respuesta;
var numUno;
var numDos;
var operacionBasica;
var resultado;

function comenzar()
{
	numUno = Math.floor((Math.random() * 10) + 1);
	numDos = Math.floor((Math.random() * 10) + 1);

	document.getElementById('PrimerNumero').value = numUno;
	document.getElementById('SegundoNumero').value = numDos;

	operacionBasica = Math.floor((Math.random()* 4) + 1);

	switch(operacionBasica){

		case 1: 

		respuesta = parseInt(numUno) + parseInt(numDos);
		document.getElementById('Operador').value = "Sumado";
		break;

		case 2: 

		respuesta = parseInt(numUno) - parseInt(numDos);
		document.getElementById('Operador').value = "Restado";
		break;

		case 3:
		
		respuesta = parseInt(numUno) * parseInt(numDos);
		document.getElementById('Operador').value = "Multiplicado";
		break;

		case 4:

		respuesta = parseInt(numUno) / parseInt(numDos);
		document.getElementById('Operador').value = "Dividido";
		break;
	} // Finaliza switch

}//FIN DE LA FUNCIÓN
function Responder()
{
	resultado = document.getElementById('Respuesta').value;

	if(resultado == respuesta){
		alert("Correcto!");
	}
	else {
		alert("Incorrecto");
	}

}//FIN DE LA FUNCIÓN
