import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import InformationPage from './pages/InformationPage.js'
import App from './pages/App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

export const UserContext = React.createContext(null);

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

const Wrapper = (props) => {
  const [image, setImage] = useState(null);
  const [data, setData] = useState(null);

  return (
    <UserContext.Provider value={{ image, setImage, data, setData }}>
      {props.children}
    </UserContext.Provider>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Wrapper>
      <RouterProvider router = {router}/>
    </Wrapper>
  </React.StrictMode>
);