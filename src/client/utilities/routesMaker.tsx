//Packages
import React from 'react';
import { Route } from 'react-router-dom';

// Types
import { PageDirectory } from '../../types/frontendTypes';

// Utilities
import pathMaker from './pathMaker';

const routesMaker = (pageDirectory: PageDirectory) => {
  const routes = [];
  for (const section of pageDirectory) {
    for (const page of section.pages) {
      const routeKey = `Route-${page.title}`;
      routes.push(
        <Route
          path={pathMaker(section, page)}
          key={routeKey}
          element={<page.element key={page.title} />}
        />
      );
    }
  }
  return routes;
};

export default routesMaker;

/* Example output
const routes = [
  <Route path='/A/1' key='Route-DetailA1' element={<DetailA1 key='DetailA1' />} />,
  <Route path='/A/2' key='Route-DetailA2' element={<DetailA2 key='DetailA2' />} />,
  <Route path='/A/3' key='Route-DetailA3' element={<DetailA3 key='DetailA3' />} />
];
*/
