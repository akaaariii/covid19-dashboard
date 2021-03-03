import React from 'react';
import { Typography } from '@material-ui/core';
import { Doughnut } from 'react-chartjs-2';

import { useSelector } from 'react-redux';
import { selectData } from '../covidSlice';

const PieChart : React.FC = () => {
  const data = useSelector(selectData);
  const mortality = data.confirmed && (100 * data.deaths.value / data.confirmed.value);

  const pieChart = data && (
    <Doughnut
      data={{
        labels: ['Infected', 'Recovered', 'Deaths'],
        datasets: [
          {
            data: [
              data.confirmed.value,
              data.recovered.value,
              data.deaths.value
            ],
            backgroundColor: [
              '#1C4E80',
              '#A5D8DD',
              '#EA6A47'
            ],
            hoverBackgroundColor: ['#2463a1', '#b5eef3', '#ff7a55'],
            borderColor: ['transparent', 'transparent', 'transparent'],
          },
        ]
      }}
      options={{
        legend: { 
          position: 'bottom',
          labels: {
            boxWidth: 15,
          },
         },
      }}
    />
  );

  return (
    <>
      {data.confirmed && (
        <Typography align="center" color="textSecondary" gutterBottom>
          Mortality {data.confirmed && mortality.toFixed(2)} [%]
        </Typography>
      )}
      {pieChart}
    </>
  )
}

export default PieChart
