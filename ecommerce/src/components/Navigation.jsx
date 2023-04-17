import React, { useState } from 'react'
import { Navbar} from 'rsuite';
import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';

function Navigation() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [auth, setAuthenticate] = useState(false);
  const [login, setLogin] = useState('Login');
  const handleClose = () => setAuthenticate(false);

  //Authentication Modal
  const setAuthReg = () => {
    setAuthenticate(true);
    setLogin('Register');
  }

  const setAuthLogin = () => {
    setAuthenticate(true);
    setLogin('Login');
  }

  //Logout
  const logout = () => setIsLoggedIn(true); 

  //Handle SideBar navigation on mobile
  const [open, setOpen] = useState(false);
  const handleOpenSidenav = () => setOpen(true); 
  const handleCloseSidenav = () => setOpen(false); 

  let name = "Hi Excellent";
  let number = 0;

  return (
    <Navbar >
      <DesktopNav 
        name={name} 
        number={number} 
        isLoggedIn={isLoggedIn} 
        handleClose={handleClose} 
        auth={auth} 
        setIsLoggedIn={logout}  
        setAuthReg={setAuthReg} 
        setAuthLogin={setAuthLogin} 
        login={login} 
      />
      <MobileNav 
        number={number} 
        setOpen={handleOpenSidenav} 
        open={open} 
        handleCloseSidenav={handleCloseSidenav} 
      />
    </Navbar>
  )
}   
export default Navigation