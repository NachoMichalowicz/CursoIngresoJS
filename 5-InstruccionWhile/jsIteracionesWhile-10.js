/*

Michalowicz Ignacio

Agregado while

Ingrese una edad(0 y 120), nombre y un sexo(f o m)
informar:
nivel 1:
cuantos son en total 
cuantos mayores de edad 
cuantos menores de edad 
cuantos adolescentes de edad 
la edad mas vieja;
la edad mas joven;

nivel:2

cuantas mujeres;
cuantos hombres;
cuantas adolescentes mujeres 
cuantos niños hombres 
el promedio de edad
el promedio de edad de las mujeres
el promedio de edad de los hombres
la cantidad de edades pares 

nivel 3:

el nombre de la persona mas vieja
el nombre de la persona mas joven

el sexo de la persona mas vieja
el sexo de la persona mas joven

nivel dios:

cuantas personas hay con la edad minima
cuantas personas hay con la edad maxima
el nombre de la ultima persona con la mayor edad encontrada
el nombre de la ultima persona con la menor edad encontrada

*/

function mostrar()
{
	var bandera = true;

	var edadActual;
	var nombreActual;
	var sexoActual;

	var cantidadPersonas;
	var cantidadMayoresEdad;
	var cantidadMenoresEdad;
	var cantidadAdolescentes;
	var cantidadAdolescentesMujeres;

	var cantidadMujeres;
	var cantidadHombres;
	var cantidadNinosHombres;
	var sumaEdadMujeres;
	var sumaEdadHombres;
	var promedioEdadMujeres;
	var promedioEdadHombres;
	var sumaEdades;
	var promedioEdad;
	var cantidadEdadesPares;

	var edadMinima;
	var edadMaxima;
	var sexoEdadMinima;
	var sexoEdadMaxima;
	var cantidadPersonasEdadMinima;
	var cantidadPersonasEdadMaxima;

	var nombreEdadMaxima;
	var nombreEdadMinima;

	var respuesta;

	var mensaje;


	respuesta = "si";
	cantidadPersonas = 0;
	cantidadMayoresEdad = 0;
	cantidadMenoresEdad = 0;
	cantidadAdolescentes = 0;
	cantidadMujeres = 0;
	cantidadHombres = 0;
	cantidadAdolescentesMujeres = 0;
	cantidadNinosHombres = 0;
	sumaEdades = 0;
	sumaEdadHombres = 0;
	sumaEdadMujeres = 0;
	cantidadEdadesPares = 0;
	

	while(respuesta == "sí" || respuesta == "si")
	{
		nombreActual = prompt("Ingrese un nombre");
		sexoActual = prompt("Ingrese un sexo \"f\" o \"m\"");

		while (sexoActual != "f" && sexoActual != "m")
		{
			sexoActual = prompt("ERROR. Ingrese \"f\" o \"m\" como sexos válidos");
		}

		edadActual = prompt("Ingrese una edad de 0 a 120 años.");
		edadActual = parseInt(edadActual);

		while (edadActual < 0 || edadActual > 120 || Number.isNaN(edadActual))
		{
			edadActual = prompt("ERROR. Ingrese una edad válida, de 0 a 120 años.");
			edadActual = parseInt(edadActual);
		}

		cantidadPersonas = cantidadPersonas + 1;

		if (bandera)
		{
			edadMinima = edadActual;
			edadMaxima = edadActual;

			sexoEdadMaxima = sexoActual;
			sexoEdadMinima = sexoActual;

			nombreEdadMaxima = nombreActual;
			nombreEdadMinima = nombreActual;

			cantidadPersonasEdadMinima = 1;
			cantidadPersonasEdadMaxima = 1;
		}
		else
		{
			switch(edadActual)
			{
				case edadMaxima:
					cantidadPersonasEdadMaxima = cantidadPersonasEdadMaxima + 1;
					break;

				case edadMinima:
					cantidadPersonasEdadMinima = cantidadPersonasEdadMinima + 1;
					break;

				default:

					if (edadActual > edadMaxima)
					{
						edadMaxima = edadActual;
						sexoEdadMaxima = sexoActual;
						nombreEdadMaxima = nombreActual;
						cantidadPersonasEdadMaxima = 1;
					}
					else
					{
						if (edadActual < edadMinima)
						{
							edadMinima = edadActual;
							sexoEdadMinima = sexoActual;
							nombreEdadMinima = nombreActual;
							cantidadPersonasEdadMinima = 1;
						}
					}
			}
		}

		if (edadActual < 18)
		{
			cantidadMenoresEdad = cantidadMenoresEdad + 1;

			if (edadActual < 13)
			{
				if (sexoActual == "m")
				{
					cantidadNinosHombres = cantidadNinosHombres + 1;
				}
			}
			else
			{
				cantidadAdolescentes = cantidadAdolescentes + 1;

				if (sexoActual == "f")
				{
					cantidadAdolescentesMujeres = cantidadAdolescentesMujeres + 1;

				}
			}
		}

		if (edadActual %2 == 0)
		{
			cantidadEdadesPares = cantidadEdadesPares + 1;
		}

		switch(sexoActual)
		{
			case "f":
				sumaEdadMujeres = sumaEdadMujeres + edadActual;
				cantidadMujeres = cantidadMujeres + 1;
				break;

			case "m":
				sumaEdadHombres = sumaEdadHombres + edadActual;
				cantidadHombres = cantidadHombres + 1;
				break; 
		}

		sumaEdades = sumaEdades + edadActual;

		respuesta = prompt ("¿Desea seguir ingresando datos?");
		bandera = false;
	}

	promedioEdad = sumaEdades / cantidadPersonas;
	promedioEdadMujeres = sumaEdadMujeres / cantidadMujeres;
	promedioEdadHombres = sumaEdadHombres / cantidadHombres;

	mensaje = "Nivel 1";

	mensaje = mensaje+ "<br><br>Cantidad de personas: "+cantidadPersonas;
	mensaje = mensaje+"<br>Cantidad de mayores de edad: "+cantidadMayoresEdad;
	mensaje = mensaje+"<br>Cantidad de menores de edad: "+cantidadMenoresEdad;
	mensaje = mensaje+"<br>Cantidad de adolescentes: "+cantidadAdolescentes;
	mensaje = mensaje+"<br>Edad más vieja: "+ edadMaxima;
	mensaje = mensaje+"<br>Edad más joven: "+ edadMinima;

	mensaje = mensaje+"<br><br>Nivel 2";

	mensaje = mensaje+"<br><br>Cantidad de mujeres: "+ cantidadMujeres;
	mensaje = mensaje+"<br>Cantidad de hombres: "+cantidadHombres;
	mensaje = mensaje+"<br>Cantidad de adolescentes mujeres: "+cantidadAdolescentesMujeres;
	mensaje = mensaje+"<br>Cantidad de niños hombres: "+cantidadNinosHombres;
	mensaje = mensaje+"<br>Promedio de edad: "+promedioEdad;
	mensaje = mensaje+"<br>Promedio de edad de mujeres: " + promedioEdadMujeres;
	mensaje = mensaje+"<br>Promedio de edad de hombres: "+promedioEdadHombres;
	mensaje = mensaje+"<br>Cantidad de edades pares: "+cantidadEdadesPares;

	mensaje = mensaje+"<br><br>Nivel 3";

	mensaje = mensaje+"<br><br>Nombre de la persona más vieja: "+nombreEdadMaxima;
	mensaje = mensaje+"<br>Nombre de la persona más joven: "+nombreEdadMinima;
	mensaje = mensaje+"<br>Sexo de la persona más vieja: "+sexoEdadMaxima;
	mensaje = mensaje+"<br>Sexo de la persona más joven: "+sexoEdadMinima;

	mensaje = mensaje+"<br><br>Nivel Dios";

	mensaje = mensaje+"<br><br>Cantidad de personas con la edad mínima: "+ cantidadPersonasEdadMinima;
	mensaje = mensaje+"<br>Cantidad de personas con la edad máxima: "+cantidadPersonasEdadMaxima;
	mensaje = mensaje+"<br>Nombre de la última persona con la mayor edad encontrada: "+nombreEdadMaxima;
	mensaje = mensaje+"<br>Nombre de la última persona con la menor edad encontrada: "+nombreEdadMinima;

	document.write(mensaje);

}//FIN DE LA FUNCIÓN