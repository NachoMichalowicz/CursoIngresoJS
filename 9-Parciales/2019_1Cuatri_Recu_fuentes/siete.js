/*
Michalowicz Ignacio

Enunciado:
Bienvenidos.
Realizar el algoritmo que permita el ingreso de 10 bolsas de alimento por prompt,con los kilos (validar entre 0 y 500) , sabor validar(carne vegetales pollo) e informar por alert:
a) El promedio de los kilos totales.
b) El mas liviano y su sabor
c) La cantidad de sabor carne y el promedio de kilos de sabor carne
*/

function mostrar()
{
	var contador;
	var bandera;

	var cantidadBolsasActual;
	var kilosActual;
	var saborActual;

	var promedioKilosTotal;
	var cantidadBolsasTotal;
	var sumaKilosTotal;

	var kilosMinimo;
	var saborKilosMinimo;

	var promedioKilosSaborCarne;
	var cantidadSaborCarne;
	var sumaKilosSaborCarne;

	var mensaje;

	contador = 0;
	bandera = false;

	cantidadBolsasTotal = 0;
	sumaKilosTotal = 0;

	cantidadSaborCarne = 0;
	sumaKilosSaborCarne = 0;

	while (contador < 10)
	{
		cantidadBolsasActual = prompt("Ingrese una cantidad de bolsas.");
		cantidadBolsasActual = parseInt(cantidadBolsasActual);

		while (isNaN(cantidadBolsasActual))
		{
			cantidadBolsasActual = prompt("ERROR. Ingrese una cantidad numérica de bolsas.");
			cantidadBolsasActual = parseInt(cantidadBolsasActual);
		}

		kilosActual = prompt("Ingrese una cantidad de kilos. (entre 0 y 500)");
		kilosActual = parseInt(kilosActual);

		while (isNaN(kilosActual) || kilosActual < 0 || kilosActual > 500)
		{
			kilosActual = prompt("ERROR. Ingrese una cantidad válida de kilos. (entre 0 y 500)");
			kilosActual = parseInt(kilosActual);
		}

		saborActual = prompt("Ingrese un sabor. (carne, vegetales o pollo)");
		saborActual = saborActual.toLowerCase();

		while(saborActual != "carne" && saborActual != "vegetales" && saborActual != "pollo")
		{
			saborActual = prompt("ERROR. Ingrese un sabor válido. (carne, vegetales o pollo)");
			saborActual = saborActual.toLowerCase();
		}

		if (bandera)
		{
			if (kilosActual < kilosMinimo)
			{
				kilosMinimo = kilosActual;
				saborKilosMinimo = saborActual;
			}
		}
		else
		{
			kilosMinimo = kilosActual;
			saborKilosMinimo = saborActual;
		}

		kilosActual = kilosActual * cantidadBolsasActual;

		cantidadBolsasTotal = cantidadBolsasTotal + cantidadBolsasActual;
		sumaKilosTotal = sumaKilosTotal + kilosActual;

		if (saborActual == "carne")
		{
			cantidadSaborCarne = cantidadSaborCarne + cantidadBolsasActual;
			sumaKilosSaborCarne = sumaKilosSaborCarne + kilosActual;
		}

		contador = contador + 1;
		bandera = true;
	}

	promedioKilosTotal = sumaKilosTotal / cantidadBolsasTotal;
	promedioKilosSaborCarne = sumaKilosSaborCarne / cantidadSaborCarne;

	mensaje = "Promedio de los kilos totales: "+promedioKilosTotal;
	mensaje = mensaje+"<br>La bolsa más liviana contiene "+kilosMinimo+" kilos, y su sabor es "+saborKilosMinimo;
	mensaje = mensaje+"<br>Cantidad de sabor carne: "+cantidadSaborCarne;
	mensaje = mensaje+"<br>Promedio de kilos sabor carne: "+promedioKilosSaborCarne;

	document.write(mensaje);
}
