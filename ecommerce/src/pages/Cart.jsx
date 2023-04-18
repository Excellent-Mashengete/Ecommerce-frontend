import React from 'react'
import { Container } from 'rsuite'
import empty_cart from '../assets/empty-cart.svg';
import Mybutton from '../components/Button';

function Cart() {
    let number = 0;

    return (
        <Container>           
            <Container >
                <div className='heading'>
                    <h5>Shopping Cart</h5>
                </div>
                <div className='layout cart'>
                    <div className='content shopping'>
                        <div className='center_empty'>
                            <img src={empty_cart} alt='' className='empty_box' />
                            <p>Your shopping cart is empty</p>
                            <Mybutton label={'Start Shopping'} mybtn={'shopping_button'} appearance={'primary'} block={false} /> 
                        </div>
                    </div>
                </div>
            </Container>
        </Container>
    )
}

export default Cart