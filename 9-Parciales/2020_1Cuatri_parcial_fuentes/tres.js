/*
Michalowicz Ignacio

Enunciado:
Bienvenidos.
En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.

*/
function mostrar()
{
	var mensaje;

	var bandera;
	var continuar;

	var nombreActual;
	var edadActual;
	var sexoActual;
	var estadoCivilActual;
	var temperaturaActual;

	var temperaturaMaxima;
	var nombreTemperaturaMaxima;

	var cantidadHombresSolteros;
	var cantidadHombresViudos;
	var cantidadHombresSolterosOViudos;

	var cantidadMayoresEdadViudos;
	var cantidadTerceraEdadMas38Temperatura;

	var sumaEdadHombresSolteros;
	var promedioEdadHombresSolteros;


	continuar = true;
	bandera = false;

	cantidadHombresSolteros = 0;
	cantidadHombresViudos = 0;

	cantidadMayoresEdadViudos = 0;
	cantidadTerceraEdadMas38Temperatura = 0;

	sumaEdadHombresSolteros = 0;

	while(continuar == true)
	{

		nombreActual = prompt("Ingrese un nombre");

		edadActual = prompt("Ingrese una edad");
		edadActual = parseInt(edadActual);

		while (isNaN(edadActual) || edadActual < 1)
		{
			edadActual = prompt("ERROR. Ingrese una edad numérica válida mayor a 0");
			edadActual = parseInt(edadActual);
		}

		sexoActual = prompt("Ingrese un sexo (f o m)");
		sexoActual = sexoActual.toLowerCase();

		while(sexoActual != "f" && sexoActual != "m")
		{
			sexoActual = prompt("ERROR. Ingrese un sexo válido (f o m)");
			sexoActual = sexoActual.toLowerCase();
		}

		estadoCivilActual = prompt("Ingrese un estado civil (soltero, casado o viudo)");
		estadoCivilActual = estadoCivilActual.toLowerCase();

		while(estadoCivilActual != "soltero" && estadoCivilActual != "casado" && estadoCivilActual != "viudo")
		{
			estadoCivilActual = prompt("ERROR. Ingrese un estado civil válido (soltero, casado o viudo)");
			estadoCivilActual = estadoCivilActual.toLowerCase();
		}

		temperaturaActual = prompt("Ingrese una temperatura.");
		temperaturaActual = parseInt(temperaturaActual);

		while (isNaN(temperaturaActual))
		{
			temperaturaActual = prompt("ERROR. Ingrese una temperatura numérica.");
			temperaturaActual = parseInt(temperaturaActual);
		}

		continuar = confirm("¿Desea continuar ingresando datos?");

		if (bandera)
		{
			if (temperaturaMaxima < temperaturaActual)
			{
				temperaturaMaxima = temperaturaActual;
				nombreTemperaturaMaxima = nombreActual;
			}
		}
		else
		{
			temperaturaMaxima = temperaturaActual;
			nombreTemperaturaMaxima = nombreActual;
			bandera = true;
		}

		switch(estadoCivilActual)
		{
			case "viudo":
				if (sexoActual == "m")
				{
					cantidadHombresViudos++;
				}

				if (edadActual > 17)
				{
					cantidadMayoresEdadViudos++;
				}
				break;

			case "soltero":
				if (sexoActual == "m")
				{
					sumaEdadHombresSolteros = sumaEdadHombresSolteros + edadActual;
					cantidadHombresSolteros++;
				}
				break;
		}

		if (edadActual > 60)
		{
			if (temperaturaActual > 38)
			{
				cantidadTerceraEdadMas38Temperatura++;
			}
		}
	}

	cantidadHombresSolterosOViudos = cantidadHombresViudos + cantidadHombresSolteros;

	promedioEdadHombresSolteros = sumaEdadHombresSolteros / cantidadHombresSolteros;

	mensaje = "Nombre de la persona con más temperatura: "+nombreTemperaturaMaxima;
	mensaje = mensaje+ "<br>Cantidad de mayores de edad viudos: "+cantidadMayoresEdadViudos;
	mensaje = mensaje+ "<br>Cantidad de hombres solteros o viudos: "+cantidadHombresSolterosOViudos;
	mensaje = mensaje+ "<br>Cantidad de personas de la tercera edad con más de 38 de temperatura: "+cantidadTerceraEdadMas38Temperatura;
	mensaje = mensaje+ "<br>Promedio de edad entre los hombres solteros: "+promedioEdadHombresSolteros;

	document.write(mensaje);
}

/*
Michalowicz Ignacio

Enunciado:
Bienvenidos.
En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.

*/
