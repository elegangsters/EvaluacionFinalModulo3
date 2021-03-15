//Función para confirmar la opción de agregar un nuevo pago.
function validarpago() {
    var confirmacion = confirm("¿Desea crear un nuevo pago?");

    if (confirmacion == true) {
        window.open('crearpago.html');
    }

}

//Función para generar listado de meses y años, además de insertar la fecha en el formulario para crear un nuevo pago.
window.onload = function formdefault() {
    var fechahoy = new Date();
    var optionanno = 0;
    var annoselect = document.getElementById("selectanno");
    var meses = ["ENERO", "FEBRERO", "MARZO", "ABRIL", "MAYO", "JUNIO", 
    "JULIO", "AGOSTO", "SEPIEMBRE", "OCTUBRE", "NOVIEMBRE", "DICIEMBRE"];
    var messelect = document.getElementById("selectmes")
    fechahoy = fechahoy.toLocaleDateString();
    document.getElementById("fechaactual").value = fechahoy;
    for (let x = 0; x <= 40; x++) {
        optionanno = document.createElement("option");
        optionanno.appendChild(document.createTextNode((2010 + x)))
        annoselect.appendChild(optionanno);
    }
    for (let x = 0; x < 12; x++) {
        optionmes = document.createElement("option");
        optionmes.appendChild(document.createTextNode((meses[x])))
        messelect.appendChild(optionmes);
    }
}

//Función para validar los valores ingresados en el formulario para crear un nuevo pago. 
function validarform() {
    var inputmonto = document.getElementById("monto").value;
    var inputrut = document.getElementById("rutcliente").value;
    var conterror = 0;
    
    if (inputmonto < 0 || inputmonto > 99999999 || inputmonto == ""){
        inputmonto = document.getElementById("monto");
        inputmonto.style.backgroundColor = "grey"; 
        inputmonto.style.borderColor = "red";
        conterror += 1;
    } else {
        inputmonto = document.getElementById("monto");
        inputmonto.style.backgroundColor = "white"; 
        inputmonto.style.borderColor = "grey";
    }
    if (inputrut == ""){
        inputrut = document.getElementById("rutcliente");
        inputrut.style.backgroundColor = "grey"; 
        inputrut.style.borderColor = "red";
        conterror += 1;
    }
    else {
        inputrut = document.getElementById("rutcliente");
        inputrut.style.backgroundColor = "white"; 
        inputrut.style.borderColor = "grey";
    }
    if (conterror > 0) {
        return false;
    } else {
        return true;
    }

}
