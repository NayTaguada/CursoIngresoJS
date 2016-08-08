function Mostrar()
{
	//alert('iteración while');

	/*var i = 10;

	while(i != 0){ // o i > 0

		alert("Contador: " + i);

		i = i - 1; // i--;
	}

	document.write("Hola mundo");
	*/

	var nota = prompt("Ingrese la nota","");
	var sexo = prompt("Ingrese sexo, F o M");
	var alumnos = 1;
	var promedio = 0;
	var varones = 0;
	var menor = 0;

	while(isNaN(nota)){
		nota = prompt("Ingrese la nota en sistema numérico","");
	}

	while(nota < 0 || nota > 10){
		nota = prompt("Ingrese una nota correcta del 0 al 10","");
	}

	while(!isNaN(sexo)){
		sexo = prompt("Ingrese el sexo con F o M","");
	}

	while(sexo != "F" && sexo != "M"){
		sexo = prompt("Ingrese el sexo nuevamente con F o M");
	}

	while(alumnos != 100){
		alumnos++;

		if(sexo == "M" && nota < 7){
			varones++;
		}

		promedio = parseInt(promedio) + parseInt(nota);

		if(nota < menor){
			menor = nota;
		}

		nota = prompt("Ingrese la nota numero: " + alumnos,"");
		sexo = prompt("Ingrese sexo, F o M");

		continue;


	}

	alert("El promedio de las notas totales es: " + promedio / 100);
	alert("La cantidad de varones con la nota menor a 6 es: " + varones);
	alert("La nota mas chica es: " + menor);

}//FIN DE LA FUNCIÓN