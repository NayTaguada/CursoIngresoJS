function Mostrar()
{

	var contador = 0;
	var negativos;
	var positivos;
	var contPositivo = 0;
	var contNegativo = 0;
	var contCeros = 0;
	var contPares = 0;
	var respuesta="si";
	var diferencia;
	var numero;

	while(respuesta!="no")
	{
		numero = prompt("Ingrese un numero");

			if(numero > 0){

			contPositivo++;

			positivos = parseInt(positivos) + parseInt(numero);

				/*if (numero % 2 == 0){
					contPares++;

				}*/
		
			} else if (numero < 0){

			contNegativo++;

			negativos = parseInt(negativos) + parseInt(numero);

			} else {
				contCeros++;
			}

		respuesta = prompt("Desea seguir ingresando numeros?");
	
	} //Finaliza While

positivos = positivos / contPositivo;
negativos = negativos / contNegativo;
diferencia = positivos - negativos;


//document.write(respuesta);

}//FIN DE LA FUNCIÓN