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

/* switch(laHora){
		case "7":
		case "8":
		case "9":
		case "10":
		case "11":

		alert("Es de mañana");
		break;

		case "12":
		case "13":
		case "14":
		case "15":
		case "16":
		case "17":
		case "18":
		case "19":
		
		alert("Es de tarde");
		break;

		case "20":
		case "21":
		case "22":
		case "23":
		case "24":
		case "0":
		case "1":
		case "2":
		case "3":
		case "4":
		case "5":
		case "6":

		alert("Es de noche");
		break;

		default:
		alert("La hora no existe");
}

//Esta es la manera correcta 

*/


}//FIN DE LA FUNCIÓN