function Mostrar()
{
/*tomo la edad  
var mesDelAño = document.getElementById('mes').value;
alert (mesDelAño);*/
	
var mes = document.getElementById('mes').selectedIndex;
var option = document.getElementsByTagName('option')[mes].value;  

switch(option){
	
	case "Febrero":
		alert("Este mes no tiene mas de 29 dias");
	break;

	default: 
	alert("Este mes tiene 30 o mas dias");
}

}//FIN DE LA FUNCIÓN