// Packages
import React from 'react';
import { NavLink } from 'react-router-dom';

// Components
import SideBarSectionContainer from './SideBarSectionContainer';

// Types
import { PageDirectory } from '../../../types/frontendTypes';

// Utilities
import pathMaker from '../../utilities/pathMaker';
import pageDirectory from '../../pageDirectory';

/**
 * Given a page directory, which is an array that holds all documentation sections and pages, this
 * function will return an array of SideBarSectionContainer components which each contain a button
 * to expand or collapse a side bar section, and a side bar section containing NavLink components
 * that point to every page within said section. This function makes it so changes to the page
 * directory are automatically reflected in the sidebar.
 *
 * @param pageDirectory
 * @returns array of SideBarSectionContainer components
 */
const sideBarSectionPopulator = (pageDirectory: PageDirectory) => {
  const sideBarSections = [];
  for (const section of pageDirectory) {
    const pageNavLinks = [];
    for (const page of section.pages) {
      pageNavLinks.push(
        <NavLink to={pathMaker(section, page)} className='side-bar__nav-link'>
          {page.title}
        </NavLink>
      );
    }
    sideBarSections.push(
      <SideBarSectionContainer title={section.collectionTitle}>
        {...pageNavLinks}
      </SideBarSectionContainer>
    );
  }
  return sideBarSections;
};

// Main Component
const SideBar = () => {
  return (
    <nav className='side-bar__nav'>
      <NavLink to='/' className='side-bar__nav-link'>
        Home
      </NavLink>
      {...sideBarSectionPopulator(pageDirectory)}
    </nav>
  );
};

export default SideBar;
