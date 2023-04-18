import React from 'react'
import { Navbar, Nav, Avatar, Badge} from 'rsuite';
import { AiOutlineSearch, AiOutlineMenu, AiOutlineShoppingCart} from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import SideDrawer from './Drawer';

function MobileNav(props) {
    const {number, setOpen, open, handleCloseSidenav} = props;
    const navigate = useNavigate();  
    return (
        <div className='mobile'>
            <Nav className='navRight '>
                <Avatar size="md" onClick={setOpen} style={{ marginTop:'8px', background:'transparent'  }} >
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

                <Badge onClick={()=> navigate('/cart')} content={number}>
                    <Avatar size="md" style={{ marginTop:'8px', background:'transparent'  }} >
                    <AiOutlineShoppingCart style={{ color:"black", fontSize:"1.5em"  }}  />
                    </Avatar>
                </Badge>
            </Nav>

            <SideDrawer placement={'left'} open={open} onClose={handleCloseSidenav} />
        </div>
    );
}

export default MobileNav;