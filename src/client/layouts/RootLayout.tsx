// Packages
import React from 'react';
import { Outlet } from 'react-router-dom';

// Components
import TopBar from './TopBar';
import SideBarContainer from './SideBar/SideBarContainer';

// Main component
const RootLayout = () => {
  return (
    <div className='root-layout'>
      <TopBar key='TopBar' />
      <main className='main-content'>
        <SideBarContainer key='SideBarContainer' />
        <div>
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default RootLayout;
