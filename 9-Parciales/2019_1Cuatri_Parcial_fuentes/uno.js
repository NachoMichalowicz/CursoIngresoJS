/*
Enunciado:
Bienvenidos.
Realizar el algoritmo que pida los datos necesarios para un triángulo equilátero por prompt y que muestre el perímetro por alert.
*/

function mostrar()
{
	var longitudLado;
	var perimetro;

	longitudLado = prompt("Ingrese la longitud de los lados del triángulo");
	longitudLado = parseInt(longitudLado);

	while (isNaN(longitudLado))
	{
		longitudLado = prompt("ERROR. Ingrese una longitud numérica válida");
	}

	perimetro = longitudLado * 3;

	alert("El perímetro es: " + perimetro + " metros.");
}
