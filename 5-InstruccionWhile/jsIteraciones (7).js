function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var otra;

	//respuesta = prompt("Desea ingresar un numero?");
	acumulador = prompt("Ingresa un numero:");

	while(respuesta == "si"){

		contador++;

		respuesta = prompt("Desea ingresar otro numero?");

		if(respuesta == "no"){
			break;
		}
			else {
				otra = prompt("Ingrese un numero:");
				acumulador = parseInt(acumulador) + parseInt(otra);
			}

	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN