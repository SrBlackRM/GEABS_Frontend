import React from 'react';
import ReactDOM from 'react-dom/client';
import { 
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import './index.css';
import Home from './routes/home';
import Profile from './routes/profile';
import Certificates from './routes/certificates';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'perfil',
    element: <Profile />
  },
  {
    path: 'certificados',
    element: <Certificates />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
