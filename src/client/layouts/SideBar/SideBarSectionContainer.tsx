// Packages
import React, { useState } from 'react';

// Types
import { SideBarSectionContainerProps } from '../../../types/frontendTypes';

// Main Component
/**
 * This component contains a single section of the side bar. It holds a button to expand or collapse
 * a section, the state of said button, and will eventually render children provided to it. These
 * children will be an array of NavLink components provided in the "SideBar" component. The purpose
 * of this component is to provide a reusable pattern for collapsing a SideBar section.
 */
const SideBarSectionContainer = ({
  children,
  title,
  defaultExpanded
}: SideBarSectionContainerProps) => {
  const [isSectionExpanded, setIsSectionExpanded] = useState(
    defaultExpanded === undefined ? false : defaultExpanded
  );

  const switchSectionExpanded = () => {
    setIsSectionExpanded(!isSectionExpanded);
  };

  return (
    <div className='side-bar-section-container'>
      <button className='side-bar-section-container__button' onClick={switchSectionExpanded}>
        {title}
      </button>
      <div className={`side-bar-section${isSectionExpanded ? '' : ' is-height-collapsed'}`}>
        {children}
      </div>
    </div>
  );
};

export default SideBarSectionContainer;
