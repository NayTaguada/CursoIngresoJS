function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var azar;
	azar = Math.floor((Math.random() * 10) + 1);

	if (azar >= 9){
		alert("Excelente");
	}else if(azar >= 4 && azar < 9){
		alert("Aprobo");
	}else{
		alert("Vamos, la proxima se puede");
	}

	document.getElementById('numAzar').value = azar;

}//FIN DE LA FUNCIÓN