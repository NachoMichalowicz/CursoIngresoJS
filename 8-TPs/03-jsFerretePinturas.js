/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var tempFahren;
	var tempCenti;

	tempFahren = txtIdTemperatura.value;

	tempFahren = parseInt(tempFahren);

	tempCenti = (tempFahren - 32) * 5/9;

	alert(tempFahren+"° Fahrenheit son "+tempCenti+"° Centígrados");

	/*
	var tempFahren;
	var tempCenti;

	tempFahren = txtIdTemperatura.value;
	tempFahren = parseInt(tempFahren);

	tempCenti = tempFahren - 32;
	tempCenti = tempCenti * 5/9;

	alert(tempFahren+" Fahrenheit son "+tempCenti+" centígrados");
	*/

}

function CentigradosFahrenheit () 
{
	var tempCenti;
	var tempFahren;

	tempCenti = txtIdTemperatura.value;

	tempCenti = parseInt(tempCenti);

	tempFahren = (tempCenti * 9/5) + 32;

	alert(tempCenti+"° Centígrados son "+tempFahren+"° Fahrenheit");

	/*
	var tempCenti;
	var tempFahren;

	tempCenti = txtIdTemperatura.value;
	tempCenti = parseInt(tempCenti);

	tempFahren = tempCenti * 9/5;
	tempFahren = tempFahren + 32;

	alert(tempCenti+" Centígrados son "+tempFahren+" Fahrenheit");
	*/
}
