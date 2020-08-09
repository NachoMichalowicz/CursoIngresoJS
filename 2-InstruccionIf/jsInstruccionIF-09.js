/*
Michalowicz Ignacio

Enunciado:
Al presionar el Botón, mostrar un número Random del 1 al 10 inclusive
*/

function mostrar()
{
	var random;

	random = Math.random();
	random = (random * 10) + 1;
	random = Math.floor(random);

	alert("El número generado es: "+random);	

}//FIN DE LA FUNCIÓN
