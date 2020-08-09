/*

Michalowicz Ignacio

Enunciado:

Realizar el algoritmo que permita ingresar los datos de una compra de productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),
al terminar la compra el cliente accede a un descuento segun las bolsas en total
Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo ("arena";"cal";"cemento") con mas cantidad de bolsas en el total de la compra.
f) El tipo mas caro

*/

function mostrar()
{
	var tipoActual;
	var cantidadBolsasActual;
	var precioXBolsaActual;
	var precioTotalActual;

	var descuento;
	var cantidadBolsasTotal;
	var importeTotal;

	var importeTotalArena;
	var importeTotalCal;
	var importeTotalCemento;

	var cantidadBolsasArena;
	var cantidadBolsasCal;
	var cantidadBolsasCemento;

	var tipoMayorCantidad;
	var tipoMayorPrecio;

	var respuesta;

	var mensaje;


	precioTotalActual = 0;
	cantidadBolsasTotal = 0;

	importeTotal = 0;

	importeTotalArena = 0;
	importeTotalCemento = 0;
	importeTotalCal = 0;

	cantidadBolsasCemento = 0;
	cantidadBolsasArena = 0;
	cantidadBolsasCal = 0;

	descuento = 0;

	respuesta = "si";

	while(respuesta == "si")
	{

		tipoActual = prompt("¿Qué tipo de producto desea comprar? (Tipos disponibles: arena, cal y cemento)");

		while(tipoActual != "arena" && tipoActual != "cal" && tipoActual != "cemento")
		{
			tipoActual = prompt("ERROR. Ingrese un tipo válido. ¿Qué tipo de producto desea comprar? (Tipos disponibles: arena, cal y cemento)");
		}

		cantidadBolsasActual = prompt("¿Cuántas bolsas desea?");
		cantidadBolsasActual = parseInt(cantidadBolsasActual);

		while(cantidadBolsasActual < 1 || isNaN(cantidadBolsasActual))
		{
			cantidadBolsasActual = prompt("ERROR. La cantidad de bolsas tiene que ser un número no negativo");
		}

		precioXBolsaActual = prompt("Ingrese un precio por bolsa mayor a 0.");
		precioXBolsaActual = parseInt(precioXBolsaActual);

		while(precioXBolsaActual < 0 || isNaN(precioXBolsaActual))
		{
			precioXBolsaActual = prompt("ERROR. Ingrese un precio numérico por bolsa mayor a 0.");
			precioXBolsaActual = parseInt(precioXBolsaActual);		
		}

		precioTotalActual = precioXBolsaActual * cantidadBolsasActual;


		switch(tipoActual)
		{
			case "arena":
				importeTotalArena = importeTotalArena + precioTotalActual;
				cantidadBolsasArena = cantidadBolsasArena + cantidadBolsasActual;
				break;

			case "cal":
				importeTotalCal = importeTotalCal + precioTotalActual;
				cantidadBolsasCal = cantidadBolsasCal + cantidadBolsasActual;
				break;

			case "cemento":
				importeTotalCemento = importeTotalCemento + precioTotalActual;
				cantidadBolsasCemento = cantidadBolsasCemento + cantidadBolsasActual;
				break;
		}

		importeTotal = importeTotal + precioTotalActual;
		cantidadBolsasTotal = cantidadBolsasTotal + cantidadBolsasActual;

		respuesta = prompt("¿Desea seguir ingresando datos?");

	}

	mensaje = "Importe bruto total a pagar sin descuento: " + importeTotal;

	if (cantidadBolsasTotal > 10)
	{
		if (cantidadBolsasTotal > 30)
		{
			descuento = 25;
		}
		else
		{
			descuento = 15;
		}

		descuento = importeTotal * descuento;
		descuento = descuento / 100;

		importeTotal = importeTotal - descuento;

		mensaje = mensaje+ "<br>Importe total a pagar con descuento: " + importeTotal;
	}

	if (cantidadBolsasArena > cantidadBolsasCemento && cantidadBolsasArena > cantidadBolsasCal)
	{
		tipoMayorCantidad = "arena";
	}
	else
	{
		if (cantidadBolsasCemento > cantidadBolsasArena && cantidadBolsasCemento > cantidadBolsasCal)
		{
			tipoMayorCantidad = "cemento";
		}
		else
		{
			tipoMayorCantidad = "cal";
		}
	}

	if (importeTotalCemento > importeTotalCal && importeTotalCemento > importeTotalArena)
	{
		tipoMayorPrecio = "cemento";
	}
	else
	{
		if (importeTotalArena > importeTotalCemento && importeTotalArena > importeTotalCal)
		{
			tipoMayorPrecio = "arena";
		}
		else
		{
			tipoMayorPrecio = "cal";
		}
	}

	mensaje = mensaje + "<br>Tipo de mayor cantidad: "+tipoMayorCantidad;
	mensaje = mensaje + "<br>Tipo de mayor precio: "+tipoMayorPrecio;

	document.write(mensaje);

}
