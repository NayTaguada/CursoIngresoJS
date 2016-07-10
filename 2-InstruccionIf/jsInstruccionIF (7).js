function Mostrar()
{
//tomo la edad  
var edad;
var estado;
var option;
edad = document.getElementById('edad').value;
edad = parseInt(edad);
estado = document.getElementById('estadoCivil').value;

	if (edad < 18 && estado != "Soltero"){
	alert("Es muy pequeño para NO ser soltero");
	}

}//FIN DE LA FUNCIÓN