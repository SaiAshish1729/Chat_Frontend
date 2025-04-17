import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/home/Home.jsx'
import Login from './pages/authentication/Login.jsx'
import SignUp from "./pages/authentication/SignUp"

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
  ],
)

createRoot(document.getElementById('root')).render(
  <>
    <App />
    <RouterProvider router={router} />

  </>

)
