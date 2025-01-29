import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home1 from './pages/Home1.jsx';
import Blog from './pages/Blog.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Service from './pages/Service.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
   
    children:[
      {
        path:"/",
        element: <Home1/>,

      },
      {
        path:"/Blog",
        element: <Blog/>,

      },  
      {
        path:"/Contact",
        element: <Contact/>,

      },
      {
        path:"/About",
        element: <About/>,

      },
      {
        path:"/Service",
        element: <Service/>,

      }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <RouterProvider router={router} />
  </StrictMode>,
)
