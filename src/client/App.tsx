// Packages
import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from 'react-router-dom';

// Styles
import './scss/index.scss';

// Layouts
import RootLayout from './layouts/RootLayout';

// Pages
import Home from './pages/Home';
import PageTwo from './pages/PageTwo';

// Utilities
import pageDirectory from './pageDirectory';
import routesMaker from './utilities/routesMaker';

// React router definition
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />
      {/* <Route path='/PageTwo' element={<PageTwo key='PageTwo' />} /> */}
      {...routesMaker(pageDirectory)}
    </Route>
  )
);

// Main component definition
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
