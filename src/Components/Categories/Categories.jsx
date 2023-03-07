import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import ChartDataLabels from 'chartjs-plugin-datalabels';


const data = {
  labels: [


  ],

  datasets: [
    {
      label: "",
      data: [22, 18, 11, 29, 11,],
      backgroundColor:
        ["#222B41", "#555E74", "#808697", "#AAAFB9", "#D5D7DC", "#F5F5F7"],
      borderWidth: 0,

    }
  ]
};
const options = {
  plugins: {
    datalabels: {
      formatter: (value = "22,18,11,29,11,",) => {



        let percentage = (value) + '%';
        return percentage;
      },
      color: 'white',

      labels: {
        title: {
          font: {
            size: '16',

          },
        },
      },
    },
  },
};



function Categories() {
  return (
    <div className='categories'>
      <span className='title'>Product Categories</span>
      <div className='doughnutbox' >
        <Doughnut className='doughnut1' data={data}
          plugins={[ChartDataLabels]}
          options={options}
        />
        <div className='colors'>
          <div className='color1'>
            <div className='one'></div>
            <div className='Necklace'>Necklace</div>
            <br />
            
          </div>
         
          <div className='color2'>
            <div className='two'></div>
            <div className='Bracelet'>Bracelet</div>
            <br />
          </div>
          <div className='color3'>
            <div className='three'></div>
            <div className='Earring'>Earring</div>
            <br />

          </div>
          <div className='color4'>
            <div className='four'></div>
            <div className='Solitaire '>Solitairering</div>
            <br />

          </div>
          <div className='color5'>
            <div className='five'></div>
            <div className='Normal'>Normalring</div>
            <br />

          </div>
          <div className='color6'>
            <div className='six'></div>
            <div className='Others'>Others</div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Categories