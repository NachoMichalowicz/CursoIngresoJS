/*
Michalowicz Ignacio

Al selecionar un destino , indicar el punto cardinal de nuestro pais en donde se encuentra Norte, Sur, Este u Oeste
*/

function mostrar()
{
	var destinoIngresado =txtIdDestino.value;
	var puntoCardinal;


	switch(destinoIngresado)
	{
		case "Bariloche":
			puntoCardinal = "Oeste";
			break;
		case "Mar del plata":
			puntoCardinal = "Este";
			break;
		case "Cataratas":
			puntoCardinal = "Norte";
			break;
		case "Ushuaia":
			puntoCardinal = "Sur";
	}
	
	alert(puntoCardinal);

}//FIN DE LA FUNCIÓN