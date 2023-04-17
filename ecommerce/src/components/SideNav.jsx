import React from 'react'

import { Sidenav, Nav, Divider } from 'rsuite';
import DashboardIcon from '@rsuite/icons/legacy/Dashboard';
import GroupIcon from '@rsuite/icons/legacy/Group';
import MagicIcon from '@rsuite/icons/legacy/Magic';
import GearCircleIcon from '@rsuite/icons/legacy/GearCircle';
import { NavLink } from 'react-router-dom';

const headerStyles = {
  padding: 20,
  fontSize: 16,
  background: '#34c3ff',
  color: ' #fff'
};


const Item = ({ title, to }) => {
  let activeClassName = "navlink";
  return (
      <NavLink to={to} >{title}</NavLink>
  );
};


function SideNav() {
  return (
    <div>
      <Sidenav defaultOpenKeys={['3', '4']}>
        <Sidenav.Header>
          <div style={headerStyles}>Custom Sidenav</div>
        </Sidenav.Header>
        
        <Sidenav.Body>
          <li>
              <Item title="Orders" to="/account/orders" />
          </li>
            <li>
                <Item title="Personal Details" to="/account/personal-details"/>
            </li>

            <li>
                <Item title="Address Book" to="/account/address-book"/>
            </li>

            <li>
                <Item title="Dashboard" to="/client/Pay"/>
            </li>
        </Sidenav.Body>
      </Sidenav>
    </div>
  )
}

export default SideNav