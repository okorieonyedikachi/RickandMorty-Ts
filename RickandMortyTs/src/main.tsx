import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Character from './routes/Character.tsx'
import Episodes from './routes/Episodes.tsx'
import Hompage from './routes/Hompage.tsx'

const router = createBrowserRouter([
   {
    path: "/",
    element: <Character />
   },
  {
    path: "/homepage",
    element: <Hompage/>,
  },
  {
    path: "/characters",
    element: <Character />
  }, 
  {
    path: "episodes",
    element:<Episodes />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    
    <RouterProvider router={router} />
    
  </React.StrictMode>,
)
