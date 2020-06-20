import React, {useEffect} from 'react'
import {Line} from 'react-chartjs-2'

function Chart({symbol,chartTitle, chartData}) {

  useEffect(()=> {
    console.log("chart component", chartData)
  },[chartData])

  const data = {
    labels: chartData.x,
    datasets: [
      {
        data: chartData.y,
        label: symbol,
        fill: false,
        lineTension: 0,
        borderWidth: 0.5,
        backgroundColor: 'rgba(18,90,151,1)',
        borderColor: 'rgba(75,192,192,1)',
        pointBorderColor: 'rgba(18,90,151,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(18,90,151,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
      }
    ]
  };

  return (
    <div className="chart">
      <h3>{chartTitle}</h3>
      <Line
        data={data}
        options={{ maintainAspectRatio: false }}
      />
    </div>
  )
}

export default Chart
