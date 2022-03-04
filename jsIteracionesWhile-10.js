/*
Gianfranco Gentili
Ejercicio 1 parcial 2022

El parcial se puede realizar en cualquier ejercicio de la guía o en los fuentes del parcial 2020 

1)De 5  personas que ingresan al hospital se deben tomar y validar los siguientes datos.

nombre ,sexo, latidos por minuto, peso y si está vacunado o no contra el sarampión:
a)informar la cantidad de personas vacunadas y no vacunadas.
b)el peso promedio en total
c)el hombre con menos latidos por minuto y la mujer con más latidos por minuto
pedir datos por prompt y mostrar por document.write*/
function mostrar()
{
	let nombreIngresado;
	let sexoIngresado;
	let latidosIngresados;
	let pesoIngresado;
	let estadoVacunacion;
	let mujersConMasLatidos;
	let hombreConMenosLatidos;
	let pesoTotal = 0;
	let cantidadPersonas = 0;
	let cantidadPersonasNoVacunadas = 0;
	let cantidadPersonasVacunadas = 0;
	banderaHombreConMenosLatidos = true;
	banderaMujerConMasLatidos = true;

	while (cantidadPersonas<5){
         
		cantidadPersonas++;

		nombreIngresado = prompt("ingrese su nombre porfavor");

		sexoIngresado = prompt("ingrese su sexo por favor(masculino/femenino");

		while(sexoIngresado != "masculino" && sexoIngresado!= "femenino"){
		sexoIngresado = prompt("ingrese un sexo dentro de los estipulados(masculino/femenino)")	
		}

		latidosIngresados = prompt("ingrese sus latidos por minuto");
		latidosIngresados = parseInt(latidosIngresados);

		while(isNaN(latidosIngresados)){
		latidosIngresados = prompt("ingrese una cantidad numerica de latidos por favor")
		latidosIngresados = parseInt(latidosIngresados)	
		}

		pesoIngresado = prompt("Ingrese su peso por favor");
		pesoIngresado = parseInt(pesoIngresado);
		pesoTotal = pesoTotal + pesoIngresado;

		while(isNaN(pesoIngresado)){
			pesoIngresado = prompt("Ingrese un peso numerico por favor");
		pesoIngresado = parseInt(pesoIngresado)
		}

		estadoVacunacion = prompt("se encuentra vacunado? responda con  'me vacune' o 'no me vacune'");

		while(estadoVacunacion != "me vacune" && estadoVacunacion != "no me vacune"){
		estadoVacunacion = prompt("ingrese opcion 1= me vacune o opcion 2 = no me vacune")	

		}
		if(estadoVacunacion == "me vacune"){
			cantidadPersonasVacunadas = cantidadPersonasVacunadas + 1;
			}
			if(estadoVacunacion == "no me vacune"){
				cantidadPersonasNoVacunadas = cantidadPersonasNoVacunadas + 1;
				}
		
			if(banderaHombreConMenosLatidos == true && sexoIngresado == "masculino"){
				banderaHombreConMenosLatidos = false;
				hombreConMenosLatidos = latidosIngresados;
			}
			else{
				if(latidosIngresados<hombreConMenosLatidos){
				hombreConMenosLatidos = latidosIngresados	;
				}
			}		
			if(banderaMujerConMasLatidos == true && sexoIngresado == "femenino"){
				banderaMujerConMasLatidos = false;
				mujersConMasLatidos = latidosIngresados;
			}
			else{
				if(latidosIngresados>mujersConMasLatidos){
					banderaMujerConMasLatidos = latidosIngresados;
				}
			}
	}
    promedioPeso = pesoTotal/5;

	document.write("la cantida de personas vacunadas es de " + cantidadPersonasVacunadas + " y la cantidad de personas no vacunadas es de " + cantidadPersonasNoVacunadas + "<br>");
	document.write("el peso promedio en total es de " + promedioPeso + "<br>");
	document.write("el hombre con menos latidos por minuto es de " + hombreConMenosLatidos + " y la mujer con mas latidos es de " + mujersConMasLatidos + "<br>");



	
			
		
	
		
	
}//FIN DE LA FUNCIÓN