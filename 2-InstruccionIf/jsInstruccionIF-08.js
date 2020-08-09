/*
Michalowicz Ignacio

Enunciado:

Se pide ingresar una edad y un estado civil
	a todos los mayores de edad, mostrar el mensaje "se responsable"
	a todos los menores de edad, mostrar el mensaje "respeta a tus mayores"
	a los adultos mayores( mas de 60 años) tambien informar "sos persona de riesgo"
	a los niños tambien informar "hagan la tarea" 
	a los adolescentes casado o Divorciado " sos muy joven para no ser soltero"
	a los mayores de edad solteros, tambien informar "a vivir la vida"
	a los mayores de edad casados , tambien informar "a disfrutar la pareja"
	a los divorciados informar tambien "a intentarlo nuevamente"

    la menor cantidad de if 
    no repetir los alert o los mensajes
*/

function mostrar()
{
	var edadIngresada;
	var estadoCivilIngresado;
	var mensaje;

	edadIngresada = txtIdEdad.value;
	edadIngresada = parseInt(edadIngresada);

	estadoCivilIngresado = estadoCivil.value;


	if (edadIngresada < 18)
	{
		mensaje = "respeta a tus mayores ";

		switch(edadIngresada)
		{
			case 13:
			case 14:
			case 15:
			case 16:
			case 17:

				if (estadoCivilIngresado != "Soltero")
				{
					mensaje = mensaje + "\nsos muy joven para no ser soltero";
				}
				break;

			default:
				mensaje = mensaje + "\nhagan la tarea";
		}
	}
	else
	{
		mensaje = "se responsable";

		switch (estadoCivilIngresado)
		{
			case "Soltero":
				mensaje = mensaje + "\na vivir la vida";
				break;
			case "Casado":
				mensaje = mensaje + "\na disfrutar la pareja";
				break;
			case "Divorciado":
				mensaje = mensaje + "\na intentarlo nuevamente";	
		}

		if (edadIngresada > 60)
		{
			mensaje = mensaje + "\nsos persona de riesgo";
		}
	}

	alert(mensaje);


}//FIN DE LA FUNCIÓN