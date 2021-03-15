//Agrega lista de mejoras para lista presente en listadoasesorias.html
$(document).ready(function agregarmejoras(){
  var mejoras001 = ["Programa de mantenimiento", "Capacitaciones", "Investigación de incidentes"];
  var mejoras002 = ["Inspecciones programadas", "Actualización procedimientos", "Reagendamiento visita"];
  var mejoras003 = ["Auditorias mensuales", "Seguimiento de acciones", "Investigación de incidentes"];
  var select001 = $('#listamejoras1');
  var select002 = $('#listamejoras2');
  var select003 = $('#listamejoras3');
  
  for(let x = 0; x < mejoras001.length; x++){
    var optionmejoras1 = $('<option/>');
    optionmejoras1.append(mejoras001[x]);
    select001.append(optionmejoras1);

  }

  for(let x = 0; x < mejoras002.length; x++){
    var optionmejoras1 = $('<option/>');
    optionmejoras1.append(mejoras002[x]);
    select002.append(optionmejoras1);

  }

  for(let x = 0; x < mejoras003.length; x++){
    var optionmejoras1 = $('<option/>');
    optionmejoras1.append(mejoras003[x]);
    select003.append(optionmejoras1);

  }

})

  
