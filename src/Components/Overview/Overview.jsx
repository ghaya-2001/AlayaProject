import React from 'react';
import { BsPeopleFill } from "react-icons/bs";
import { BsUnion } from "react-icons/bs";
import { BsFileTextFill } from "react-icons/bs";
import { AiOutlineInbox  } from "react-icons/ai";


function Overview() {
  return (

    <div className='overview'>
        <div className='title'>Overview</div>
        <div className='box'>
        <div className='usercat'>
        <div className='user'>
            <BsPeopleFill className='BsP'></BsPeopleFill>
            <div className='num7'>
            <div className='edit'>users</div>
           
            </div>
            
        </div>
        <div className='vendors'>
            <AiOutlineInbox className='AiO' ></AiOutlineInbox>
            <div className='num7'>
            <div className='edit'>vendors</div>
          
            </div>
        </div>
        </div>

        <div className='catprod'>
        <div className='cat'>

             <BsUnion className='BsU' ></BsUnion>
             <div className='num7'>
             <div className='edit'>categories</div>
          
             </div>
            
        
        </div>
        <div className='prod'>
            <BsFileTextFill className='BsF'></BsFileTextFill> 
            <div className='num7'>
           <div className='edit'>product</div>
      
           </div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Overview