/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;

function comenzar()
{
	eleccionMaquina = Math.floor((Math.random() * 3) + 1);


}//FIN DE LA FUNCIÓN
function piedra()
{
	if(eleccionMaquina != 1){

		if(eleccionMaquina == 2){
			alert("Has perdido, la maquina eligio papel!");
		} else if (eleccionMaquina == 3){
			alert("Has ganado, la maquina eligio tijera!");
		}
	} else {
		alert("Empataron, la maquina eligio piedra!");
	}


}//FIN DE LA FUNCIÓN
function papel()
{
	if(eleccionMaquina != 2){

		if(eleccionMaquina == 3){
			alert("Has perdido, la maquina eligio tijera!");
		} else if (eleccionMaquina == 1){
			alert("Has ganado, la maquina eligio piedra!");
		}
	} else {
		alert("Empataron, la maquina eligio papel!");
	}

}//FIN DE LA FUNCIÓN
function tijera()
{
	if(eleccionMaquina != 3){

		if(eleccionMaquina == 1){
			alert("Has perdido, la maquina eligio piedra!");
		} else if (eleccionMaquina == 2){
			alert("Has ganado, la maquina eligio papel!");
		}
	} else {
		alert("Empataron, la maquina eligio tijera!");
	}

}//FIN DE LA FUNCIÓN