/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var nombreIngresado;

	/*
	error:
	nombreIngresado = txtIdNombre[object HTML InputElement]

	Posibles formas:

	nombreIngresado=document.getElementById('txtIdNombre').value	
	nombreIngresado=txtIdNombre.value;

	*/

	nombreIngresado=txtIdNombre.value;
	
	alert(nombreIngresado);

}


