import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Layout from './components/Layout.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import HomePage from './pages/HomePage.jsx'
import StudentPage from './pages/StudentPage.jsx'
import FacultyPage from './pages/FacultyPage.jsx'
import AboutPage from './pages/AboutPage.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout></Layout>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {path:'home', element:<HomePage></HomePage>},
      {path:'about',element:<AboutPage/>},
      {path:'student',element:<StudentPage/>},
      {path:'faculty',element:<FacultyPage/>}
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
