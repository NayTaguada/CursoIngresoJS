function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero;

	while(contador < 5){

		contador++;

		numero = prompt("Ingrese el numero: " + contador);

		acumulador = acumulador + parseInt(numero);

	}



document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN