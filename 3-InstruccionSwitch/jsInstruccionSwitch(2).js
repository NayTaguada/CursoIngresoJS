function Mostrar()
{
//tomo la edad  
//var mesDelAño = document.getElementById('mes').value;
var mes = document.getElementById('mes').selectedIndex;
var option = document.getElementsByTagName('option')[mes].value;  
//alert (mesDelAño);

switch(option){

	case "Agosto":
	case "Julio":
		alert("Abrigate que hace frio");
	break;

	case "Octubre":
	case "Septiembre":
	case "Noviembre":
	case "Diciembre":
		alert("Ya pasamos el invierno, ahora calor!"); // Mirar si puedo hacer estos case juntos.
	break;

	default: 
	alert("Falta para el invierno");
}



}//FIN DE LA FUNCIÓN