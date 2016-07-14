function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 

	var azar;
	azar = Math.floor((Math.random() * 10) + 1);  	// le sumo 1 para que incluya al 10, lo multiplico por 10 para que me de del 1 al 9, math.floor devuelve el numero entero del numero al azar.
	document.getElementById('numAzar').value = azar;


}//FIN DE LA FUNCIÓN

// Si quisiera del 100 al 150 seria *50 y + 100