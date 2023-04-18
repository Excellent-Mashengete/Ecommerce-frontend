import React from 'react'
import { Button, Container } from 'rsuite'
import Mybutton from './Button';

function EditPersonal(props) {
    const {name, detail, mybtn, block, handle, appearance, label} = props;
    return (
        <div className='editUser'>
            <div className='content'>
                <div className='design'>
                    <div>
                        <h6>{name}</h6>
                        <p>{detail}</p>
                    </div>
                    <div className='flexBtn'>
                        <Button className={mybtn} block={block} onClick={handle} appearance={appearance}>{label}</Button>
                    </div>
                </div>
        
            </div>      
        </div>
    )
}

export default EditPersonal