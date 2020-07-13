/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	//Concatenando dos variables de texto:

	var nombreIngresado;
	var edadIngresada;

	nombreIngresado = txtIdNombre.value;
	edadIngresada = txtIdEdad.value;

	alert("Usted se llama "+nombreIngresado+" y tiene "+edadIngresada+" años");

	/*Formas de concatenar:

	    1:
		alert("Usted se llama "+nombreIngresado+" y tiene "+edadIngresada+" años");

		2:
		alert("Usted se llama "+nombreIngresado);
	    alert("y tiene "+edadIngresada+" años");

	*/

}

