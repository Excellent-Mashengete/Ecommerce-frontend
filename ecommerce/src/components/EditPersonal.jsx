import React from 'react';
import { Button } from 'rsuite';

function EditPersonal(props) {
    const {name, detail, mybtn, block, eventKey, onSelect, handle, appearance, label} = props;
    return (
        <div className='editUser' onClick={()=>onSelect(eventKey)}>
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