/*
Gianfranco Gentili
parcial ej n 3
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones, 
validando los datos ingresados:

nombre del titular ,lugar ( “Puerto Madryn”, “Villa Gessel” o “Córdoba”),temporada(“otoño”,“invierno”, “verano”,“primavera”),cantidad de días que durará el viaje.
informar:
a)el lugar más elegido 
b)el nombre del titular que más días viaje.
c)el promedio de días por viaje, de la temporada verano..*/
function mostrar()
{
    while(respuesta == true){
		nombreTitular = prompt("ingrese el nombre del titular")

		lugarElegido = prompt("elija el lugar que desea (Puerto Madryn Villa Gessel Córdoba ")
	
		while(lugarElegido != "Cordoba" && lugarElegido != "Villa Gessel" && lugarElegido != "Puerto Madryn"){
		lugarElegido = prompt("ingrese uno de los lugares dentro de los ofrecidos(Puerto Madryn Villa Gessel Córdoba)")	
		}
	
		temporadaIngresada = prompt("ingrese la temporada que desea(verano, otoño , invierno , primavera")
	
		 while(temporadaIngresada != "inviero" && temporadaIngresada != "primavera" && temporadaIngresada != "otoño")
	
	
		banderaDelTitularConMasViajes = true
	
	
		if(temporadaIngresada == "verano"){
			diasDeVerano = diasDeVerano + cantidadDeDias
			
		}
	
	
		if(banderaDelTitularConMasViajes == true){
		banderaDelTitularConMasViajes = false
		titularConMasViajes = cantidadDeDias
		titularConMasViajes = nombreTitular	
		}
		else{
			if(titularIngresado>titularConMasViajes){
				titularConMasViajes = titularIngresado
				titularConMasViajes = nombreTitular
			}
		}
	
	
	
		if(lugarElegido == "Puerto Madryn"){
			lugarIndicado = seccionPuertoMadryn
		}
		if(lugarElegido == "Villa Gessel"){
			lugarIndicado = seleccionGessel
		}
		if(lugarElegido == "Cordoba"){
			lugarIndicado = seleccionCordoba
		}
		
		if(seleccionCordoba>seleccionGessel){
		lugarConMasVisitas = seleccionCordoba
		nombreDelLugarConMasVisitas = "Cordoba"	
		}
		else{
			lugarConMasVisitas = seleccionGessel
			nombreDelLugarConMasVisitas = "Villa Gessel"
		}
		if(seleccionPuertoMadryn>lugarConMasVisitas){
			lugarConMasVisitas = seccionPuertoMadryn
		nombreDelLugarConMasVisitas = "Puerto Madryn"
		}
		respuesta = confirm("desea ingresar mas datos?")
	}
	
	


	
}//FIN DE LA FUNCIÓN