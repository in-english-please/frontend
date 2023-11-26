import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import InformationPage from './pages/InformationPage.js'
import App from './pages/App';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "informationPage",
    element: <InformationPage/>
  }
], {basename: '/frontend'});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
  </React.StrictMode>
);