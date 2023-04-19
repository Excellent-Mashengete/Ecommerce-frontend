import React from 'react';
import { Drawer } from 'rsuite';
import SideNav from './SideNav';

function SideDrawer(props){
    const { placement, open, onClose } = props;

    return (
        <Drawer size="full" placement={placement} open={open} onClose={onClose}>
            <Drawer.Header>
                <Drawer.Title>Menu</Drawer.Title>
            </Drawer.Header>

            <Drawer.Body>
                <SideNav />
            </Drawer.Body>
        </Drawer>
    )
}

export default SideDrawer;