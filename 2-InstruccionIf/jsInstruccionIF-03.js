/*
Ignacio Michalowicz

Enunciado:
Al ingresar una edad debemos informar si la persona es mayor de edad, sino informar que es un menor de edad.

*/
function mostrar()
{
	var edad;
	var mensaje;
	var esMayor;

	edad = txtIdEdad.value;

	edad = parseInt(edad);

	esMayor = edad > 17;

	if (esMayor)
	{
		mensaje = "Usted es mayor";
	} 

	if (!esMayor)
	{
		mensaje = "Usted no es mayor";
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN