function Mostrar()
{
//tomo la edad  
var edad;
edad = document.getElementById('edad').value;
edad = parseInt(edad);

if (edad >= 13 & edad <= 17){
	alert("Es adolecente");

}else if (edad >= 18){
	alert("Es mayor de edad");
}else{
	alert("Es menor de edad");
}



}//FIN DE LA FUNCIÓN