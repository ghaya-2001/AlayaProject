import React from 'react'
import {Doughnut} from 'react-chartjs-2'



const data={
 
    datasets:[
        {
        label:"first data",
        data:[22,18,11,29,11],
        backgroundColor:
         ["#222B41", "#555E74","#808697","#AAAFB9","#D5D7DC"]
        }
    ]
};



function Categories() {
  return (
    <div className='product'>
      
      <div>
      <Doughnut className='doughnut' data={data} />
      </div>
     
    
    </div>
  )
}

export default Categories