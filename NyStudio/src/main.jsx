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
import PageBlog1 from './pages/page-blog1.jsx'
import PageBlog2 from './pages/page-blog2.jsx'
import PageBlog3 from './pages/page-blog3.jsx'
import PageBlog4 from './pages/page-blog4.jsx'
import Layout from './components/layout.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout><Home /></Layout>
  },
  {
    path: '/Sobre',
    element: <Layout><Sobre /></Layout>
  },
  {
    path: '/Servicos',
    element: <Layout><Servicos /></Layout>
  },
  {
    path: '/Equipe',
    element: <Layout><Equipe /></Layout>
  },
  {
    path: '/Blog',
    element: <Layout><Blog /></Layout>
  },
  {
    path: '/Contato',
    element: <Layout><Contato /></Layout>
  },
  {
    path: '/PageBlog1',
    element: <Layout><PageBlog1 /></Layout>
  },
  {
    path: '/PageBlog2',
    element: <Layout><PageBlog2 /></Layout>
  },
  {
    path: '/PageBlog3',
    element: <Layout><PageBlog3 /></Layout>
  },
  {
    path: '/PageBlog4',
    element: <Layout><PageBlog4 /></Layout>
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
