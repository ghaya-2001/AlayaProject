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
            <BsPeopleFill className='BsP'>users</BsPeopleFill>
        </div>
        <div className='vendors'>
            <AiOutlineInbox className='AiO' ></AiOutlineInbox>
        </div>
        </div>

        <div className='vendprod'>
        <div className='cat'>
             <BsUnion className='BsU' ></BsUnion>
        
        </div>
        <div className='prod'>
        <BsFileTextFill className='BsF'></BsFileTextFill>        </div>
        </div>
        </div>
    </div>
  )
}

export default Overview