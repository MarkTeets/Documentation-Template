// Packages
import React, { useState } from 'react';

// Images
// import xSvg from '../../assets/x.svg';
import listSvg from '../../assets/list.svg';

// Components
import SideBar from './SideBar';

// Main Component
/**
 * This component holds the button to expand or collapse the sidebar, the current expansion state of
 * the sidebar, and the sidebar.
 */
const SideBarContainer = () => {
  const [isSideBarExpanded, setIsSideBarExpanded] = useState(true);

  const switchSideBarExpanded = () => {
    setIsSideBarExpanded(!isSideBarExpanded);
  };

  return (
    <div className='side-bar-container'>
      <button className='side-bar-button' onClick={switchSideBarExpanded}>
        {/* {isSideBarExpanded ? (
          <img src={xSvg} alt='X icon'></img>
        ) : (
          <img src={listSvg} alt='list icon'></img>
        )} */}
        <img src={listSvg} alt='list icon'></img>
      </button>
      <div className={`side-bar${isSideBarExpanded ? '' : ' is-width-collapsed'}`}>
        <SideBar key='SideBar' />
      </div>
    </div>
  );
};

export default SideBarContainer;
