/*
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	
	var nombre;

	nombre = prompt("Escriba un nombre", "Nombre");

	alert(nombre);

    /*test:

    nombre = "María";
    alert(nombre);

    errores:

    nombre = María; (variable indefinida)
    alert(María); (no se refiere a la variable)


    */
}

