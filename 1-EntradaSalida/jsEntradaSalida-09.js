/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/

function mostrarAumento()
{
	var importe;
	var resultado;
	//var aumento;

	importe = txtIdSueldo.value;
	importe = parseInt(importe);

	//aumento = importe * 10  //regla de tres simple
	//aumento = aumento / 100;

	resultado = importe * 1.1;
	txtIdResultado.value = resultado;
	
}
