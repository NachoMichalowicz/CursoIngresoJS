/*

Michalowicz Ignacio

Enunciado:

Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total

*/

function mostrar()
{
	var bandera;
	var contador;

	var tipoActual;
	var precioActual;
	var precioTotalActual;
	var cantidadUnidadesActual;
	var marcaActual;

	var cantidadJabon;
	var cantidadAlcohol;
	var cantidadBarbijo;

	var totalCompraJabon;
	var totalCompraAlcohol;
	var totalCompraBarbijo;

	var marcaBaratoAlcohol;
	var cantidadUnidadesBaratoAlcohol;
	var precioBaratoAlcohol;

	var totalTipoMasUnidades;
	var cantidadCompraMasUnidades;
	var promedioPorCompra;

	var mensaje;


	bandera = false;

	cantidadBarbijo = 0;
	cantidadAlcohol = 0;
	cantidadJabon = 0;

	totalCompraJabon = 0;
	totalCompraAlcohol = 0;
	totalCompraBarbijo = 0;

	totalTipoMasUnidades = 0;
	cantidadCompraMasUnidades = 0;

	promedioPorCompra = 0;

	contador = 0;

	while(contador < 5)
	{
		tipoActual = prompt("Ingrese un tipo de producto (barbijo , jabón o alcohol)");
		tipoActual = tipoActual.toLowerCase();

		while(tipoActual != "barbijo" && tipoActual != "jabón" && tipoActual != "alcohol")
		{
			tipoActual = prompt("ERROR. Ingrese un tipo válido de producto (barbijo , jabón o alcohol)");
			tipoActual = tipoActual.toLowerCase();
		}

		precioActual = prompt("Ingrese un precio por unidad (entre 100 y 300)");
		precioActual = parseInt(precioActual);

		while(isNaN(precioActual) || precioActual < 100 || precioActual > 300)
		{
			precioActual = prompt("ERROR. Ingrese un precio válido por unidad (entre 100 y 300)");
			precioActual = parseInt(precioActual);
		}

		cantidadUnidadesActual = prompt("Ingrese la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades)");
		cantidadUnidadesActual = parseInt(cantidadUnidadesActual);

		while(isNaN(cantidadUnidadesActual) || cantidadUnidadesActual < 0 || cantidadUnidadesActual > 1000)
		{
			cantidadUnidadesActual = prompt("ERROR. Ingrese una cantidad válida de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades)");
			cantidadUnidadesActual = parseInt(cantidadUnidadesActual);
		}

		marcaActual = prompt("Ingrese la marca del producto");

		switch(tipoActual)
		{
			case "alcohol":
				if (bandera)
				{
					if (precioBaratoAlcohol > precioActual)
					{
						marcaBaratoAlcohol = marcaActual;
						cantidadUnidadesBaratoAlcohol = cantidadUnidadesActual;
					}
				}
				else
				{
					marcaBaratoAlcohol = marcaActual;
					cantidadUnidadesBaratoAlcohol = cantidadUnidadesActual;
					bandera = true;
				}
				totalCompraAlcohol++;
				cantidadAlcohol+= cantidadUnidadesActual;
				break;

			case "jabón":
				totalCompraJabon++;
				cantidadJabon+= cantidadUnidadesActual;
				break;

			case "barbijo":
				totalCompraBarbijo++;
				cantidadBarbijo+= cantidadUnidadesActual;
		}

		contador++;
	}

	if (cantidadBarbijo > cantidadAlcohol && cantidadBarbijo > cantidadJabon)
	{
		cantidadCompraMasUnidades = cantidadBarbijo;
		totalTipoMasUnidades = totalCompraBarbijo;

	}
	else
	{
		if (cantidadAlcohol > cantidadBarbijo && cantidadAlcohol > cantidadJabon)
		{
			cantidadCompraMasUnidades = cantidadAlcohol;
			totalTipoMasUnidades = totalCompraAlcohol;
		}
		else
		{
			cantidadCompraMasUnidades = cantidadJabon;
			totalTipoMasUnidades = totalCompraJabon;
		}
	}

	promedioPorCompra = cantidadCompraMasUnidades / totalTipoMasUnidades;

	mensaje = "Cantidad de unidades del más barato de los alcoholes: "+cantidadUnidadesBaratoAlcohol;
	mensaje = mensaje+"<br>Fabricante del más barato de los alcoholes: "+marcaBaratoAlcohol;
	mensaje = mensaje+"<br>Promedio por compra del tipo de más unidades: "+promedioPorCompra;
	mensaje = mensaje+"<br>Total de jabones: "+cantidadJabon;

	document.write(mensaje);
	
}

/*
Michalowicz Ignacio

Enunciado:

Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total

*/