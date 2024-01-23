// Packages
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

// Components
import SideBarSectionContainer from './SideBarSectionContainer';

// Types
import { PageDirectory } from '../../../types/frontendTypes';

// Utilities
import pathMaker from '../../utilities/pathMaker';
import pageDirectory from '../../pageDirectory';

// Dynamic section aggregator based on page directory
const sideBarSectionPopulator = (pageDirectory: PageDirectory) => {
  const sideBarSections = [];
  for (const section of pageDirectory) {
    const pageNavLinks = [];
    for (const page of section.pages) {
      pageNavLinks.push(
        <NavLink to={pathMaker(section, page)} className=''>
          {page.title}
        </NavLink>
      );
    }
    sideBarSections.push(
      <SideBarSectionContainer title={section.collectionTitle} defaultExpanded={false}>
        {...pageNavLinks}
      </SideBarSectionContainer>
    );
  }
  return sideBarSections;
};

// Main Component
const SideBar = () => {
  return (
    <>
      <div>SideBar</div>
      <nav id='main-nav'>
        <NavLink to='/' className='nav-link'>
          Home
        </NavLink>
        {...sideBarSectionPopulator(pageDirectory)}
      </nav>
    </>
  );
};

export default SideBar;
