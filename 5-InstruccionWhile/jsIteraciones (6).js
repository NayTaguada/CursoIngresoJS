function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero;

	while(contador < 5){

		contador++;

		numero = prompt("Ingrese el numero: " + contador);

		while(isNaN(numero) == true){     		// En los parentesis se pone el valor a comparar, cuando es true, no es un numero. False, si lo es.

			numero = prompt("Ingrese el numero: " + contador);
			//continue;  // Para que al ingresar un correcto numero, siga pidiendo los demas.
		}

		acumulador = acumulador + parseInt(numero);

	}



document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN