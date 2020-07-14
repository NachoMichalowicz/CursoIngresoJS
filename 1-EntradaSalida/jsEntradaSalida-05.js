/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	//Concatenando dos variables de texto:

	var nombre;
	var edad;

	nombre = txtIdNombre.value;
	edad = txtIdEdad.value;

	alert("Usted se llama "+nombre+" y tiene "+edad+" años");

	/*Formas de concatenar:

	    1:
		alert("Usted se llama "+nombreIngresado+" y tiene "+edadIngresada+" años");

		2:
		alert("Usted se llama "+nombreIngresado);
	    alert("y tiene "+edadIngresada+" años");

	*/

}

