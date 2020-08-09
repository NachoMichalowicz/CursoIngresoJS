/*

Michalowicz Ignacio

Enunciado:
una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada estadia como base, se pide el ingreso de una estacion del año y localidad para vacacionar para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento del 10% Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento del 10% Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10% Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento
*/
function mostrar()
{
	var estacionIngresada =txtIdEstacion.value;
	var destinoIngresado;
	var precio; 
	var porcentaje;

	destinoIngresado = txtIdDestino.value;

	switch(estacionIngresada)
	{
		case "Invierno":
			switch(destinoIngresado)
			{
				case "Bariloche":
					porcentaje = 1.2;
					break;
				case "Mar del plata":
					porcentaje = 0.8;
					break;
				default:
					porcentaje = 0.9; 
			}
			break;

		case "Verano":
			switch(destinoIngresado)
			{
				case "Bariloche":
					porcentaje = 0.8;
					break;
				case "Mar del plata":
					porcentaje = 1.2;
					break;
				default:
					porcentaje = 1.1;
			}
			break;

		default:
			switch(destinoIngresado)
			{
				case "Cordoba":
					porcentaje = 1;
					break;
				default:
					porcentaje = 1.1;
			}
	}

	precio = 15000 * porcentaje;
	alert("El precio final es: " + precio);

}//FIN DE LA FUNCIÓN