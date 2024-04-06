import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root';
import Home from './components/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AuthProvider from './components/AuthProvider/AuthProvider';
import About from './components/About/About';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import PersonalData from './components/PersonalData/PersonalData';
import Profile from './components/Profile/Profile';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'register',
        element:<Register></Register>
      },
      {
        path:'/about',
        element: <PrivateRoute>
          <About></About>
        </PrivateRoute>
      },
      {
        path:'/personaldata',
        element:<PrivateRoute>
          <PersonalData></PersonalData>
        </PrivateRoute>
      },
      {
        path:'/profile',
        element:<PrivateRoute>
          <Profile></Profile>
        </PrivateRoute>
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AuthProvider>
      <RouterProvider router={router} />
      </AuthProvider>
  </React.StrictMode>,
)
