function mostrar()
{
	var edad;
	var esMayor;

	edad = txtIdEdad.value;

	edad = parseInt(edad);

	esMayor = edad > 17;
	
	if (esMayor)
	{
		alert("Usted es mayor");
	} 
}//FIN DE LA FUNCIÓN