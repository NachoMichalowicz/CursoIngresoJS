/*

Michalowicz Ignacio

Enunciado:
Bienvenidos (IF).
Pedir dos números y mostrar el resultado:
Si son iguales los muestro el cuadrado del numero.
Si el primero divisible por el segundo, los resto,
de lo contrario muestro solo el resto.
si el resto es mayor a 3(tres ) informarlo por alert.
*/

function mostrar()
{
	var numero1;
	var numero2;

	var resto;
	var resultado;

	numero1 = prompt("Ingrese un número");
	numero1 = parseInt(numero1);

	numero2 = prompt("Ingrese otro número");
	numero2 = parseInt(numero2);

	if (numero1 == numero2)
	{
		resultado = numero1 * numero1;
	}
	else
	{
		resto = numero1%numero2;

		if (resto == 0)
		{
			resultado = numero1 - numero2;
		}
		else
		{
			resultado = resto;

			if (resto > 3)
			{
				alert("El resto es mayor a 3");
			}
		}
	}

	alert(resultado);
}
