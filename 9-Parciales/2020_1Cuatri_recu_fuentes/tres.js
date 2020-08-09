/*
Enunciado:
Bienvenidos.
En el ingreso a un viaje en avión nos solicitan nombre, nacionalidad , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) la Nacionalidad de la persona con mas temperatura.
b) Cuantos mayores de edad( más de 17) estan solteros
c) La cantidad de Mujeres que hay solteras o viudas.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre las mujeres casadas.
*/

function mostrar()
{
	var bandera;
	var respuesta;

	var nombreActual;
	var nacionalidadActual;
	var edadActual;
	var sexoActual;
	var estadoCivilActual;
	var temperaturaActual;

	var mayorTemperatura;
	var nacionalidadMayorTemperatura;

	var cantidadMayoresEdadSolteros;
	var cantidadMujeresViudas;
	var cantidadTerceraEdadMas38Temperatura;
	var cantidadMujeresCasadas;
	var cantidadMujeresSolterasOViudas;

	var sumaEdadMujeresCasadas;
	var promedioEdadMujeresCasadas;

	var mensaje;


	respuesta = "si";
	bandera = false;

	cantidadMayoresEdadSolteros = 0;
	cantidadMujeresViudas = 0;
	cantidadTerceraEdadMas38Temperatura = 0;
	cantidadMujeresCasadas = 0;
	cantidadMujeresSolteras = 0;

	cantidadMujeresSolterasOViudas = 0;

	while (respuesta == "si")
	{

		nombreActual = prompt("Ingrese un nombre.");

		nacionalidadActual = prompt("Ingrese una nacionalidad.");


		edadActual = prompt("Ingrese una edad.");
		edadActual = parseInt(edadActual);

		while (edadActual < 0 || isNaN(edadActual))
		{
			edadActual = prompt("ERROR. Ingrese una edad válida mayor a 0.");
			edadActual = parseInt(edadActual);
		}

		sexoActual = prompt("Ingrese un sexo. \"f\" para femenino o \"m\" para masculino.");
		sexoActual = sexoActual.toLowerCase();

		while (sexoActual != "f" && sexoActual != "m")
		{
			sexoActual = prompt("ERROR. Ingrese un sexo válido. \"f\" para femenino o \"m\" para masculino.");
		}

		estadoCivilActual = prompt("Ingrese un estado civil. (\"soltero\", \"casado\" o \"viudo\"");

		while(estadoCivilActual != "soltero" && estadoCivilActual != "casado" && estadoCivilActual != "viudo")
		{
			estadoCivilActual = prompt("ERROR. Ingrese un estado civil válido. (\"soltero\", \"casado\" o \"viudo\"");
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
			if (temperaturaActual > mayorTemperatura)
			{
				mayorTemperatura = temperaturaActual;
				nacionalidadMayorTemperatura = nacionalidadActual;
			}
		}
		else
		{
			mayorTemperatura = temperaturaActual;
			nacionalidadMayorTemperatura = nacionalidadActual;
			bandera = true;
		}

		switch(estadoCivilActual)
		{
			case "soltero":
				if (edadActual > 17)
				{
					cantidadMayoresEdadSolteros = cantidadMayoresEdadSolteros + 1;
				}

				if (sexoActual == "f")
				{
					cantidadMujeresSolteras = cantidadMujeresSolteras + 1;
				}

			case "viudo":
				cantidadMujeresViudas = cantidadMujeresViudas + 1;

			case "casado":
				if (sexoActual == "f")
				{
					cantidadMujeresCasadas = cantidadMujeresCasadas + 1;
					sumaEdadMujeresCasadas = sumaEdadMujeresCasadas + edadActual;
				}
				break;
		}

		if (edadActual > 60)
		{
			if (temperaturaActual > 38)
			{
				cantidadTerceraEdadMas38Temperatura = cantidadTerceraEdadMas38Temperatura + 1;
			}
		}

	}

	cantidadMujeresSolterasOViudas = cantidadMujeresSolteras + cantidadMujeresViudas;

	promedioEdadMujeresCasadas = sumaEdadMujeresCasadas / cantidadMujeresCasadas;

	mensaje = "Nacionalidad de la persona con mayor temperatura: " + nacionalidadMayorTemperatura;
	mensaje = mensaje + "<br>Cantidad de mayores de edad solteros: "+ cantidadMayoresEdadSolteros;
	mensaje = mensaje + "<br>Cantidad de mujeres solteras o viudas: "+ cantidadMujeresSolterasViudas;
	mensaje = mensaje + "<br>Cantidad de personas de la tercera edad con más de 38 de temperatura: "+ cantidadTerceraEdadMas38Temperatura;
	mensaje = mensaje + "<br>Promedio de edad entre las mujeres casadas: "+promedioEdadMujeresCasadas;

	document.write(mensaje);

}
