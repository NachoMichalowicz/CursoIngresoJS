/*
Michalowicz Ignacio

Enunciado:
al seleccionar un mes informar.
si tiene 28 días.
si tiene 30 días.
si tiene 31 días.

*/

function mostrar()
{
	//tomo el mes
	var mesDelAño =txtIdMes.value;
	var mensaje;

	switch (mesDelAño)
	{
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			mensaje = "tiene 30 días.";
			break;
		case "Febrero":
			mensaje = "tiene 28 días.";
			break;
		default:
			mensaje = "tiene 31 días.";
	}

	alert(mensaje);	
}//FIN DE LA FUNCIÓN