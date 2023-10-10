import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home/Home.jsx';
import ErrorPage from './errorPage/ErrorPage.jsx';
import Users from './Users/Users.jsx';
import Courses from './Courses/Courses.jsx';
import Userdetails from './UserDetails/Userdetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/courses",
        element: <Courses></Courses>,
      },
      {
        path: '/users',
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        element: <Users></Users>
      },
      {
        path: '/user/:id',
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`),
        element: <Userdetails></Userdetails>
      },
      {
        path: '/courses',
        loader: () => fetch("https://jsonplaceholder.typicode.com/todos"),
        element: <Courses></Courses>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
