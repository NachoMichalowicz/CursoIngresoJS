/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var precio1;
	var precio2;
	var precio3;
	var suma;

	precio1 = txtIdPrecioUno.value;
	precio2 = txtIdPrecioDos.value;
	precio3 = txtIdPrecioTres.value;

	precio1 = parseInt(precio1);
	precio2 = parseInt(precio2);
	precio3 = parseInt(precio3);

	suma = precio1+precio2+precio3;

	alert("La suma de los tres precios es: "+suma);
}
function Promedio () 
{
	var precio1;
	var precio2;
	var precio3;
	var promedio;

	precio1 = txtIdPrecioUno.value;
	precio2 = txtIdPrecioDos.value;
	precio3 = txtIdPrecioTres.value;

	precio1 = parseInt(precio1);
	precio2 = parseInt(precio2);
	precio3 = parseInt(precio3);

	promedio = precio1+precio2+precio3;
	promedio = promedio/3;

	alert("El promedio de la suma de los productos es: "+promedio);
}
function PrecioFinal () 
{
    var precio1;
	var precio2;
	var precio3;
	var precioFinal;

	precio1 = txtIdPrecioUno.value;
	precio2 = txtIdPrecioDos.value;
	precio3 = txtIdPrecioTres.value;

	precio1 = parseInt(precio1);
	precio2 = parseInt(precio2);
	precio3 = parseInt(precio3);

	precioFinal = precio1+precio2+precio3;
	precioFinal = precioFinal * 1.21;

	alert("El precio final más IVA es: "+precioFinal);
}