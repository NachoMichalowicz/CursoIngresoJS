/*
Michalowicz Ignacio

RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */

function ComenzarIngreso () 
{
 	//definicion de variables
 	var edadIngresada;
 	var sexoIngresado;
 	var estadoCivilIngresado;
 	var sueldoBrutoIngresado;
 	var numeroLegajoIngresado;
 	var nacionalidadIgresada;

 	edadIngresada = prompt("Ingrese una edad entre 18 y 90 años inclusive");
 	edadIngresada = parseInt(edadIngresada);

 	while(edadIngresada < 18 || edadIngresada > 90)
 	{
 		edadIngresada = prompt("ERROR. Ingrese una edad entre 18 y 90 años inclusive");
 		edadIngresada = parseInt(edadIngresada);
 	}

 	sexoIngresado = prompt("Ingrese un sexo. \"M\" para masculino o \"F\" para femenino");

 	while (sexoIngresado != "M" && sexoIngresado != "F")
 	{
 		sexoIngresado = prompt("Sexo invalido. Ingrese en mayúsculas \"M\" para masculino o \"F\" para femenino");
 	}

 	estadoCivilIngresado = prompt("Ingrese un estado civil mediante un número. 1:soltero 2:casado 3:divoricado 4:viudo");
 	estadoCivilIngresado = parseInt(estadoCivilIngresado);

 	while (estadoCivilIngresado > 4 || estadoCivilIngresado < 1 || Number.isNaN(estadoCivilIngresado))
 	{
  		estadoCivilIngresado = prompt("ERROR, el número ingresado no es válido. Ingrese un estado civil mediante un número. 1:soltero 2:casado 3:divoricado 4:viudo");
 		estadoCivilIngresado = parseInt(estadoCivilIngresado);		
 	}

 	sueldoBrutoIngresado = prompt("Ingrese un sueldo bruto mayor a 8000.");
 	sueldoBrutoIngresado = parseInt(sueldoBrutoIngresado);

 	while (sueldoBrutoIngresado < 8000 || Number.isNaN(sueldoBrutoIngresado))
 	{
 		sueldoBrutoIngresado = prompt("ERROR. Ingrese un sueldo bruto válido mayor a 8000.");
 	    sueldoBrutoIngresado = parseInt(sueldoBrutoIngresado);
 	}

 	numeroLegajoIngresado = prompt("Ingrese un número de legajo de 4 cifras sin ceros a la izquierda.");
 	numeroLegajoIngresado = parseInt(numeroLegajoIngresado);

 	while (numeroLegajoIngresado < 1000 || numeroLegajoIngresado > 9999 || Number.isNaN(numeroLegajoIngresado))
 	{
 		numeroLegajoIngresado = prompt("ERROR. Ingrese un número de legajo de 4 cifras sin ceros a la izquierda.");
 		numeroLegajoIngresado = parseInt(numeroLegajoIngresado);
 	}

 	nacionalidadIgresada = prompt("Ingrese una nacionalidad. “A” para argentinos. “E” para extranjeros, “N” para nacionalizados.");

 	while(nacionalidadIgresada != "A" && nacionalidadIgresada != "E" && nacionalidadIgresada != "N")
 	{
 		nacionalidadIgresada = prompt("ERROR. Ingrese una nacionalidad válida en mayúsculas. “A” para argentinos. “E” para extranjeros, “N” para nacionalizados."); 
 	}

 	switch(sexoIngresado)
 	{
 		case "M":
 			sexoIngresado = "Masculino";
 			break;
 		case "F":
 			sexoIngresado = "Femenino";
 			break;
 	}

 	switch(estadoCivilIngresado)
 	{
 		case 1:
 			estadoCivilIngresado = "Soltero";
 			break;
 		case 2:
 			estadoCivilIngresado = "Casado";
 			break;
 		case 3:
 			estadoCivilIngresado = "Divorciado";
 			break;
 		case 4:
 			estadoCivilIngresado = "Viudo";
 			break;
 	}

 	switch(nacionalidadIgresada)
 	{
 		case "A":
 			nacionalidadIgresada = "Argentina";
 			break;
 		case "E":
 			nacionalidadIgresada = "Extranjero";
 			break;
 		case "N":
 			nacionalidadIgresada = "Nacionalizados";
 			break;
 	}

	txtIdEdad.value = edadIngresada;
 	txtIdSexo.value = sexoIngresado;
 	txtIdEstadoCivil.value = estadoCivilIngresado;
 	txtIdSueldo.value = sueldoBrutoIngresado;
 	txtIdLegajo.value = numeroLegajoIngresado;
 	txtIdNacionalidad.value = nacionalidadIgresada;
}
