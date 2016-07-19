function Mostrar()
{

var contador=0;
var positivo=0;
var negativo=0;
var numero;	
var respuesta='si';

acumulador = prompt("Ingresa un numero:");

	while(respuesta == "si"){

		contador++;

		if(acumulador >=0){

			positivo = parseInt(positivo) + parseInt(acumulador);
		

		} else if (acumulador < 0){

			negativo = parseInt(positivo) * parseInt(acumulador);
		}


		respuesta = prompt("Desea ingresar otro numero?");

		if(respuesta == "no"){
			break;
		}
			else {
				acumulador = prompt("Ingrese un numero:");
				continue;
			}

	}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN