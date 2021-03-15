//Validaciones para el formulario presente en editarcliente.html generado a través del plugin jQueryValidation
$(document).ready(function() {
  $("#editarCliente").validate({
    rules: {
      nombreCliente: {required: true, minlength: 2, maxlength: 50},
      apellidoCliente: {required: true, minlength: 9, maxlength: 50},
      runCliente: {required: true, minlength: 9, maxlength: 9},
      telefonoCliente: {required: true,},
      afpCliente: {required: true,},
      sisSalud: {required: true},
      direCliente: {required: true},
      edadCliente: {required: true, range: [1,120]}
    },

    messages: {
      nombreCliente: {
        required: "Este campo es obligatorio", 
        minlength: "El nombre debe contener al menos 3 carácteres",
        maxlength: "El nombre debe contener como máximo 50 carácteres"
      },
      apellidoCliente: {
        required: "Este campo es obligatorio", 
        minlength: "El apellido debe contener al menos 3 carácteres",
        maxlength: "El apellido debe contener como máximo 50 carácteres"
      },
      runCliente: {
        required: "Este campo es obligatorio", 
        minlength: "El apellido debe contener 9 números",
        maxlength: "El apellido debe contener 9 números"
      },
      telefonoCliente: {
        required: "Este campo es obligatorio", 
        minlength: "El apellido debe contener 9 números",
        maxlength: "El apellido debe contener 9 números"
      },
      afpCliente: {
        required: "Este campo es obligatorio", 
      },
      sisSalud: {
        required: "Este campo es obligatorio", 
      },
      direCliente: {
        required: "Este campo es obligatorio", 
      },
      edadCliente: {
        required: "Este campo es obligatorio",
        range: "El rango de edad debe estar entre 1 a 120 años" 
      },
    }
  })
})

