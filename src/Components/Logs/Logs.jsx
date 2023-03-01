import React from 'react';
import { ArrowDown2 } from 'iconsax-react';





function Logs() {
    return (
        <div className='logs'>

            <div className='row'>
                <div className='row0'>

                    <span className='titlelog'>Logs</span>
                    <div className='iconbox'>
                    <div className='List'>21 Dec 2022</div>
                    <ArrowDown2 className='icon' />

                    </div>
                   

                </div>

                <div className='row1'>
                    <div className='item1'>Created</div>
                    <div className='item'> Item</div>
                    <div className='id'>#001</div>
                    <div className='createdby'>was created by</div>
                    <div className='person '>Admin</div>
                </div>
                <div className='row2'>
                    <div className='item2'>Deleted</div>
                    <div className='item'> Item</div>
                    <div className='id'>#005</div>
                    <div className='createdby'>was deleted by</div>
                    <div className='person '>Admin</div>
                </div>

                <div className='row3'>
                    <div className='item3'>Deleted</div>
                    <div className='item'> Item</div>
                    <div className='id'>#018</div>
                    <div className='createdby'>was deleted by</div>
                    <div className='person '>SibestianKlico</div>

                </div>
                <div className='row4'>
                    <div className='item4'>Edited</div>
                    <div className='item'> Item</div>
                    <div className='id'>#018</div>
                    <div className='createdby'>was edited by</div>
                    <div className='person '>SibestianKlico</div>
                    

                </div>








            </div>
        </div>
    )
}

export default Logs