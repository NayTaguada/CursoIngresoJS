/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var suma;
	var numUno;
	var numDos;

	numUno = document.getElementById('numeroUno').value;
	numDos = document.getElementById('numeroDos').value;

	suma = parseInt(numUno) + parseInt(numDos);
	alert("La suma es: " + suma);
}

function restar()
{
	var resta;
	var numUno;
	var numDos;

	numUno = document.getElementById('numeroUno').value;
	numDos = document.getElementById('numeroDos').value;

	resta = numUno - numDos;
	alert("La resta es: " + resta);
}

function multiplicar()
{ 
	var multip;
	var numUno;
	var numDos;

	numUno = document.getElementById('numeroUno').value;
	numDos = document.getElementById('numeroDos').value;

	multip = parseInt(numUno) * parseInt(numDos);
	alert("La multiplicacion es: " + multip);
}

function dividir()
{
	var divi;
	var numUno;
	var numDos;

	numUno = document.getElementById('numeroUno').value;
	numDos = document.getElementById('numeroDos').value;

	divi = parseInt(numUno) / parseInt(numDos);
	alert("La division es: " + divi);
}

