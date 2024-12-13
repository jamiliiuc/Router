import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'
import App from './App.jsx'
import Users from './Components/User/Users.jsx';
import UserDetails from './Components/UserDetails/UserDetails.jsx';
import Charts from './Components/Charts/Charts.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/users",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users/"),
        element: <Users></Users>
      },
      {
        path: "/users/:userId",
        loader: ({params}) => fetch("https://jsonplaceholder.typicode.com/users/" + params.userId),
        element: <UserDetails/>
      }
    ]
  },
  {
    path: "/charts",
    element: <Charts></Charts>
  }

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
