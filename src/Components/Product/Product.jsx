import React from 'react'
import {Doughnut} from 'react-chartjs-2'
import Chart from "chart.js/auto";


const data={

    datasets:[
        {
        label:"first data",
        data:[71,29],
        backgroundColor:
         [" #2B3651", "#D5D7DC"]
        }
    ],
    
};



function Product() {
  return (
    <div className='product'>
      <p>hello world</p>
      <div>
      <Doughnut className='doughnut' data={data} />
      </div>
     
    
    </div>
  )
}

export default Product