/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
	var numUno;
	var numDos;
	var suma;

	numUno = document.getElementById('numeroUno').value;
	numDos = document.getElementById('numeroDos').value;

	suma = parseInt(numUno) + parseInt(numDos);
	alert("La suma es: " + suma);
	

}

