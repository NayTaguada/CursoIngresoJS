function Mostrar()
{
/*tomo la edad  
var mesDelAño = document.getElementById('mes').value;
alert (mesDelAño);*/

var mes = document.getElementById('mes').value;
//var option = document.getElementsByTagName('option')[mes].value;  

switch(mes){

	case "Febrero":
	alert("Tiene 28 dias");
	break;

	case "Enero":
	case "Marzo": 		// Para los casos que tienen el mismo resultado
	case "Mayo":
	case "Julio":
	case "Agosto":
	case "Octubre":
	case "Diciembre":
	alert("Tiene 31 dias");
	break; 				// Para terminar el caso

	default:
	alert("Tiene 30 dias");

}



}//FIN DE LA FUNCIÓN