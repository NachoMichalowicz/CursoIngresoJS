/*
Michalowicz Ignacio

Enunciado:
Al seleccionar un destino informar si hace FRIO o CALOR en ese destino
*/

function mostrar()
{
	var destinoIngresado =txtIdDestino.value;
	var clima;

	switch(destinoIngresado)
	{
		case "Ushuaia":
		case "Bariloche":
			clima = "Frío";
			break;
		default:
			clima = "Calor";
	}

	alert(clima);

}//FIN DE LA FUNCIÓN