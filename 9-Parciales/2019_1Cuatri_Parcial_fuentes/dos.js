/*
Enunciado:
Bienvenidos.
A una pareja se le pide los datos para mostrar un mensaje " ustedes se llaman xxxxx y xxxx pesan xx y xx kilos, que sumados son xx kilos y el promedio de peso xx ".
*/
function mostrar()
{
	var nombre1;
	var nombre2;

	var peso1;
	var peso2;

	var sumaPeso;
	var promedioPeso;

	nombre1 = prompt("Ingrese el primer nombre");
	nombre2 = prompt("Ingrese el segundo nombre");

	peso1 = prompt("Ingrese el primer peso");
	peso1 = parseInt(peso1);

	while (isNaN(peso1) || peso1 < 0)
	{
		peso1 = prompt("ERROR. Ingrese un primer peso numérico y mayor a 0");
	}

	peso2 = prompt("Ingrese el segundo peso");

	while (isNaN(peso2) || peso2 < 0)
	{
		peso2 = prompt("ERROR. Ingrese un segundo peso numérico y mayor a 0");
	}

	sumaPeso = peso1 + peso2;
	promedioPeso = sumaPeso / 2;

	alert("Ustedes se llaman "+nombre1+" y "+nombre2+" y pesan "+peso1+" y "+peso2+" kilos, que sumados son "+sumaPeso+" y el promedio de peso "+promedioPeso+" kilos");
}
