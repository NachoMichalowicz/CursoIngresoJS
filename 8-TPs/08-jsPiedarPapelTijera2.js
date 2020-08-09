var eleccionMaquina;
var eleccionHumana;
var ContadorDeEmpates=0;
var ContadorDeGanadas=0;
var ContadorDePerdidas=0;

function comenzar()
{
	var eleccion;

	//Genero el número RANDOM entre 1 y 3
	eleccionMaquina = (Math.random() * 3) + 1;
	eleccionMaquina = parseInt(eleccionMaquina);

}//FIN DE LA FUNCIÓN

function piedra()
{
	eleccionHumana = 1;
	mostrarResultado();

}//FIN DE LA FUNCIÓN
function papel()
{
	eleccionHumana = 2;
	mostrarResultado();

}//FIN DE LA FUNCIÓN
function tijera()
{
	eleccionHumana = 3;
	mostrarResultado();

}//FIN DE LA FUNCIÓN

function mostrarResultado()
{
	var contraEleccionHumana;
	contraEleccionHumana = eleccionHumana + 1;

	if (contraEleccionHumana > 3)
	{
		contraEleccionHumana = 1;
	}

	switch(eleccionMaquina)
	{
		case contraEleccionHumana:
			ContadorDePerdidas = ContadorDePerdidas + 1;
			alert("Pérdida");
			break;

		case eleccionHumana:
			ContadorDeEmpates = ContadorDeEmpates + 1;
			alert("Empate");
			break;

		default:
			ContadorDeGanadas = ContadorDeGanadas + 1;
			alert("Ganó");
	}

	txtIdGanadas.value = ContadorDeGanadas;
	txtIdPerdidas.value = ContadorDePerdidas;
	txtIdEmpatadas.value = ContadorDeEmpates;

	comenzar();	
}