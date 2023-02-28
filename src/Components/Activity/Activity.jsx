
import React from 'react'
import { Line } from 'react-chartjs-2'
import { ArrowDown2 } from 'iconsax-react';








const data = {
  labels: ["S", "M", "T", "W", "T", "F", "S"],
  datasets: [
    {

      label: "",
      data: [200, 300, 150, 380, 200, 300, 250, 100, 400],
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
      <div className='act'>
        <div className='firstpart'>
          <span className='titre'>Activity </span>
          <div className='list'>
            <div className='last7'> Last 7 day</div>
            <ArrowDown2 className='icon' />
          </div>
        </div>
        <Line data={data} options={options}
          className='line'></Line>
        <div className='colors'>
          <div className='blue' >.</div>
          <div className='revenu'>Revenu</div>
          <div className='greey'></div>
          <div className='manu'>Manufacturing costs</div>
        </div>
      </div>
    </div>
  )
}

export default Activity