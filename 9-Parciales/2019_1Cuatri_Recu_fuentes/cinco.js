
/*
Michalowicz Ignacio

Enunciado:
Bienvenidos (SOLO SWITCH).
Una empresa de viajes le solicita ingresar que continente le gustaria visitar
y la cantidad de días , la oferta dice que por día se cobra $100 , que se puede pagar de todas las maneras
Si es America tiene un 15% de descuento y si ademas paga por débito se le agrega un 10% mas de descuento
Si es África u Oceania tiene un 30% de descuento y si además paga por mercadoPago o efectivo se le agrega un 15% mas de descuento
Si es Europa tiene un 20% de descuento y si ademas paga por débito se le agrega un 15% , por mercadoPago un 10% y cualquier otro medio 5%
cualquier otro continente tiene un recargo del 20%
en cualquier continenete , si paga con cheque, se recarga un 15% de impuesto al cheque
*/

function mostrar()
{
	var continenteActual;
	var cantidadDiasActual;
	var metodoPagoActual;

	var precio;
	var descuento;

	continenteActual = selecContinente.value;
	metodoPagoActual = selecPago.value;

	cantidadDiasActual = prompt("Ingrese la cantidad de días a hospedarse.");
	cantidadDiasActual = parseInt(cantidadDiasActual);

	precio = cantidadDiasActual * 100;

	switch(continenteActual)
	{
		case "America":
			descuento = 15;

			if (metodoPagoActual == "Débito")
			{
				descuento = descuento + 10;
			}
			break;

		case "África":
		case "Oceania":
			descuento = 30;

			if (metodoPagoActual == "MercadoPago" || metodoPagoActual == "Efectivo")
			{
				descuento = descuento + 15;
			}
			break;

		case "Europa":
			descuento = 20;

			switch(metodoPagoActual)
			{
				case "Débito":
					descuento = descuento + 15;
					break;

				case "MercadoPago":
					descuento = descuento + 10;
					break;

				default:
					descuento = descuento + 5;
			}
			break;

		default:
			descuento = -20;
	}

	if (metodoPagoActual == "Cheque")
	{
		descuento = descuento -15;
	}

	descuento = descuento * precio;
	descuento = descuento / 100;

	precio = precio - descuento;

	alert("Precio final: "+precio);

}
