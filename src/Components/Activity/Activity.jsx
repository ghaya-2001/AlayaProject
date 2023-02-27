
import React from 'react'
import { Line } from 'react-chartjs-2'








const data = {
  labels: ["S", "M", "T", "W", "T", "F", "S"],
  datasets: [
    {

      label: "",
      data: [200, 300, 150, 400, 200, 300, 250, 100,],
      backgroundcolor: ["transparent"],
      borderColor: " #2B3651",
      borderWidth: 3,
      pointBorderColor: "transparent",
      pointBorderWidth: 4

    },

  ],

};
const series = {
  labels: ["S", "M", "T", "W", "T", "F", "S"],
  datasets: [
    {

      label: "",
      data: [300, 150, 400, 200, 300, 250, 100,],
      backgroundcolor: ["transparent"],
      borderColor: " #2B3651",
      borderWidth: 3,
      pointBorderColor: "transparent",
      pointBorderWidth: 4

    },

  ],

};

const options = {
  plugins: {
    legend: false,
    labels: {
      fontSize: 20,
    }
  },
  scales: {

    y: {
      grid: {
        display: false,//never show lines in y

      },


    }
  },


}


function Activity() {
  return (
    <div className='activity'>
      <span className='titre'>Activity </span>
      <div className='line'>
        <Line data={data} options={options}
          series={series}

        ></Line>
         



      </div>


    </div>
  )
}

export default Activity