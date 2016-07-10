function Mostrar()
{
//tomo la edad  
var estado;
var option;
edad = document.getElementById('edad').value;
edad = parseInt(edad);
estado = document.getElementById('estadoCivil').value;

if (edad >= 18 && estado == "Soltero"){
	alert("Es soltero y no es menor");
}
	

}//FIN DE LA FUNCIÓN