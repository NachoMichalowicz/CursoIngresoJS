/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	var numeroIngresado;

	numeroIngresado = 11;

	numeroIngresado = prompt("ingrese un número entre 0 y 10.");
	numeroIngresado = parseInt(numeroIngresado);
	
	while (numeroIngresado > 10 || numeroIngresado < 0)
	{
		numeroIngresado = prompt("ERROR. ingrese un número entre 0 y 10.");
		txtIdNumero.value = numeroIngresado;
	}
	
	
}//FIN DE LA FUNCIÓN