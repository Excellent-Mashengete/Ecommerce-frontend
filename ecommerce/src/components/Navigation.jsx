import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Navbar, Nav, Dropdown, Avatar, Divider, Badge, Drawer, Button} from 'rsuite';
import { AiFillHeart, AiOutlineSearch, AiOutlineMenu, AiOutlineShoppingCart} from "react-icons/ai";
import { HiShoppingCart } from "react-icons/hi";
import SideNav from './SideNav';

function Navigation() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  let name = "Hi Excellent";
  let number = 0;

  return (
    <Navbar >
      <div className='navbar'>
        <Nav >
          <Navbar.Brand href="#">RSUITE</Navbar.Brand>        
        </Nav>
      
        <Nav pullRight className='navRight '>
          {!isLoggedIn?
            < >
              <Nav.Item onClick={()=> setIsLoggedIn(true)}>Login</Nav.Item>
          
              <Nav.Item onClick={()=> setIsLoggedIn(true)} >Register</Nav.Item>
            </>
            :
            <> 
              <Nav.Item active={false} >{name}</Nav.Item>
              
              <Nav.Item onClick={()=> setIsLoggedIn(false)} >Logout</Nav.Item>
            </>
          }

          <Nav.Item onClick={()=> navigate('/account/orders')}>Orders</Nav.Item>
  
          <Dropdown title="My Account" trigger="hover" >
            <Dropdown.Item onClick={()=> navigate('/account/personal-details')}>Personal Details</Dropdown.Item>
            <Dropdown.Item onClick={()=> navigate('/account/address-book')} eventKey="5">Address Book</Dropdown.Item>
          </Dropdown>

          <Avatar size="sm" circle style={{ background: '#ff8787', marginTop:'12px', marginRight:'12px'  }} >
            <AiFillHeart style={{ color: 'white',fontSize:"1.3em" }}/>
          </Avatar>

          <Avatar style={{ background: '#1c8644', marginTop:'12px', marginRight:"5px", width: '60px', borderRadius:'50px',height: '30px'  }} >
            <HiShoppingCart style={{ color: 'white', fontSize:"1.2em"}}/>
            <Badge style={{ background: '#1c8644', fontSize:"0.8em"}} content={number}></Badge>
          </Avatar>
        </Nav>
      </div>

      <div className='mobile'>
        <Nav className='navRight '>
          <Avatar size="md" onClick={() => setOpen(true)} style={{ marginTop:'8px', background:'transparent'  }} >
            <AiOutlineMenu style={{ color:"black", fontSize:"1.5em"  }}  />
          </Avatar>
        </Nav> 

        <Nav className='center' >
          <Navbar.Brand  href="#">RSUITE</Navbar.Brand>        
        </Nav>
      
        <Nav pullRight className='navMobile '>
          <Avatar size="md" style={{ marginTop:'8px', background:'transparent'  }} >
            <AiOutlineSearch style={{ color:"black", fontSize:"1.5em"  }}  />
          </Avatar>

          <Badge content={number}>
            <Avatar size="md" style={{ marginTop:'8px', background:'transparent'  }} >
              <AiOutlineShoppingCart style={{ color:"black", fontSize:"1.5em"  }}  />
            </Avatar>
          </Badge>
        </Nav>
        
        <Drawer full placement={'left '} open={open} onClose={() => setOpen(false)}>
          <Drawer.Header>
            <Drawer.Title>Menu</Drawer.Title>
          </Drawer.Header>

          <Drawer.Body>
            <SideNav />
          </Drawer.Body>

        </Drawer>
      </div>
    </Navbar>
  )
}   
export default Navigation