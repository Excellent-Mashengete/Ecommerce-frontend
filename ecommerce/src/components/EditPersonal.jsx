import React from 'react'
import { Container } from 'rsuite'
import Mybutton from './Button';

function EditPersonal(props) {
    const {name, detail} = props;
    return (
        <div className='editUser'>
            <div className='content'>
                <div className='design'>
                    <div>
                        <h6>{name}</h6>
                        <p>{detail}</p>
                    </div>
                    <div className='flexBtn'>
                        <Mybutton label={'Edit'} appearance={'primary'} mybtn={'shopping_button'} block={false} />
                    </div>
                </div>
        
            </div>      
        </div>
    )
}

export default EditPersonal