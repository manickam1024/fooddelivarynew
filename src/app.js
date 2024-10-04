import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import Footer from './components/Footer'
import Body from './components/Body'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import About from './components/About'
import Error from './components/err'
import Restaurants from './components/Restaurant'
import Profile from './components/profile'
import Cart from './components/Cart'

const root = ReactDOM.createRoot(document.getElementById('root'))

export const App = () => (
  <div className="App">
    <Header />
    <Outlet />
    <Footer />
  </div>
)

const route = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Body /> },

      { path: '/about', element: <About /> },

      { path: '/profile', element: <Profile /> },

      { path: '/Cart', element: <Cart /> },

      { path: '/Restuarants/:resid', element: <Restaurants /> },
    ],
    errorElement: <Error />,
  },
])

root.render(<RouterProvider router={route} />)
