import React from 'react';
import { Profile2User } from 'iconsax-react';
import { DocumentCopy } from 'iconsax-react';
import { Note } from 'iconsax-react';
import { Shop } from 'iconsax-react';


function Overview() {
  return (

    <div className='overview'>
      <div className='title'>Overview</div>
      <div className='box'>

        <div className='uservend'>
          {/**users */}
          <div className='user'>
            <div className="left_block">
              <div className="icon_overview">
                <Profile2User size="18" color="white"/>
              </div>
              <span>Users</span>
            </div>
            <div className="right_block">
              <span>9</span>
            </div>
          </div>
        {/**vendors */}
          <div className='user'>
            <div className="left_block">
              <div className="icon_overview">
              <Shop size="18" color='white' />
              </div>
              <span>Vendors</span>
            </div>
            <div className="right_block">
              <span>15</span>
            </div>
          </div>

        </div>


        
      

      <div className='catprod'>
        {/**categories */}
       
        <div className='user'>
            <div className="left_block">
              <div className="icon_overview">
                <DocumentCopy size="18" color="white"/>
              </div>
              <span>Categories</span>
            </div>
            <div className="right_block">
              <span>7</span>
            </div>
          </div>
          <div className='user'>
            <div className="left_block">
              <div className="icon_overview">
                <Note size="18" color="white"/>
              </div>
              <span>Prodcus</span>
            </div>
            <div className="right_block">
              <span>187</span>
            </div>
          </div>

       
      
      </div>
      </div>
    </div>

  )
}

export default Overview