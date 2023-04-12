import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Navbar, Nav, Dropdown,Avatar} from 'rsuite';
import { AiFillHeart } from "react-icons/ai";

function Navigation() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  let name = "Hi Excellent";
  const navigate = useNavigate();
  return (
    <Navbar >
      <Navbar.Brand href="#">RSUITE</Navbar.Brand>
      <Nav >
        <Nav.Item eventKey="1">
          Home
        </Nav.Item>
        <Nav.Item eventKey="2">News</Nav.Item>
        <Nav.Item eventKey="3">Products</Nav.Item>
        
      </Nav>
      <Nav pullRight className='navRight'>
        {!isLoggedIn?
          < >
            <Nav.Item onClick={()=> setIsLoggedIn(true)}>Login</Nav.Item>
            <Nav.Item onClick={()=> navigate('/register')} >Register</Nav.Item>
          </>
          :
          <> 
            <Nav.Item active={false} >{name}</Nav.Item>
            <Nav.Item onClick={()=> setIsLoggedIn(false)} >Logout</Nav.Item>
          </>
        }
 
        <Nav.Item >Orders</Nav.Item>

        <Dropdown title="My Account" trigger="hover" >
          <Dropdown.Item eventKey="4">Personal Details</Dropdown.Item>
          <Dropdown.Item eventKey="5">Address Book</Dropdown.Item>
        </Dropdown>

        <Avatar  size="sm" circle style={{ background: '#ff8787', marginTop:'12px',  }} >
        <AiFillHeart style={{ color: 'white' }}/>
        </Avatar>

      </Nav>
    </Navbar>
  )
}   
export default Navigation