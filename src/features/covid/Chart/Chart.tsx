import React from 'react';
import styles from './Chart.module.css';
import { Line, Bar } from 'react-chartjs-2';

import { useSelector } from 'react-redux';
import { selectData, selectDailyData, selectCountry } from '../covidSlice';

const Chart : React.FC = () => {
  const data = useSelector(selectData);
  const dailyData = useSelector(selectDailyData);
  const country = useSelector(selectCountry);

  const barChart = data && (
    <Bar 
      data={{
        labels: ['Infected', 'Recovered', 'Deaths'],
        datasets: [
          {
            backgroundColor: [
              '#1C4E80',
              '#A5D8DD',
              '#EA6A47'
            ],
            data: [
              data.confirmed.value,
              data.recovered.value,
              data.deaths.value
            ],
          }
        ]
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Latest status in ${country}` },
      }}
    />
  );

  const lineChart = dailyData[0] && (
    <Line 
      data={{
        labels: dailyData.map(({ reportDate }) => reportDate),
        datasets: [
          {
            data: dailyData.map((data) => data.confirmed.total),
            label: 'Infected',
            borderColor: '#1C4E80',
            fill: true,
          },
          {
            data: dailyData.map((data) => data.deaths.total),
            label: 'Deaths',
            borderColor: '#EA6A47',
            fill: true,
          },
        ]
      }}
    />
  );

  return (
    <div className={styles.container}>
      {country.length ? barChart : lineChart}
    </div>
  )
}

export default Chart
