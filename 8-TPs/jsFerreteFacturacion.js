/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/


function Sumar () 
{
	var numUno = document.getElementById('PrecioUno').value;
	var numDos = document.getElementById('PrecioDos').value;
	var numTres = document.getElementById('PrecioTres').value;
	var suma = parseInt(numUno) + parseInt(numDos) + parseInt(numTres);

	alert("La suma de los tres precios es: " + suma);

}

function Promedio () 
{
	var numUno = document.getElementById('PrecioUno').value;
	var numDos = document.getElementById('PrecioDos').value;
	var numTres = document.getElementById('PrecioTres').value;
	var suma = parseInt(numUno) + parseInt(numDos) + parseInt(numTres);
	var promedio = suma/3;

	alert("El promedio es: " + promedio); 

}

function PrecioFinal () 
{
	var numUno = document.getElementById('PrecioUno').value;
	var numDos = document.getElementById('PrecioDos').value;
	var numTres = document.getElementById('PrecioTres').value;
	var suma = parseInt(numUno) + parseInt(numDos) + parseInt(numTres);
	var precioFinal = suma + suma * 0.21;

	alert("El precio final, incluyendo el IVA es: " + precioFinal);
}
