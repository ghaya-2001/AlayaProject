
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
      title: {
        font: {
          size: "15",
          family: "Plus Jakarta Sans",
        },
      },
    },
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
  const colorData = [
    {
      naame: "Revenu",
      coolor: "#2B3651"
    },
    {
      naame: "Manufacturing costs",
      coolor: "#d4c9ae"
    }
  ]
  return (
    <div className='activity'>
      <div className='blocs'>


        <div className='leftbloc'>
          <span className='title'>
            <h1>Activity </h1>
          </span>



          <div className='rightbloc'>
            <div className='date'> Last 7 day</div>
            <ArrowDown2 className='icons' />
          </div>
        </div>

      </div>




      <div className='Line'>
        <Line data={data} options={options}
          className='line'></Line></div>

      <div className="colors">
        {colorData.map((el, index) => (
          <div className="color_line" key={index}>
            <div
              className="color__fill"
              style={{ backgroundColor: `${el.coolor}` }}
            ></div>
            <div className="color__name">{el.naame}</div>
          </div>



        ))}


      </div >







    </div>



  )
}

export default Activity