import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './AuthProvider/AuthProvider.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Routes.jsx'

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
    <HelmetProvider> <RouterProvider router={router}></RouterProvider></HelmetProvider> 
   </AuthProvider>
  </React.StrictMode>,
)
