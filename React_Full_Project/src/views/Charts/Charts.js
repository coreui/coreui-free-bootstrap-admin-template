import React, { Component } from 'react';
import { Bar, Doughnut, Line, Pie, Polar, Radar } from 'react-chartjs-2';

const line = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};

const bar = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};

const doughnut = {
  labels: [
    'Red',
    'Green',
    'Yellow'
  ],
  datasets: [{
    data: [300, 50, 100],
    backgroundColor: [
    '#FF6384',
    '#36A2EB',
    '#FFCE56'
    ],
    hoverBackgroundColor: [
    '#FF6384',
    '#36A2EB',
    '#FFCE56'
    ]
  }]
};

const radar = {
  labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(179,181,198,0.2)',
      borderColor: 'rgba(179,181,198,1)',
      pointBackgroundColor: 'rgba(179,181,198,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(179,181,198,1)',
      data: [65, 59, 90, 81, 56, 55, 40]
    },
    {
      label: 'My Second dataset',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      pointBackgroundColor: 'rgba(255,99,132,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(255,99,132,1)',
      data: [28, 48, 40, 19, 96, 27, 100]
    }
  ]
};

const pie = {
  labels: [
    'Red',
    'Green',
    'Yellow'
  ],
  datasets: [{
    data: [300, 50, 100],
    backgroundColor: [
    '#FF6384',
    '#36A2EB',
    '#FFCE56'
    ],
    hoverBackgroundColor: [
    '#FF6384',
    '#36A2EB',
    '#FFCE56'
    ]
  }]
};

const polar = {
  datasets: [{
    data: [
      11,
      16,
      7,
      3,
      14
    ],
    backgroundColor: [
      '#FF6384',
      '#4BC0C0',
      '#FFCE56',
      '#E7E9ED',
      '#36A2EB'
    ],
    label: 'My dataset' // for legend
  }],
  labels: [
    'Red',
    'Green',
    'Yellow',
    'Grey',
    'Blue'
  ]
};

class Charts extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <div className="card-columns cols-2">
          <div className="card">
            <div className="card-header">
              Line Chart
              <div className="card-actions">
                <a href="http://www.chartjs.org"><small className="text-muted">docs</small></a>
              </div>
            </div>
            <div className="card-block">
              <div className="chart-wrapper">
                <Line data={line}
                  options={{
                    maintainAspectRatio: false
                  }}
                />
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              Bar Chart
              <div className="card-actions">
                <a href="http://www.chartjs.org"><small className="text-muted">docs</small></a>
              </div>
            </div>
            <div className="card-block">
              <div className="chart-wrapper">
              <Bar data={bar}
                options={{
                  maintainAspectRatio: false
                }}
              />
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              Doughnut Chart
              <div className="card-actions">
                <a href="http://www.chartjs.org"><small className="text-muted">docs</small></a>
              </div>
            </div>
            <div className="card-block">
              <div className="chart-wrapper">
                <Doughnut data={doughnut} />
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              Radar Chart
              <div className="card-actions">
                <a href="http://www.chartjs.org"><small className="text-muted">docs</small></a>
              </div>
            </div>
            <div className="card-block">
              <div className="chart-wrapper">
                <Radar data={radar} />
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              Pie Chart
              <div className="card-actions">
                <a href="http://www.chartjs.org"><small className="text-muted">docs</small></a>
              </div>
            </div>
            <div className="card-block">
              <div className="chart-wrapper">
                <Pie data={pie} />
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              Polar Area Chart
              <div className="card-actions">
                <a href="http://www.chartjs.org"><small className="text-muted">docs</small></a>
              </div>
            </div>
            <div className="card-block">
              <div className="chart-wrapper">
                <Polar data={polar} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Charts;
