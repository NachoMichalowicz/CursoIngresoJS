/*
Michalowicz Ignacio

Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/

function mostrar()
{	// declarar variables
	var banderaDelPrimero;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;
	//iniciar variables
	banderaDelPrimero=false;

	respuesta='si';

	while(respuesta=="si")
	{
		numeroIngresado = prompt("Ingrese un número");
		numeroIngresado = parseInt(numeroIngresado);

		if (banderaDelPrimero)
		{
			if (numeroIngresado > numeroMaximo)
			{
				numeroMaximo = numeroIngresado;
			}
			else
			{
				if (numeroIngresado < numeroMinimo)
				{
					numeroMinimo = numeroIngresado;
				}
			}
		}
		else
		{
			numeroMaximo = numeroIngresado;
			numeroMinimo = numeroIngresado;

			banderaDelPrimero = true;
		}

		respuesta=prompt("desea continuar?");
	}

	txtIdMaximo.value=numeroMaximo;
	txtIdMinimo.value=numeroMinimo;
	
}//FIN DE LA FUNCIÓN