// Gráfico de asistencia
var ctx1 = document.getElementById('attendanceChart').getContext('2d');
var attendanceChart = new Chart(ctx1, {
    type: 'bar',
    data: {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'],
        datasets: [{
            label: 'Asistentes',
            data: [2000, 3200, 2900, 4500, 4200],
            backgroundColor: '#234059',
            borderColor: '#234059',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Gráfico de ventas
var ctx2 = document.getElementById('salesChart').getContext('2d');
var salesChart = new Chart(ctx2, {
    type: 'line',
    data: {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'],
        datasets: [{
            label: 'Ventas de Boletos',
            data: [12000, 18000, 16000, 22000, 21000],
            fill: false,
            borderColor: '#8D98A6',
            tension: 0.1
        }]
    }
});