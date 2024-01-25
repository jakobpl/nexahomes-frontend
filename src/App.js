import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React, { useContext, useEffect } from 'react';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Blog from './pages/Blog';
import Listings from './pages/Listings';
import RootLayout from './pages/Root';
import Property from './pages/Property';
// import PropertyContext from './store/property-context';
import { PropertyProvider } from './store/property-provider';
import PropertyContext from './store/property-context';
import DataFetcher from './DataFetcher';

const URL = '127.0.0.1:3000/api';
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/blog',
        element: <Blog />,
      },
      {
        path: '/listings',
        element: <Listings />,
      },
      {
        path: '/property/:id',
        element: <Property />,
      },
    ],
  },
]);

const App = () => {
  return (
    <PropertyProvider>
      <DataFetcher />
      <RouterProvider router={router} />
    </PropertyProvider>
  );
};

export default App;
