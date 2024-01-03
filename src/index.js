import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Register from './Register';
import Authentification from './Authentification';
import reportWebVitals from './reportWebVitals';
import AdminEdit from './JSX_admin/AdminEdit';
import AdminSettings from './JSX_admin/AdminSettings';
import AdminSupport from './JSX_admin/AdminSupport';
import AdminTariphs from './JSX_admin/AdminTariphs';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <App />
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/auth",
    element: <Authentification />
  },
  {
    path: "/profile",
    element: <AdminEdit />
  },
  {
    path: "/settings",
    element: <AdminSettings />
  },
  {
    path: '/support',
    element: <AdminSupport />
  },
  {
    path: '/tariphs',
    element: <AdminTariphs />
  }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
reportWebVitals();
