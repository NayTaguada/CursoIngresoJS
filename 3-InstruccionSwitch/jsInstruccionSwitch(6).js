function Mostrar()
{
//tomo la edad  
var laHora = document.getElementById('hora').value;

switch (true){

	case laHora >= 7 && laHora < 12:
	alert("Es de mañana");
	break;

	case laHora >= 12 && laHora < 20:
	alert("Es de tarde");
	break;

	case laHora >= 20 && laHora < 25:
	case laHora >= 0 && laHora < 7:
	alert ("Es de noche");
	break;

	default:
	alert("La hora no existe");
}


}//FIN DE LA FUNCIÓN