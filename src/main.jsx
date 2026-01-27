import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.rtl.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './index.css'
import App from './App.jsx'
import Layout from './pages/Layout/Layout.jsx'
import About from './pages/About/About.jsx'
import Home from './pages/Home/Home.jsx'
import Blog from './pages/Blog/Blog.jsx'
import NotFound from './pages/NotFound/NotFound.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import BlogArticlePage from './pages/BlogArticlePage/BlogArticlePage.jsx'

const routes = createBrowserRouter([
    {path: "", element: <Layout/>, children: [
        {path: "", element: <Home/>},
        {path: "about", element: <About/>},
        {path: "blog", element: <Blog/>},
        {path: "blog/:slug", element: <BlogArticlePage />},
        {path: '*', element: <NotFound />},
    ]}, 
], {
    basename: "/Adaasa"
})

createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={routes} />
  </>
)
