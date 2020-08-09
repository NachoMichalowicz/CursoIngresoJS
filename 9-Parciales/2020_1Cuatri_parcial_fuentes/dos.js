/*
Michalowicz Ignacio

Enunciado:

Realizar el algoritmo que permita ingresar los datos de una compra de productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),
al terminar la compra el cliente accede a un descuento segun las bolsas en total
Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo ("arena";"cal";"cemento") con mas cantidad de bolsas en el total de la compra.
f) El tipo mas caro
Curso de ingreso UTN FRA

*/

function mostrar()
{
  var respuesta;
  var mensaje;

  var tipoActual;
  var cantidadActual;
  var precioActual;
  var precioTotalActual;

  var sumaPrecioTotal;

  var cantidadTotalBolsas;

  var descuento;

  var cantidadArena;
  var cantidadCal;
  var cantidadCemento;
  var tipoMayorCantidad;

  var sumaPrecioArena;
  var sumaPrecioCal;
  var sumaPrecioCemento;
  var tipoMasCaro;


  sumaPrecioTotal = 0;

  sumaPrecioArena = 0;
  sumaPrecioCal = 0;
  sumaPrecioCemento = 0;

  cantidadTotalBolsas = 0;

  cantidadArena = 0;
  cantidadCal = 0;
  cantidadCemento = 0;

  respuesta = true;

  while (respuesta)
  {
    tipoActual = prompt("Ingrese un tipo de producto (arena, cal o cemento)");
    tipoActual = tipoActual.toLowerCase();

    while (tipoActual != "arena" && tipoActual != "cal" && tipoActual != "cemento")
    {
      tipoActual = prompt("ERROR. Ingrese un tipo válido de producto (arena, cal o cemento)");
      tipoActual = tipoActual.toLowerCase();
    }

    cantidadActual = prompt("Ingrese una cantidad de bolsas.");
    cantidadActual = parseInt(cantidadActual);

    while (isNaN(cantidadActual) || cantidadActual < 1)
    {
      cantidadActual = prompt("ERROR. Ingrese una cantidad numérica de bolsas mayor a 0.");
      cantidadActual = parseInt(cantidadActual);
    }

    precioActual = prompt("Ingrese un precio por bolsa (más de cero)");
    precioActual = parseInt(precioActual);


    while (isNaN(precioActual) || precioActual < 0)
    {
      precioActual = prompt("ERROR. Ingrese un precio válido por bolsa (más de cero)");
      precioActual = parseInt(precioActual);
    }

    respuesta = confirm("¿Desea seguir ingresando datos?");


    precioTotalActual = precioActual * cantidadActual;
    cantidadTotalBolsas = cantidadTotalBolsas + cantidadActual;
    sumaPrecioTotal = sumaPrecioTotal + precioTotalActual;

    switch(tipoActual)
    {
      case "arena":
        cantidadArena = cantidadArena + cantidadActual;
        sumaPrecioArena = sumaPrecioArena + precioTotalActual;
        break;

      case "cal":
        cantidadCal = cantidadCal + cantidadActual;
        sumaPrecioCal = sumaPrecioCal + precioTotalActual;
        break;

      case "cemento":
        cantidadCemento = cantidadCemento + cantidadActual;
        sumaPrecioCemento = sumaPrecioCemento + precioTotalActual;
    } 
  }

  mensaje = "Importe bruto total a pagar sin descuento: " +sumaPrecioTotal;

  if (cantidadTotalBolsas > 10)
  {
    if (cantidadTotalBolsas > 30)
    {
      descuento = 25;
    }
    else
    {
      descuento = 15;
    }

    descuento = descuento * sumaPrecioTotal;
    descuento = descuento / 100;

    sumaPrecioTotal = sumaPrecioTotal - descuento;

    mensaje = mensaje+ "<br>Importe total a pagar con descuento: " +sumaPrecioTotal;
  }

  if (cantidadArena > cantidadCemento && cantidadArena > cantidadCal)
  {
    tipoMayorCantidad = "arena";
  }
  else
  {
    if (cantidadCal > cantidadArena && cantidadCal > cantidadCemento)
    {
      tipoMayorCantidad = "cal";
    }
    else
    {
      tipoMayorCantidad = "cemento";
    }
  }

  mensaje = mensaje+ "<br>Tipo con más cantidad de bolsas: " +tipoMayorCantidad;

  if (sumaPrecioCemento > sumaPrecioArena && sumaPrecioCemento > sumaPrecioCal)
  {
    tipoMasCaro = "cemento";
  }
  else
  {
    if (sumaPrecioCal > sumaPrecioArena && sumaPrecioCal > sumaPrecioCemento)
    {
      tipoMasCaro = "cal";
    }
    else
    {
      tipoMasCaro = "arena";
    }
  }

  mensaje = mensaje+ "<br>Tipo más caro: " +tipoMasCaro;


  document.write(mensaje);
}


/*
Enunciado:

Realizar el algoritmo que permita ingresar los datos de una compra de productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),
al terminar la compra el cliente accede a un descuento segun las bolsas en total
Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo ("arena";"cal";"cemento") con mas cantidad de bolsas en el total de la compra.
f) El tipo mas caro
Curso de ingreso UTN FRA

*/