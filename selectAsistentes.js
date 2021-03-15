//Función para generar la lista de selección en el formulario presente en administrarasistentes.html
$(document).ready(function() {
    let fechaCap = ["10/01/2021","04/02/2021","01/03/2021","10/04/2021","10/05/2021","10/06/2021","10/07/2021",
                    "10/08/2021","10/09/2021","10/10/2021"];
    let nomCliente = ["Pedro Ramirez","Julio Gutierrez","Rosa SEpulveda","Jacinto Quintay","Octavio Huamani",
                      "Peter Parker","Ruben Dario","Maria Parado","Lucia de la Cruz","Luisa Reyes"];
    let horaCap = ["09:00","10:00","11:00","12:00","13:00", "13:30","14:00","16:00","17:00","18:00"];
    let selectCap = $("#datosCapacitacion")

    for(let x = 0; x < fechaCap.length; x++){
        let optionCap = $('<option/>');
        optionCap.append(fechaCap[x] + " " + horaCap[x] + " " + nomCliente[x])
        selectCap.append(optionCap);
    }

})