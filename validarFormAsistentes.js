//Función para validar el formulario presente en la página administrarasistentes.cl
$(document).ready(function() {
    $.validator.addMethod("comienzaPor", function(value, element, parametro) {
        if(value.startsWith(parametro)){
          return true;
        } else {
          return false;
        }
      }, "Debe comenzar por {0}")
      $("#agregarAsis").validate({
        rules: {
          idAsistente: {required: true, range: [1,9999]},
          nombreAsistente: {required: true, minlength: 1, maxlength: 99},
          edadAsistente: {required: true, range: [1,149]},
          emailAsistente: {required: true, email: true },
          telefonoAsistente: {required: true, comienzaPor: "+569"},
          datosCapacitacion: {required: true,}
        },
        messages: {
          idAsistente: {
            required: "Este campo es obligatorio", 
            range: "El rango del id debe estar entre 1 y 10.000"
          },
          nombreAsistente: {
            required: "Este campo es obligatorio", 
            minlength: "El nombre debe contener como mínimo 1 carácter",
            maxlength: "El nombre debe contener menos de 100 carácteres"
          },
          edadAsistente: {
            required: "Este campo es obligatorio", 
            range: "La edad debe ser mayor a 1 año y menor a 150 años"
          },
          emailAsistente: {
            required: "Este campo es obligatorio", 
            email: "El email debe tener un formato válido (nombre@ejemplo.com)"
          },
          telefonoAsistente: {
            required: "Este campo es obligatorio", 
          },
          datosCapacitacion: {
            required: "Este campo es obligatorio", 
          },
        }
      })
})