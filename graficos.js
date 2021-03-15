//Funciones para generar los gráficos presentes en reportes.html, a través del plugin Chart.js
let asesor = document.getElementById("graficoBarra").getContext('2d');
let graficoMod = new Chart(asesor,{
    type: 'bar',
    data: {
        labels: ['Buin','El Bosque','Huechuraba','La Cisterna','La Florida','Paine','Puente Alto','Santiago'],
        datasets: [{
            label: 'Cantidad de clientes',
            data: [5,2,3,5,6,4,10,2],
            backgroundColor: 'rgb(123,56,77)'
        }]
    }
});

let asesorLi = document.getElementById("graficoLinea").getContext('2d');
let graficoLi = new Chart(asesorLi,{
    type: 'line',
    data: {
        labels: ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],
        datasets: [{
            label: 'Cantidad de accidente',
            data: [3,2,0,5,7,3,4,10],
            borderColor: 'rgb(12,222,222)'
        },
        {
            label: 'Cantidad de visitas',
            data: [5,7,10,4,3,3,5,3],
            borderColor: 'rgb(102,112,222)',
        }
        ]
    }
});

let asesorTor = document.getElementById("graficoTorta").getContext('2d');
let graficoTor = new Chart(asesorTor,{
    type: 'pie',
    data: {
        labels: ['Cumplidos', 'Cumplidos con observación','No cumplidos'],
        datasets: [{
            label: 'Chequeos cumplidos',
            data: [60,30,10],
            borderColor: 'rgb(222,222,222)',
            backgroundColor: ['rgb(10,76,77)','rgb(123,56,77)','rgb(56,77,123)']
        }]
    }
});

    


