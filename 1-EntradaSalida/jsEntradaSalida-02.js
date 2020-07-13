/*
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var name; 
	name = prompt("Please enter your name", "Harry Potter");

	alert("El nombre ingresado es: "+name);
    //alert("ok");

    name = "María";

    alert(name);


    /*test:

    nombre = "María";
    alert(nombre);

    errores:

    nombre = María; (variable indefinida)
    alert(María); (no se refiere a la variable)


    */
}

