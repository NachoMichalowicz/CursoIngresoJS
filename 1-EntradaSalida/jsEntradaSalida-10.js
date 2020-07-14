/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe;
	var importeFinal;
	//var descuento;

	importe = txtIdImporte.value;
	importe = parseInt(importe);

	//descuento = importe * 25;
	//descuento = descuento / 100;
	
	//importeFinal = importe - descuento;

	importeFinal = importe * 0.75;

	txtIdResultado.value = importeFinal;

}
