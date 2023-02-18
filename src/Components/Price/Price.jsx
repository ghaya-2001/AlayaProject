import React from 'react'

function Price() {
  return (
    <div className='price'>
    <div className='text'>
    <div className='gold'>Gold current price(per gram)</div>
    <div className='£50'>£ 50.00</div>
    </div>
    <table className='table'>
        <tbody>
        <tr>
          <td className='td'></td>
          <td className='td'>Price</td>
          <td className='td'>Changes</td>
        </tr>
        
        <tr>
          <td  className='td'>Today</td>
          <td  className='tdd'>£50</td>
          <td  className='tdd'>*</td>
        </tr>
        <tr>
          <td className='td'>20/12</td>
          <td className='tdd'>£50</td>
          <td className='tdd'>-0.25</td>
        </tr>
        <tr>
          <td className='td'>19/12</td>
          <td className='tdd'>£50.25</td>
          <td className='tdd'>-20</td>
        </tr>
        <tr>
          <td className='td'>18/12</td>
          <td className='tdd'>£80.25</td>
          <td className='tdd'>+0.25</td>
        </tr>
        <tr>
          <td className='td'>17/12</td>
          <td className='tdd'>£80</td>
          <td className='tdd'>+5</td>
        </tr>
        <tr>
          <td className='td'>16/12</td>
          <td className='tdd'>£75</td>
          <td className='tdd'>+25</td>
        </tr>
        
        </tbody>
      </table>

    </div>
 
  )
}

export default Price