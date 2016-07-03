function Mostrar()
{
//tomo la edad  
var edad;
var estado;
var option;
edad = document.getElementById('edad').value;
edad = parseInt(edad);
estado = document.getElementById('estadoCivil').selectedIndex;
option = document.getElementsByTagName('option')[estado].value;

if (edad < 18 && option != "Soltero"){
	alert("Es muy pequeño para NO ser soltero");
}else{
	
}
}//FIN DE LA FUNCIÓN