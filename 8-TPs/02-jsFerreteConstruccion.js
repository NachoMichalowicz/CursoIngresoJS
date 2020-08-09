/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largo;
	var ancho;
	var cantidadAlambre;

	var largo = txtIdLargo.value;
	var ancho = txtIdAncho.value;

	largo = parseInt(largo);
	ancho = parseInt(ancho);

	cantidadAlambre = largo * 2;
	cantidadAlambre = ancho * 2 + cantidadAlambre;
	cantidadAlambre = cantidadAlambre * 3;

	alert("La cantidad de alambre a comprar son: "+cantidadAlambre+" metros");

}
function Circulo () 
{
	var radio;
	var cantidadAlambre;

	radio = txtIdRadio.value;

	radio = parseInt(radio);

	cantidadAlambre = 2 * Math.PI;
	cantidadAlambre = cantidadAlambre * radio;
	cantidadAlambre = cantidadAlambre * 3;

	alert("La cantidad de alambre a comprar son: "+cantidadAlambre+" metros");
}
function Materiales () 
{
	var largo;
	var ancho;
	var supTerreno;
	var bolsasCemento;
	var bolsasCal;

	largo = txtIdLargo.value;
	ancho = txtIdAncho.value;

	largo = parseInt(largo);
	ancho = parseInt(ancho);

	supTerreno = largo*ancho;

	bolsasCemento = supTerreno*2;
	bolsasCal = supTerreno*3;

	alert("Se necesitan "+bolsasCemento+" bolsas de cemento y "+bolsasCal+" bolsas de cal");
}