import React from 'react'
import { Button, ButtonToolbar, FlexboxGrid, Form } from 'rsuite'
import { InputText } from './InputText';
import Mybutton from './Button';

function EditableComponent(props) {
    const {eventKey, HeaderName, detail, mybtn, block, handle, appearance, label} = props;

    function HandleChange(){
        switch (eventKey) {
            case 'name':
                return(   
                    <div style={{margin: '1rem 0rem', color: 'black'}} >
                        <InputText name="name" label="First Name" />
                        <InputText name="name" label="Last Name" />
                    </div>         
                );

            case 'email':
                return(   
                    <div>
                        <p style={{margin: '1rem 0rem', color: 'black'}}>Current Email Address:{''}</p> 
                        <InputText name="name" label="New Email Address" />
                        <InputText name="name" label="Re-enter your Email Address" />
                    </div>
                );

            case 'password':
                return(
                    <div style={{margin: '1rem 0rem', color: 'black'}} >
                        <InputText name="name" label="Current  Password"/>
                        <InputText name="name" label="New Password"/>
                    </div>
                );

            case 'mobile':
                return(
                    <div style={{margin: '1rem 0rem', color: 'black'}} >
                       
                    </div>
                );
        }
    }

    return (
        <div className='editdetails' >
             <div className='contents'>
                <div className='userDetails'>
                    <h6>{HeaderName}</h6>
                    <FlexboxGrid >
                        <FlexboxGrid.Item colspan={24}>
                            <Form fluid >
                                <HandleChange />

                                <ButtonToolbar className='endbtn'>
                                    <Button className={mybtn} block={block} onClick={handle} appearance={appearance}>{label}</Button> 
                                    <Button className={mybtn} block={block} onClick={handle} appearance={appearance}>{label}</Button> 
                                </ButtonToolbar>
                            </Form>
                        </FlexboxGrid.Item>
                    </FlexboxGrid>
                </div>
            </div>      
        </div>
    );
}

export default EditableComponent