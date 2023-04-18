import React from 'react'
import { Container } from 'rsuite'
import empty_order from '../assets/empty-order-icon.svg';
import Mybutton from '../components/Button';
function Orders() {
  return (
    <>  
      <div className='heading'>
        <h5>Orders</h5>
      </div>
      <div className='layout cart'>
        <div className='content'>
          <div className='center_empty'>
            <img src={empty_order} alt='' className='empty_box' />
            <p>You have no orders</p>
            <Mybutton label={'Start Shopping'} mybtn={'shopping_button'} appearance={'primary'} block={false} /> 
          </div>
        </div>
      </div>
    </>
  )
}

export default Orders;
