/*
Ignacio Michalowicz

Enunciado:
Al ingresar una edad debemos informar si la persona es mayor de edad (mas de 18 años) o adolescente (entre 13 y 17 años) o niño (menor a 13 años).
*/

function mostrar()
{
	var edad;
	var estadoPersona;

	edad = txtIdEdad.value;

	edad = parseInt(edad);


	if (edad > 17)
	{
		estadoPersona = "mayor de edad";

	} else
	{
		if (edad < 13)
		{
			estadoPersona = "niño";

		} else
		{
			estadoPersona = "adolescente";

		}
	}

	alert("Usted es un "+estadoPersona);

}//FIN DE LA FUNCIÓN