function Mostrar()
{

var sexo = prompt("ingrese f ó m .");

	if(sexo == "f" || sexo == "m"){
			alert("Su sexo es: " + sexo);
		} else {

	while(sexo != "f" || sexo != "m"){

		sexo = prompt("Ingrese nuevamente el sexo, f o m");

		if(sexo == "f" || sexo == "m"){
			alert("Su sexo es: " + sexo);
			break;
		} 
		
	}

}

document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN