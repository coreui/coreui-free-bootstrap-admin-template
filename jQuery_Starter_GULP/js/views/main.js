$(function(){
    'use strict';

    //convert Hex to RGBA
    function convertHex(hex,opacity){
        hex = hex.replace('#','');
        var r = parseInt(hex.substring(0,2), 16);
        var g = parseInt(hex.substring(2,4), 16);
        var b = parseInt(hex.substring(4,6), 16);

        var result = 'rgba('+r+','+g+','+b+','+opacity/100+')';
        return result;
    }

    //Cards with Charts
    var labels = ['January','February','March','April','May','June','July'];
    var data = {
        labels: labels,
        datasets: [
            {
                label: 'My First dataset',
                backgroundColor: $.brandPrimary,
                borderColor: 'rgba(255,255,255,.55)',
                data: [65, 59, 84, 84, 51, 55, 40]
            },
        ]
    };
    var options = {
        maintainAspectRatio: false,
        legend: {
            display: false
        },
        scales: {
            xAxes: [{
                gridLines: {
                    color: 'transparent',
                    zeroLineColor: 'transparent'
                },
                ticks: {
                    fontSize: 2,
                    fontColor: 'transparent',
                }

            }],
            yAxes: [{
                display: false,
                ticks: {
                    display: false,
                    min: Math.min.apply(Math, data.datasets[0].data) - 5,
                    max: Math.max.apply(Math, data.datasets[0].data) + 5,
                }
            }],
        },
        elements: {
            line: {
                borderWidth: 1
            },
            point: {
                radius: 4,
                hitRadius: 10,
                hoverRadius: 4,
            },
        }
    };
    var ctx = $('#card-chart1');
    var cardChart1 = new Chart(ctx, {
        type: 'line',
        data: data,
        options: options
    });

    var data = {
        labels: labels,
        datasets: [
            {
                label: 'My First dataset',
                backgroundColor: $.brandInfo,
                borderColor: 'rgba(255,255,255,.55)',
                data: [1, 18, 9, 17, 34, 22, 11]
            },
        ]
    };
    var options = {
        maintainAspectRatio: false,
        legend: {
            display: false
        },
        scales: {
            xAxes: [{
                gridLines: {
                    color: 'transparent',
                    zeroLineColor: 'transparent'
                },
                ticks: {
                    fontSize: 2,
                    fontColor: 'transparent',
                }

            }],
            yAxes: [{
                display: false,
                ticks: {
                    display: false,
                    min: Math.min.apply(Math, data.datasets[0].data) - 5,
                    max: Math.max.apply(Math, data.datasets[0].data) + 5,
                }
            }],
        },
        elements: {
            line: {
                tension: 0.00001,
                borderWidth: 1
            },
            point: {
                radius: 4,
                hitRadius: 10,
                hoverRadius: 4,
            },
        }
    };
    var ctx = $('#card-chart2');
    var cardChart2 = new Chart(ctx, {
        type: 'line',
        data: data,
        options: options
    });

    var options = {
        maintainAspectRatio: false,
        legend: {
            display: false
        },
        scales: {
            xAxes: [{
                display: false
            }],
            yAxes: [{
                display: false
            }],
        },
        elements: {
            line: {
                borderWidth: 2
            },
            point: {
                radius: 0,
                hitRadius: 10,
                hoverRadius: 4,
            },
        }
    };
    var data = {
        labels: labels,
        datasets: [
            {
                label: 'My First dataset',
                backgroundColor: 'rgba(255,255,255,.2)',
                borderColor: 'rgba(255,255,255,.55)',
                data: [78, 81, 80, 45, 34, 12, 40]
            },
        ]
    };
    var ctx = $('#card-chart3');
    var cardChart3 = new Chart(ctx, {
        type: 'line',
        data: data,
        options: options
    });

    //Random Numbers
    function random(min,max) {
        return Math.floor(Math.random()*(max-min+1)+min);
    }

    var elements = 16;
    var labels = [];
    var data = [];

    for (var i = 2000; i <= 2000 + elements; i++) {
        labels.push(i);
        data.push(random(40,100));
    }

    var options = {
        maintainAspectRatio: false,
        legend: {
            display: false
        },
        scales: {
            xAxes: [{
                display: false,
                barPercentage: 0.6,
            }],
            yAxes: [{
                display: false,
            }]
        },

    };
    var data = {
        labels: labels,
        datasets: [
            {
                backgroundColor: 'rgba(255,255,255,.3)',
                borderColor: 'transparent',
                data: data
            },
        ]
    };
    var ctx = $('#card-chart4');
    var cardChart4 = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: options
    });

    //Main Chart
    var elements = 27;
    var data1 = [];
    var data2 = [];
    var data3 = [];

    for (var i = 0; i <= elements; i++) {
        data1.push(random(50,200));
        data2.push(random(80,100));
        data3.push(65);
    }

    var data = {
        labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W', 'T', 'F', 'S', 'S'],
        datasets: [
            {
                label: 'My First dataset',
                backgroundColor: convertHex($.brandInfo,10),
                borderColor: $.brandInfo,
                pointHoverBackgroundColor: '#fff',
                borderWidth: 2,
                data: data1
            },
            {
                label: 'My Second dataset',
                backgroundColor: 'transparent',
                borderColor: $.brandSuccess,
                pointHoverBackgroundColor: '#fff',
                borderWidth: 2,
                data: data2
            },
            {
                label: 'My Third dataset',
                backgroundColor: 'transparent',
                borderColor: $.brandDanger,
                pointHoverBackgroundColor: '#fff',
                borderWidth: 1,
                borderDash: [8, 5],
                data: data3
            }
        ]
    };

    var options = {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            display: false
        },
        scales: {
            xAxes: [{
                gridLines: {
                    drawOnChartArea: false,
                }
            }],
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    maxTicksLimit: 5,
                    stepSize: Math.ceil(250 / 5),
                    max: 250
                }
            }]
        },
        elements: {
            point: {
                radius: 0,
                hitRadius: 10,
                hoverRadius: 4,
                hoverBorderWidth: 3,
            }
        },
    };
    var ctx = $('#main-chart');
    var mainChart = new Chart(ctx, {
        type: 'line',
        data: data,
        options: options
    });


    //Social Box Charts
    var labels = ['January','February','March','April','May','June','July'];

    var options = {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            display: false,
        },
        scales: {
            xAxes: [{
                display:false,
            }],
            yAxes: [{
                display:false,
            }]
        },
        elements: {
            point: {
                radius: 0,
                hitRadius: 10,
                hoverRadius: 4,
                hoverBorderWidth: 3,
            }
        }
    };

    var data1 = {
        labels: labels,
        datasets: [{
            backgroundColor: 'rgba(255,255,255,.1)',
            borderColor: 'rgba(255,255,255,.55)',
            pointHoverBackgroundColor: '#fff',
            borderWidth: 2,
            data: [65, 59, 84, 84, 51, 55, 40]
        }]
    };
    var ctx = $('#social-box-chart-1');
    var socialBoxChart1 = new Chart(ctx, {
        type: 'line',
        data: data1,
        options: options
    });

    var data2 = {
        labels: labels,
        datasets: [
            {
                backgroundColor: 'rgba(255,255,255,.1)',
                borderColor: 'rgba(255,255,255,.55)',
                pointHoverBackgroundColor: '#fff',
                borderWidth: 2,
                data: [1, 13, 9, 17, 34, 41, 38]
            }
        ]
    };
    var ctx = $('#social-box-chart-2').get(0).getContext('2d');
    var socialBoxChart2 = new Chart(ctx, {
        type: 'line',
        data: data2,
        options: options
    });

    var data3 = {
        labels: labels,
        datasets: [
            {
                backgroundColor: 'rgba(255,255,255,.1)',
                borderColor: 'rgba(255,255,255,.55)',
                pointHoverBackgroundColor: '#fff',
                borderWidth: 2,
                data: [78, 81, 80, 45, 34, 12, 40]
            }
        ]
    };
    var ctx = $('#social-box-chart-3').get(0).getContext('2d');
    var socialBoxChart3 = new Chart(ctx, {
        type: 'line',
        data: data3,
        options: options
    });

    var data4 = {
        labels: labels,
        datasets: [
            {
                backgroundColor: 'rgba(255,255,255,.1)',
                borderColor: 'rgba(255,255,255,.55)',
                pointHoverBackgroundColor: '#fff',
                borderWidth: 2,
                data: [35, 23, 56, 22, 97, 23, 64]
            }
        ]
    };
    var ctx = $('#social-box-chart-4').get(0).getContext('2d');
    var socialBoxChart4 = new Chart(ctx, {
        type: 'line',
        data: data4,
        options: options
    });



    //Sparkline Charts
    var labels = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];

    var options = {
        legend: {
            display: false,
        },
        scales: {
            xAxes: [{
                display:false,
            }],
            yAxes: [{
                display:false,
            }]
        },
        elements: {
            point: {
                radius: 0,
                hitRadius: 10,
                hoverRadius: 4,
                hoverBorderWidth: 3,
            }
        },
    };

    var data1 = {
        labels: labels,
        datasets: [
            {
                backgroundColor: 'transparent',
                borderColor: $.brandPrimary,
                borderWidth: 2,
                data: [35, 23, 56, 22, 97, 23, 64]
            }
        ]
    };
    var ctx = $('#sparkline-chart-1');
    var sparklineChart1 = new Chart(ctx, {
        type: 'line',
        data: data1,
        options: options
    });

    var data2 = {
        labels: labels,
        datasets: [
            {
                backgroundColor: 'transparent',
                borderColor: $.brandDanger,
                borderWidth: 2,
                data: [78, 81, 80, 45, 34, 12, 40]
            }
        ]
    };
    var ctx = $('#sparkline-chart-2');
    var sparklineChart2 = new Chart(ctx, {
        type: 'line',
        data: data2,
        options: options
    });

    var data3 = {
        labels: labels,
        datasets: [
            {
                backgroundColor: 'transparent',
                borderColor: $.brandWarning,
                borderWidth: 2,
                data: [35, 23, 56, 22, 97, 23, 64]
            }
        ]
    };
    var ctx = $('#sparkline-chart-3');
    var sparklineChart3 = new Chart(ctx, {
        type: 'line',
        data: data3,
        options: options
    });

    var data4 = {
        labels: labels,
        datasets: [
            {
                backgroundColor: 'transparent',
                borderColor: $.brandSuccess,
                borderWidth: 2,
                data: [78, 81, 80, 45, 34, 12, 40]
            }
        ]
    };
    var ctx = $('#sparkline-chart-4');
    var sparklineChart4 = new Chart(ctx, {
        type: 'line',
        data: data4,
        options: options
    });

    var data5 = {
        labels: labels,
        datasets: [
            {
                backgroundColor: 'transparent',
                borderColor: '#d1d4d7',
                borderWidth: 2,
                data: [35, 23, 56, 22, 97, 23, 64]
            }
        ]
    };
    var ctx = $('#sparkline-chart-5');
    var sparklineChart5 = new Chart(ctx, {
        type: 'line',
        data: data5,
        options: options
    });

    var data6 = {
        labels: labels,
        datasets: [
            {
                backgroundColor: 'transparent',
                borderColor: $.brandInfo,
                borderWidth: 2,
                data: [78, 81, 80, 45, 34, 12, 40]
            }
        ]
    };
    var ctx = $('#sparkline-chart-6');
    var sparklineChart6= new Chart(ctx, {
        type: 'line',
        data: data6,
        options: options
    });

});
