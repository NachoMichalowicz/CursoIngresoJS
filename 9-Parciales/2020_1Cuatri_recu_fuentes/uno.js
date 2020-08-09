/*
Michalowicz Ignacio

Debemos realizar la carga de una compra de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo de producto (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más caro de los jabones, la cantidad de unidades y el fabricante
b) Del tipo de producto con más unidades en total de la compra, el promedio por compra
c) Cuántas unidades de Barbijos se compraron en total
*/

function mostrar()
{
	var bandera;

	var contador;

	var tipoProducto;

	var cantidadBarbijos;
	var cantidadJabon;
	var cantidadAlcohol;

	var cantidadComprasBarbijos;
	var cantidadComprasJabon;
	var cantidadComprasAlcohol;

	var precioActual;
	var unidadesActual;
	var marcaActual;

	var precioJabonCaro;
	var unidadesJabonCaro;
	var marcaJabonCaro;

	var promedioPorCompraMayorTipo;
	var cantidadUnidadesMayorTipo;
	var cantidadComprasMayorTipo;

	var mensaje;


	bandera = false;

	contador = 0;
	cantidadBarbijos = 0;
	cantidadJabon = 0;
	cantidadAlcohol = 0;

	cantidadComprasBarbijos = 0;
	cantidadComprasJabon = 0;
	cantidadComprasAlcohol = 0;

	precioJabonCaro = 0;


	while(contador < 5)
	{
		tipoProducto = prompt("Ingrese un tipo de producto. (barbijo , jabón o alcohol)");

		while(tipoProducto != "barbijo" && tipoProducto != "jabón" && tipoProducto != "alcohol")
		{
			tipoProducto = prompt("ERROR. Ingrese un tipo de producto válido. (barbijo , jabón o alcohol)");

		}

		precioActual = prompt("Ingrese el precio de dicho producto. (entre 100 y 300)");
		precioActual = parseInt(precioActual);

		while(precioActual < 100 || precioActual > 300 || isNaN(precioActual))
		{
			precioActual = prompt("ERROR. Ingrese un precio válido de dicho producto. (entre 100 y 300): ");
			precioActual = parseInt(precioActual);
		}

		unidadesActual = prompt("Ingrese el número de unidades de dicho producto. (entre 1 y 1000)");
		unidadesActual = parseInt(unidadesActual);

		while(unidadesActual < 1 || unidadesActual > 1000 || isNaN(unidadesActual))
		{
			unidadesActual = prompt("ERROR. Ingrese un número válido de unidades de dicho producto. (entre 1 y 1000)");
			unidadesActual = parseInt(unidadesActual);			
		}

		marcaActual = prompt("Ingrese la marca del producto.");

		switch(tipoProducto)
		{
			case "jabón":

				cantidadJabon = cantidadJabon + unidadesActual;
				cantidadComprasJabon = cantidadComprasJabon + 1;

				if (bandera)
				{
					if (precioActual > precioJabonCaro)
					{
						precioJabonCaro = precioActual;
						unidadesJabonCaro = unidadesActual;
						marcaJabonCaro = marcaActual;						
					}
				}
				else
				{
					precioJabonCaro = precioActual;
					unidadesJabonCaro = unidadesActual;
					marcaJabonCaro = marcaActual;
				}

				break;

			case "barbijo":
				cantidadBarbijos = cantidadBarbijos + unidadesActual;
				cantidadComprasBarbijos = cantidadComprasBarbijos + 1;
				break;

			case "alcohol":
				cantidadAlcohol = cantidadAlcohol + unidadesActual;
				cantidadComprasAlcohol = cantidadComprasAlcohol + 1;
				break;
		}

		contador = contador + 1;
	}

	if (cantidadBarbijos > cantidadAlcohol && cantidadBarbijos > cantidadJabon)
	{
		cantidadUnidadesMayorTipo = cantidadBarbijos;
		cantidadComprasMayorTipo = cantidadComprasBarbijos;
	}
	else
	{
		if (cantidadAlcohol > cantidadBarbijos && cantidadAlcohol > cantidadJabon)
		{
			cantidadUnidadesMayorTipo = cantidadAlcohol;
			cantidadComprasMayorTipo = cantidadComprasAlcohol;
		}
		else
		{
			cantidadUnidadesMayorTipo = cantidadJabon;
			cantidadComprasMayorTipo = cantidadComprasJabon;
		}
	}

	promedioPorCompraMayorTipo = cantidadUnidadesMayorTipo / cantidadComprasMayorTipo;

	mensaje = "Cantidad de unidades del más caro de los jabones: "+unidadesJabonCaro;
	mensaje = mensaje + "<br>Fabricante del más caro de los jabones: "+marcaJabonCaro;
	mensaje = mensaje + "<br><br>Promedio de compra del tipo de más unidades: "+promedioPorCompraMayorTipo;
	mensaje = mensaje + "<br><br>Unidades de barbijo: "+cantidadBarbijos;

	document.write(mensaje);
}
