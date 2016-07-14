/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{

var cantLamparas = document.getElementById('Cantidad').value;
var precioBruto = 35;
var marca = document.getElementById('Marca').value;
var descuento;
var precioNeto;
precioBruto = precioBruto * cantLamparas;

switch (marca){

	case "ArgentinaLuz":

	if(cantLamparas == 3){

		descuento = 0.85;
		
	}	else if(cantLamparas == 4){

				descuento = 0.75;
				
				}	else if (cantLamparas == 5){

					descuento = 0.60;
				
					}	else {

						descuento = 0.50;
						}

	break;

	case "FelipeLamparas":

		if(cantLamparas == 3){

		descuento = 0.90;
		
	}	else if(cantLamparas == 4){

				descuento = 0.75;
				
				}	else if (cantLamparas == 5){

					descuento = 0.70;
				
					}	else {

						descuento = 0.50;
						}

	break;

	case "JeLuz":

		if(cantLamparas == 3){

		descuento = 0.95;
		
	}	else if(cantLamparas == 4){

				descuento = 0.80;
				
				}	else if (cantLamparas == 5){

					descuento = 0.70;
				
					}	else {

						descuento = 0.50;
						}

	break;

	case "HazIluminacion":
			if(cantLamparas == 3){

		descuento = 0.95;
		
	}	else if(cantLamparas == 4){

				descuento = 0.80;
				
				}	else if (cantLamparas == 5){

					descuento = 0.70;
				
					}	else {

						descuento = 0.50;
						}


	break;

	case "Osram":
			if(cantLamparas == 3){

		descuento = 0.95;
		
	}	else if(cantLamparas == 4){

				descuento = 0.80;
				
				}	else if (cantLamparas == 5){

					descuento = 0.70;
				
					}	else {

						descuento = 0.50;
						}


	break;



} // finaliza switch
precioNeto = precioBruto * descuento;
document.getElementById('precioDescuento').value = precioNeto;

} // Finaliza funcion


/* Otra forma

If (cantLamparas >= 6){
	descuento = 0.50;
}	else if (cantLamparas == 5){

		switch(marca){

			case "ArgentinaLuz":
			break;

			case "FelipeLamparas":
			break;

			case "Osram":
			break;

			case "HazIluminacion"
			break;

			case "JeLuz":
			break;
	
		}

	
	}


*/