function Mostrar()
{
	alert('iteración while');

	var contador = 0;

	/* Manera erronea
	if(contador < 10){

		alert("manzana " + contador);

		contador = contador + 1;
	}

	if(contador < 10){

		alert("poroto " + contador);

		contador = contador + 1;
	} */

	//while(contador < 3){
	while(1){ // 1 es lo mismo que true

	contador = contador + 1;

		if (contador == 3){  // El continue se saltea el 3, vuelve al  while.
			continue;
		}

		alert("peras " + contador);

		if(contador == 6){
			break;
		}

		alert("peras finales " + contador);

	}



}//FIN DE LA FUNCIÓN