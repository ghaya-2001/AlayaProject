import React from 'react';
import { ArrowDown2 } from 'iconsax-react';







function Logs() {
    const colorsData = [
        {
            action: "Created",
            items: "Item",
            id: "#001",
            state: "was created by",
            name: "Admin",



        },
        {
            action: "Deleted",
            items: "Item",
            id: "#005",
            state: "was deleted by",
            name: "Admin",


        },
        {
            action: "Deleted",
            items: "Item",
            id: "#018",
            state: "was deleted by",
            name: "Admin",

        },
        {
            action: "Edited",
            items: "Quote",
            id: "#011",
            state: "was edited by",
            name: "Sibestian Klico",


        },
       

    ];
    return (
        <div className='logs'>

        


                    <span className='title'>
                        <h1>Logs</h1>
                    </span>


                    {/** <div className='iconbox'>
                        <div className='List'>21 Dec 2022</div>
                        <ArrowDown2 className='icon' />

                    </div>*/}




                
                <div className="rows">
                 
                <div className='scroll'>
                    
                <div className='row'>

                 {colorsData.map((el, index) => (
                        <div className="row1" key={index}>
                            
                            <div className="action">{el.action}</div>
                            <div className="items">{el.items}</div>
                            <div className="id">{el.id}</div>
                            <div className="state">{el.state}</div>
                            <div className="person">{el.name}</div>
                        </div>
                    ))}
                   

                </div>
               

                </div>
                
                </div>
                </div>


   













            )
}

            export default Logs