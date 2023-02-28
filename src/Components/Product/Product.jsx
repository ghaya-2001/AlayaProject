import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import Chart from "chart.js/auto";
import { plugins } from 'chart.js';



const data = {
  labels: [],

  datasets: [
    {

      label: "",
      data: [71, 29],
      backgroundColor:
        [" #2B3651", "#D5D7DC"],
        borderWidth:0,
        cutout:'80%'
    }
  ],

};

const options = {
  plugins: {
    doughnutlabel: {
      labels: [
        {
         
        },
       

        {
          text: '180 Total',
          
          font: {
            size: '36',
            weight: 'bold'
          },
          color: '#333'
        }
      ]
      
    }
  }
};
const ChartDoughnutLabel = {
  id: 'doughnutlabel',
  beforeDraw: function (chart) {
    const { ctx } = chart;
    const width = chart.width;
    const height = chart.height;


    // Display the number label
    const text = chart.config.options.plugins.doughnutlabel.labels[1].text;
    const font = chart.config.options.plugins.doughnutlabel.labels[1].font;
    const color = chart.config.options.plugins.doughnutlabel.labels[1].color;

    ctx.restore();
    const centerX = width / 2;
    const centerY = height / 2;
    ctx.font = 'Plus Jakarta Sans,sans-serif;';
    ctx.fillStyle = color;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, centerX, centerY);
  }
}





function Product() {
  return (
    <div className='product'>
      <div className='title'>Products Status</div>
      <div className='dougbox'>
       
        <Doughnut className='doughnut' data={data}
          options={options}
          plugins={[ChartDoughnutLabel]}

        />
         <div className='Colors'>
          <div className='prt1'>
          <div className='Blue'>.</div>
          <div className='sold'>  Sold-71%</div>
          </div>
         <div className='prt2'>
          <div className='Greey'>.</div>
          <div className='stand'>Stand By-29%</div>

         </div>
         
        </div>
      </div>


    </div>
  )
}

export default Product