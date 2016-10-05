const CHART = document.getElementById("lineChart");
let lineChart = new Chart(CHART, {
    type: 'line',
    data: {
        labels: ["Item1", "Item2", "Item3", "Item4", "Item5", "Item6", "Item7", "Item8", "Item9", "Item10"],
        datasets: [{
            
            label: "Juan Torres EPQ Score",
            fill: true,
            lineTension: .1,
            backgroundColor: "rgba(102,153,153,0.4)",
            borderColor: "rgba(102,153,153,1)",
            borderCapStyle: 'round',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'round',
            pointBorderColor: "rgba(102,153,153,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 5,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(102,153,153,1)",
            pointHoverBorderColor: "rgba(102,153,153,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40, 33, 30, 45],
            spanGaps: false,
        }, {
            label: "EPQ Norms Scores",
            fill: true,
            lineTension: .1,
            backgroundColor: "rgba(102,51,102,0.4)",
            borderColor: "rgba(102,51,102,1)",
            borderCapStyle: 'round',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'round',
            pointBorderColor: "rgba(102,51,102,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 5,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(102,51,102,1)",
            pointHoverBorderColor: "rgba(102,51,102,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [30, 30, 31, 23, 44, 44, 50, 52, 53, 55],
            spanGaps: false,
        }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks:{
            beginAtZero: true
          }
        }]
      }
    }
});
