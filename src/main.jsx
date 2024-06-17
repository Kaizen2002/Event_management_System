import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Event from './pages/Events.jsx'
import Contact  from './pages/Contact.jsx'
import Login from './pages/Login.jsx'


const router = createBrowserRouter([
  {path :"/" , 
   element: <App/>,
   children : [
    {path:"/", element : <Home/>},
    {path:"/about", element : <About/>},
    {path:"/event", element : <Event/>},
    {path:"/contact", element : <Contact/>},
    {path:"/login", element : <Login/>},
   ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
