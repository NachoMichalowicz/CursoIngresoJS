/*
Michalowicz Ignacio

Enunciado:
Bienvenidos.
Realizar el algoritmo que permita iterar el ingreso de dos datos de un vehiculo, un color (rojo verde o amarillo) y un valor entre 0 y 10000 hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantida de rojos
b) La cantidad de rojos con precio mayor a 5000
c) La cantidad de vehiculos con precio inferior a 5000
d) El promedio de todos los vehiculos ingresados.
e) El mas caro y su color
*/

function mostrar()
{
	var bandera;
	var colorActual;
	var precioActual;
	var continuar;

	var cantidadRojos;
	var cantidadRojosMayor5000;

	var cantidadVehiculosMenor5000;

	var promedioVehiculos;
	var cantidadVehiculos;
	var sumaPreciosvehiculos;

	var precioMaximo;
	var colorMaximo;

	var mensaje;

	continuar = true;
	bandera = false;

	cantidadVehiculos = 0;
	sumaPreciosvehiculos = 0;
	cantidadVehiculosMenor5000 = 0;
	cantidadRojosMayor5000 = 0;
	cantidadRojos = 0;

	while (continuar == true)
	{
		colorActual = prompt("Ingrese un color (Rojo, verde o amarillo)");
		colorActual = colorActual.toLowerCase();

		while (colorActual != "rojo" && colorActual != "verde" && colorActual != "amarillo")
		{
			colorActual = prompt("ERROR. Ingrese un color válido (Rojo, verde o amarillo)");
			colorActual = colorActual.toLowerCase();
		}

		precioActual = prompt("Ingrese un precio (entre 0 y 10000)");
		precioActual = parseInt(precioActual);

		while(isNaN(precioActual) || precioActual < 0 || precioActual > 10000)
		{
			precioActual = prompt("ERROR. Ingrese un precio válido (entre 0 y 10000)");
			precioActual = parseInt(precioActual);	
		}

		continuar = confirm("¿Desea continuar?");


		cantidadVehiculos = cantidadVehiculos + 1;
		sumaPreciosvehiculos = sumaPreciosvehiculos + precioActual;

		if (colorActual == "rojo")
		{
			cantidadRojos = cantidadRojos + 1;
		}

		if (precioActual < 5000)
		{
			cantidadVehiculosMenor5000 = cantidadVehiculosMenor5000 + 1;
		}
		else
		{
			if (colorActual == "rojo")
			{
				cantidadRojosMayor5000 = cantidadRojosMayor5000 + 1;
			}

		}

		if (bandera)
		{
			if (precioActual > precioMaximo)
			{
				precioMaximo = precioActual;
				colorMaximo = colorActual;
			}
		}
		else
		{
			precioMaximo = precioActual;
			colorMaximo = colorActual;
		}

		bandera = true;
	}

	promedioVehiculos = sumaPreciosvehiculos / cantidadVehiculos;

	mensaje = "Cantidad de vehículos rojos: " + cantidadRojos;
	mensaje = mensaje + "<br>Cantidad de vehículos rojos con precio mayor a 5000: "+cantidadRojosMayor5000;
	mensaje = mensaje + "<br>Cantidad de vehiculos con precio inferior a 5000: "+cantidadVehiculosMenor5000;
	mensaje = mensaje + "<br>Promedio de precio de vehículos: "+promedioVehiculos;
	mensaje = mensaje + "<br>Precio del vehículo más caro: "+precioMaximo;
	mensaje = mensaje + "<br>Color del vehículo más caro: "+colorMaximo;

	document.write(mensaje);
}
