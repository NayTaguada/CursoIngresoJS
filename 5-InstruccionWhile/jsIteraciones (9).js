function Mostrar()
{

	var contador=0;
	var respuesta='si';
	var numero;
	var numMax = 0;
	var numMin = 0;

	while(respuesta!='no')
	{
		numero = prompt("Ingrese un numero");

			if(numero > numMax){

			numMax = numero;

			} else if (numero < numMax){

			numMin = numero;

			}

		respuesta = prompt("Desea seguir ingresando numeros?");
	
	}

document.getElementById('maximo').value = numMax;
document.getElementById('minimo').value = numMin;


}//FIN DE LA FUNCIÓN