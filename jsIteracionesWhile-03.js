/*
El parcial se puede realizar en cualquier ejercicio de la guía o en los fuentes del parcial 2020 

2)De una compra debes ingresar una cantidad indeterminada de cortes de carne vacuna,
 validando los siguientes datos:

nombre del corte, precio, peso en kilogramos, tipo(con hueso o sin hueso)
a)informar el peso total de la compra.
b)el nombre del corte más caro de los sin hueso.
c)el nombre del corte más liviano de los con hueso.
*/
function mostrar()
{
	let respuesta = true
	let nombreIngresado
	let precioIngresado
	let pesoIngresado
	let pesoTotal = 0;
	let tipoDeCorte
	let masCaroSinHueso
	let elCorteMasLiviano
	let nombreDelMasLiviano
	let nombreDelMasCaro
	banderaDelMasCaroSinHueso = true
	banderaDelMasLiviano = true

	while(respuesta == true){
	
	nombreIngresado = prompt("ingrese el nombre del corte que desea por favor")
	
	precioIngresado = prompt("ingrese el precio de la compra que va realizar")
	precioIngresado = parseInt(precioIngresado)

	while(isNaN(precioIngresado)){
	precioIngresado = prompt("ingrese el precio de forma numerica")
	precioIngresado = parseInt(precioIngresado)
	}

	pesoIngresado = prompt("ingrese el peso solicitado")
	pesoIngresado = parseInt(pesoIngresado)
	pesoTotal = pesoTotal + pesoIngresado

	while(isNaN(pesoIngresado)){
	pesoIngresado = prompt("ingrese un peso numerico")
	precioIngresado = parseInt(precioIngresado)	
	}

	tipoDeCorte = prompt("ingrese un tipo de corte por favor(con hueso o sin hueso)")

	while(tipoDeCorte != "con hueso" && tipoDeCorte != "sin hueso"){
	tipoDeCorte = prompt("por favor ingrese uno de los tipos estipulados(con hueso o sin hueso)")	
	}
    if(banderaDelMasCaroSinHueso == true && tipoDeCorte == "sin hueso"){
		banderaDelMasCaroSinHueso = false
		masCaroSinHueso = precioIngresado
		nombreDelMasCaro = nombreIngresado	
		}
		else{
			if(precioIngresado<masCaroSinHueso){
				masCaroSinHueso = precioIngresado
				nombreDelMasCaro = nombreIngresado
			}
		}
		if(banderaDelMasLiviano == true && tipoDeCorte == "con hueso"){
		banderaDelMasLiviano = false
		elCorteMasLiviano = pesoIngresado
		nombreDelMasLiviano = nombreIngresado	
		}
		else{
			if(pesoIngresado<elCorteMasLiviano){
				elCorteMasLiviano = pesoIngresado
				nombreDelMasLiviano = nombreIngresado	
	
			}
		respuesta = confirm("desea seguir ingresando prodcutos")
	}

	
	}
	document.write(" el peso total de la compra es de " + pesoTotal + "<br>");
	document.write("el nombre de los mas caro sin hueso es " + nombreDelMasCaro + "<br>");
	document.write("el nombre del corte mas liviano de los con hueso es " + nombreDelMasLiviano + "<br>");
	
}//FIN DE LA FUNCIÓN
