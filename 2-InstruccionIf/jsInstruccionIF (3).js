function Mostrar()
{
//tomo la edad  
var edad;
edad = document.getElementById('edad').value;
edad = parseInt(edad);

if(edad >= 18){  // Siempre primero el > o < y dps el = 

alert("Es mayor de edad");

}	else if (edad < 18){
	alert("Es menor de edad");
	}	

}//FIN DE LA FUNCIÓN