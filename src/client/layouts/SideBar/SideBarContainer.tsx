// Packages
import React, { useState } from 'react';

// Images
import xSvg from '../../assets/x.svg';
import listSvg from '../../assets/list.svg';

// Components
import SideBar from './SideBar';

// Main Component
const SideBarContainer = () => {
  const [isSideBarExpanded, setIsSideBarExpanded] = useState(false);

  const switchSideBarExpanded = () => {
    setIsSideBarExpanded(!isSideBarExpanded);
  };

  return (
    <div className='side-bar-container'>
      <button className='side-bar-button' onClick={switchSideBarExpanded}>
        {isSideBarExpanded ? (
          <img src={xSvg} alt='X icon'></img>
        ) : (
          <img src={listSvg} alt='list icon'></img>
        )}
      </button>
      <div className={`side-bar${isSideBarExpanded ? '' : ' is-height-collapsed'}`}>
        <SideBar key='SideBar' />
      </div>
    </div>
  );
};

export default SideBarContainer;
