/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	var edad = prompt("Ingrese una edad entre 18 y 90 años");

 		while(isNaN(edad)){
 		edad = prompt("Ingrese una edad en formato de numeros");
 		}

			while(edad<18 || edad>90){
 			edad = prompt("Ingrese una edad valida");
 			}

 	var sexo = prompt("Ingrese sexo, F o M");

 		while(sexo != "M" && sexo != "F"){
 			sexo = prompt("Ingrese M si es masculino o F si es femenino");
 			break;
 		}

 	var estadoCivil = prompt("Ingrese estado civil");

 		while(isNaN(estadoCivil)){
 		estadoCivil = prompt("Ingrese estado civil, utilizando 1, 2, 3 o 4");
 		}

 		while(estadoCivil<= 1 || estadoCivil>5){ 

 			estadoCivil = prompt("Ingrese un estado civil correcto");
 			break;

 		} 

 		switch(estadoCivil){

 				case 1:
 				estadoCivil = "Soltero";
 				break;

	 			case 2: 
	 			estadoCivil = "Casado";
	 			break;

	 			case 3: 
	 			estadoCivil = "Divorciado"
	 			break;

	 			case 4:
	 			estadoCivil = "Viudo";
	 			break;

 			}

 	var sueldoBruto = prompt("Ingrese sueldo bruto, mayor a 8000");

 	while(isNaN(sueldoBruto)){
 		sueldoBruto = prompt("Ingrese estado civil, utilizando 1, 2, 3 o 4");
 		}

 		while(sueldoBruto < 8000){
 			sueldoBruto = prompt("Ingrese un sueldo bruto mayor a 8000");
 			break;
 		}

 	var nLegajo = prompt("Ingrese numero de legajo");

 		while(isNaN(nLegajo)){
 		nLegajo = prompt("Ingrese el numero de legajo en numeros");
 		}

 		while(nLegajo>0000 || nLegajo<1000){
 			nLegajo = prompt("Ingrese un numero de legajo correcto");
 			break;
 		}


 	var nacionalidad = prompt("Ingrese nacionalidad, siendo A para argentinos, E para extranjeros y N para nacionalizados");

 	 while(!isNaN(nacionalidad)){
 	nacionalidad = prompt("Ingrese la nacionalidad con A, E o N");
 	}

 	while(nacionalidad != "A" || nacionalidad != "E" || nacionalidad != "N"){
 		nacionalidad = prompt("Ingrese una nacionalidad correcta");
 		break;
 	}

	 	switch(nacionalidad){
	 		case "A":
	 		nacionalidad = "Argentino";
	 		break;

	 		case "E":
	 		nacionalidad = "Extranjero";
	 		break;

	 		case "N":
	 		nacionalidad = "Nacionalizado";
	 		break;
	 	}

 	document.getElementById('Edad').value = edad;
 	document.getElementById('Sexo').value = sexo;
 	document.getElementById('EstadoCivil').value = estadoCivil;
 	document.getElementById('Sueldo').value = sueldoBruto;
 	document.getElementById('Legajo').value = nLegajo;
 	document.getElementById('Nacionalidad').value = nacionalidad;

}
