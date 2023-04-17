import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AiFillHeart} from "react-icons/ai";
import { HiShoppingCart } from "react-icons/hi";
import { Navbar, Nav, Dropdown, Avatar, Badge} from 'rsuite';
import AuthModal from '../pages/AuthModal';

function DesktopNav(props) {
    const {name, number, isLoggedIn, handleClose, setIsLoggedIn, auth, setAuthLogin, setAuthReg, login} = props;
    const navigate = useNavigate();

    return (
        <div className='navbar'>
            <Nav >
                <Navbar.Brand href="#">RSUITE</Navbar.Brand>        
            </Nav>
        
            <Nav pullRight className='navRight '>
                {!isLoggedIn?
                    < >
                        <Nav.Item onClick={setAuthLogin}>Login</Nav.Item>
                    
                        <Nav.Item onClick={setAuthReg} >Register</Nav.Item>
                    </>
                    :
                    <> 
                        <Nav.Item active={false} >{name}</Nav.Item>
                        
                        <Nav.Item onClick={setIsLoggedIn} >Logout</Nav.Item>
                    </>
                }

                <Nav.Item onClick={()=> navigate('/account/orders')}>Orders</Nav.Item>
    
                <Nav.Menu title="My Account" trigger={'hover'}>
                    <Nav.Item onClick={()=> navigate('/account/personal-details')}>Personal Details</Nav.Item>
                    <Nav.Item onClick={()=> navigate('/account/address-book')} >Address Book</Nav.Item>
                </Nav.Menu>

                <Avatar size="sm" circle style={{ background: '#ff8787', marginTop:'12px', marginRight:'12px'  }} >
                    <AiFillHeart style={{ color: 'white',fontSize:"1.3em" }}/>
                </Avatar>

                <Avatar style={{ background: '#1c8644', marginTop:'12px', marginRight:"5px", width: '60px', borderRadius:'50px',height: '30px'  }} >
                    <HiShoppingCart style={{ color: 'white', fontSize:"1.2em"}}/>
                    <Badge style={{ background: '#1c8644', fontSize:"0.8em"}} content={number}></Badge>
                </Avatar>
            </Nav>

            <AuthModal open={auth} access={login} handleClose={handleClose}/>
        </div>
    );
}

export default DesktopNav