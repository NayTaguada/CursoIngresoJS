function Mostrar()
{
//tomo la edad  

var edad;
edad = document.getElementById('edad').value;
edad = parseInt(edad);

if(edad == 15) {		// doble == para comparar, = para asignar
	alert("Niña bonita");
}

}//FIN DE LA FUNCIÓN