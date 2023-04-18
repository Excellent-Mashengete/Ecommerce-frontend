import React, { useState } from 'react'
import { Sidenav, Nav, Navbar} from 'rsuite';
import { useNavigate } from 'react-router-dom';
import HomeIcon from '@rsuite/icons/legacy/Home';
import CogIcon from '@rsuite/icons/legacy/Cog';

const Item = ({ title, eventKey, to, onSelect, activeKey, ...props }) => {
  const navigate = useNavigate();

  return (
    <Nav onSelect={onSelect} activeKey={activeKey} onClick={()=> navigate(to)}>
      <Nav.Item eventKey={eventKey} onClick={()=> navigate(to)} >{title}</Nav.Item>
    </Nav>
  );
};


function SideNav() {
  const [activeKey, setActiveKey] = useState(null);
  console.log(activeKey);
  return (
    <Sidenav>    
      <Sidenav.Body>
        <Item title="Home" eventKey="1" to="/" activeKey={activeKey} onSelect={setActiveKey} /> 
        <Item title="Orders" eventKey="2" to="/account/orders" activeKey={activeKey} onSelect={setActiveKey} />
        <Item title="Personal Details" eventKey="3" to="/account/personal-details" activeKey={activeKey} onSelect={setActiveKey} />
        <Item title="Address Book" eventKey="4" to="/account/address-book" activeKey={activeKey} onSelect={setActiveKey}/>
      </Sidenav.Body>
    </Sidenav>

    
  )
}

export default SideNav