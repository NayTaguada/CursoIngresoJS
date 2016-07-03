function Mostrar()
{
//tomo la edad  
var estado;
var option;
edad = document.getElementById('edad').value;
edad = parseInt(edad);
estado = document.getElementById('estadoCivil').selectedIndex;
option = document.getElementsByTagName('option')[estado].value;

if (edad >= 18 && option == "Soltero"){
	alert("Es soltero y no es menor");
}else{

}
	


}//FIN DE LA FUNCIÓN