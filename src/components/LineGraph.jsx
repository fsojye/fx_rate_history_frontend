
import React, { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import zoomPlugin from 'chartjs-plugin-zoom';

import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  zoomPlugin
);

const stringToColor = (str) => {
  let hash = 0;
  for (let i = 0; i< str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  let color = '#';
  for (let i = 0; i < 3; i++) {
      var value = (hash >> (i * 8)) & 0xFF;
      color += ('00' + value.toString(16)).substr(-2);
  }
  return color;
}

const LineGraph = (props) => {
  const [data, setData] = useState({
    labels: [1],
    datasets: [
      {
        label: '',
        data: [1],
      },
    ],
  })
  useEffect(() => {
    if (props.dataSet) {
      const data = Object.entries(props.dataSet).map(([element, index]) => {
        return {
          label: element,
          data: index,
          backgroundColor: stringToColor(element),
          borderColor: stringToColor(element),
        }
      })
      const newData = {
        labels: Object.keys(props.dataSet[props.baseCurrency])
          .sort((a, b) => {
            return new Date(a) - new Date(b)
          }),
        // labels: Object.keys(props.dataSet[props.baseCurrency]).sort((a, b) => {
        //   if (a.split('-').length === 1) {
        //     return a - b
        //   }
        //   a = a.split('-')
        //   b = b.split('-')
        //   return (a[0] + a[1] / 12 ) - (b[0] + b[1] / 12) 
        // }),
        datasets: data
      }
      setData(newData)
    }
  }, [props])

  const options = {
    responsive: true,
    interaction: {
      mode: 'index'
    },
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: true,
        text: props.symbols.map((element) => {
          return `${element}/${props.baseCurrency}`
        }).join(' vs '),
      },
      zoom: {
        zoom: {
          wheel: {
            enabled: true,
          },
          pinch: {
            enabled: true
          },
          mode: 'xy',
        }
      }
    },
  };

  return (
    <Line
      options={options}
      data={data}
    />
  )
}

export default LineGraph