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
	var bandera;
	var respuesta;

	var nombreActual;
	var edadActual;
	var sexoActual;
	var estadoCivilActual;
	var temperaturaActual;

	var cantidadMayoresEdadViudos;
	var cantidadTerceraEdadMas38Temperatura;
	var cantidadHombresSolteros;
	var cantidadHombresViudos;
	var cantidadHombresSolterosOViudos;
	var sumaEdadesHombresSolteros;
	var promedioEdadHombresSolteros;

	var temperaturaMaxima;
	var nombreTemperaturaMaxima;

	var mensaje;


	cantidadMayoresEdadViudos = 0;
	cantidadTerceraEdadMas38Temperatura = 0;
	cantidadHombresSolteros = 0;
	cantidadHombresViudos = 0;
	cantidadHombresSolterosOViudos = 0;
	sumaEdadesHombresSolteros = 0;
	promedioEdadHombresSolteros = 0;

	bandera = false;
	respuesta = "si";

	while (respuesta == "si")
	{
		nombreActual = prompt("Ingrese un nombre");

		edadActual = prompt("Ingrese una edad (mayor a 0)");
		edadActual = parseInt(edadActual);

		while (isNaN(edadActual) || edadActual < 0)
		{
			edadActual = prompt("ERROR. Ingrese una edad numérica válida mayor a 0");
			edadActual = parseInt(edadActual);
		}

		sexoActual = prompt("Ingrese un sexo (\"f\" para femenino o \"m\" para masculino)");
		sexoActual = sexoActual.toLowerCase();

		while (sexoActual != "f" && sexoActual != "m")
		{
			sexoActual = prompt("ERROR. Ingrese un sexo válido (\"f\" para femenino o \"m\" para masculino)");
			sexoActual = sexoActual.toLowerCase();		
		}

		estadoCivilActual = prompt("Ingrese un estado civil. (\"soltero\", \"casado\" o \"viudo\")");

		while (estadoCivilActual != "soltero" && estadoCivilActual != "casado" && estadoCivilActual != "viudo")
		{
			estadoCivilActual = prompt("ERROR. Ingrese un estado civil válido. (\"soltero\", \"casado\" o \"viudo\")");
		}

		temperaturaActual = prompt("Ingrese una temperatura corporal.");
		temperaturaActual = parseInt(temperaturaActual);

		while(isNaN(temperaturaActual))
		{
			temperaturaActual = prompt("ERROR. Ingrese una temperatura corporal numérica.");
			temperaturaActual = parseInt(temperaturaActual);		
		}

		respuesta = prompt("¿Desea seguir ingresando datos?");


		if (bandera)
		{
			if (temperaturaActual > temperaturaMaxima)
			{
				temperaturaMaxima = temperaturaActual;
				nombreTemperaturaMaxima = nombreActual;
			}
		}
		else
		{
			temperaturaMaxima = temperaturaActual;
			nombreTemperaturaMaxima = nombreActual;
		}


		switch(estadoCivilActual)
		{
			case "soltero":
				if (sexoActual == "m")
				{
					cantidadHombresSolteros++;
					sumaEdadesHombresSolteros = sumaEdadesHombresSolteros + edadActual;
				}
				break;

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
		}

		if (edadActual > 60)
		{
			if (temperaturaActual > 38)
			{
				cantidadTerceraEdadMas38Temperatura++;
			}
		}

		bandera = true;
	}

	cantidadHombresSolterosOViudos = cantidadHombresViudos + cantidadHombresSolteros;
	promedioEdadHombresSolteros = sumaEdadesHombresSolteros / cantidadHombresSolteros;

	mensaje = "Nombre de la persona con más temperatura: " + nombreTemperaturaMaxima;
	mensaje = mensaje+"<br>Cantidad de mayores de edad viudos: "+cantidadMayoresEdadViudos;
	mensaje = mensaje+"<br>Cantidad de hombres solteros o viudos: "+cantidadHombresSolterosOViudos;
	mensaje = mensaje+"<br>Cantidad de personas de la tercera edad con más de 38 de temperatura: "+cantidadTerceraEdadMas38Temperatura;
	mensaje = mensaje+"<br>Promedio de edad entre los hombres solteros: "+promedioEdadHombresSolteros;

	document.write(mensaje);

	
}
