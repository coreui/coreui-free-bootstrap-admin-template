$(function(){

    function random(min,max) {
        return Math.floor(Math.random()*(max-min+1)+min);
    }

    var elements = 16;
    var labels = [];
    var data1 = [];
    var data2 = [];
    var data3 = [];

    for (var i = 0; i <= elements; i++) {
        labels.push('1');
        data1.push(random(40,100));
        data2.push(random(20,100));
        data3.push(random(60,100));
    }

    var options = {
        responsive: true,
        legend: {
            display: false
        },
        scales: {
            xAxes: [{
                display:false,
                points:false,
            }],
            yAxes: [{
                display:false,
                ticks: {
                    max: 102
                }
            }],
        },
        elements: { point: { radius: 0 } }
    };

    var data = {
        labels: labels,
        datasets: [{
            label: 'My First dataset',
            backgroundColor: 'transparent',
            borderColor: $.brandInfo,
            borderWidth: 2,
            data: data1
        }]
    }

    var ctx = $('#header-chart-1');
    var headerChart = new Chart(ctx, {
        type: 'line',
        data: data,
        options: options
    });


    var data = {
        labels: labels,
        datasets: [
            {
                label: 'My First dataset',
                backgroundColor: 'transparent',
        		borderColor : $.brandDanger,
                borderWidth: 2,
                data: data2
            },
        ]
    };
    var ctx = $('#header-chart-2');
    var headerChart2 = new Chart(ctx, {
        type: 'line',
        data: data,
        options: options
    });

    var data = {
        labels: labels,
        datasets: [
            {
                label: 'My First dataset',
                backgroundColor: 'transparent',
        		borderColor : $.brandSuccess,
                borderWidth: 2,
                data: data3
            },
        ]
    };
    var ctx = $('#header-chart-3');
    var headerChart3 = new Chart(ctx, {
        type: 'line',
        data: data,
        options: options
    });

});
