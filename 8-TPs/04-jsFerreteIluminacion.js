/*
Michalowicz Ignacio

Enunciado:
Las lámparas están al mismo precio de $35 pesos final.
A. Si compra 6 o más lamparitas bajo consumo tiene un descuento del 50%.
B. Si compra 5 lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C. Si compra 4 lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D. Si compra 3 lamparitas bajo consumo marca "ArgentinaLuz" el descuento es del 15%, si es “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E. Si el importe final con descuento suma más de $120 se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje: ”IIBB Usted pago X”, siendo X el impuesto que se pagó.

 */

function CalcularPrecio () 
{
	var cantidadLamparas;
	var marcaLamparas;
	var precio;
	var descuento;

	cantidadLamparas = txtIdCantidad.value;
	marcaLamparas = Marca.value;

	cantidadLamparas = parseInt(cantidadLamparas);

	descuento = 0;

	switch(cantidadLamparas)
	{
		case 3:
			if (marcaLamparas == "ArgentinaLuz")
			{
				descuento = 15;
			} 
			else
			{
				if (marcaLamparas == "FelipeLamparas")
				{
					descuento = 10;
				}
				else
				{
					descuento = 5;
				}
			}
			break;

		case 4:
			if (marcaLamparas == "ArgentinaLuz" || marcaLamparas == "FelipeLamparas")
			{
				descuento = 25;
			}
			else
			{
				descuento = 20;
			}
			break;

		case 5:
			if (marcaLamparas == "ArgentinaLuz")
			{
				descuento = 40;
			}
			else
			{
				descuento = 30;
			}

		default:
			if (cantidadLamparas > 5)
			{
				descuento = 50;
			}
	}

	precio = cantidadLamparas * 35;
	precio = precio * (100 - descuento);
	precio = precio / 100;

	if (precio > 120)
	{
		sumaIIBB = (precio * 10) / 100;
		precio = precio + sumaIIBB;

		alert("Usted pago "+sumaIIBB+" de IIBB.");

	}

	txtIdprecioDescuento.value = precio;

}
