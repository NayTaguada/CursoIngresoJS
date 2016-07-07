function Mostrar()
{
/*tomo la edad  
var mesDelAño = document.getElementById('mes').value;
alert (mesDelAño);*/

var mes = document.getElementById('mes').selectedIndex;
var option = document.getElementsByTagName('option')[mes].value;  

switch(option){

	case "Febrero":
	alert("Tiene 28 dias");
	break;


}



}//FIN DE LA FUNCIÓN