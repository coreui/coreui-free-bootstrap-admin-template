<script>
import { Line } from 'vue-chartjs'

// const brandPrimary = '#20a8d8'
// const brandSuccess = '#4dbd74'
// const brandInfo = '#63c2de'
// const brandWarning = '#f8cb00'
// const brandDanger = '#f86c6b'

export default Line.extend({
  props: ['data', 'height', 'width', 'variant'],
  mounted () {
    this.renderChart({
      labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      datasets: [
        {
          backgroundColor: 'transparent',
          borderColor: this.variant ? this.variant : '#c2cfd6',
          data: this.data
        }
      ]
    }, {
      responsive: true,
      maintainAspectRatio: true,
      scales: {
        xAxes: [{
          display: false
        }],
        yAxes: [{
          display: false
        }]
      },
      elements: {
        line: {
          borderWidth: 2
        },
        point: {
          radius: 0,
          hitRadius: 10,
          hoverRadius: 4,
          hoverBorderWidth: 3
        }
      },
      legend: {
        display: false
      }
    })
  }
})
</script>
