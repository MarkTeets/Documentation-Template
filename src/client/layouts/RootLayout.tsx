// Packages
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

// Components
import TopBar from './TopBar';
import SideBarContainer from './SideBar/SideBarContainer';

// Main component
const RootLayout = () => {
  return (
    <div className='root-layout'>
      <TopBar key='TopBar' />
      <SideBarContainer key='SideBarContainer' />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
