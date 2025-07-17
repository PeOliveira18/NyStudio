import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/home.jsx'
import Sobre from './pages/sobre.jsx'
import Servicos from './pages/servicos.jsx'
import Equipe from './pages/equipe.jsx'
import Blog from './pages/blog.jsx'
import Contato from './pages/contato.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/Sobre',
    element: <Sobre/>
  },
  {
    path: '/Servicos',
    element: <Servicos/>
  },
  {
    path: '/Equipe',
    element: <Equipe/>
  },
  {
    path: '/Blog',
    element: <Blog/>
  },
  {
    path: '/Contato',
    element: <Contato/>
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
