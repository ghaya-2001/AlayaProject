import React from 'react'
import Charts from 'apexcharts'


function Test() {
    

  return (
    <div>test
         <Charts type='line'
         width={1450}
         heigh={550}
         series={[
         
         {
            name:"first",
            data:[200,300,150,400,200,300,210,100]  
        },
        {
            name:"second",
            data:[100,150,100,300,150,400] 
        },
    ]}
         option={{
            
                title:{Text:"Activity",},
                xaxis:{
                    categories:["S","M","T","W","T","F","S"],
                }
           

         }}
         
         
         />
 
    </div>
   ) 
}

export default Test