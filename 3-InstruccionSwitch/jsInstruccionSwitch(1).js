function Mostrar()
{
//tomo la edad  
//var mesDelAño = document.getElementById('mes').value;
var estado = document.getElementById('mes').value;
//var option = document.getElementsByTagName('option')[estado].value; 
switch (estado){

	case "Enero":
		alert("Que comiences bien el año!");
		break;

	case "Marzo":
		alert("A clases!");
	break;

	case "Julio":
		alert("Se vienen las vacaciones!");
	break;

	case "Diciembre":
		alert("Felices fiestas");
	break;

	default:  //caso de no elegir ninguna opcion 
	
}


}//FIN DE LA FUNCIÓN