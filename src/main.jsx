import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Main from './Layouts/Main.jsx';
import Home from './pages/Home/Home.jsx';
import Category from './pages/Home/Category/Category';
import NewsLayout from './Layouts/NewsLayout';
import News from './pages/News/News';
import AuthProvider from './Providers/AuthProvider';
import LoginLayout from './Layouts/LoginLayout';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
 
const router = createBrowserRouter([

  {
    path:'/',
    element:<LoginLayout></LoginLayout>,
    children:[
      {
       path:'/',
       element:<Navigate to="/category/0"></Navigate>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'register',
        element:<Register></Register>
      }
    ]

  },
  {
    path: "category",
    element:<Main></Main>,
    children:[
     
      {
        path:":id",
        element:<Category></Category>,
        loader:({params})=> fetch(`http://localhost:5000/categories/${params.id}`)
      },
    ]
  },
  {
    path:'news',
    element:<NewsLayout></NewsLayout>,
    children:[
      {
        path:':id',
        element:<News></News>,
        loader:({params})=>fetch(`http://localhost:5000/news/${params.id}`)
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthProvider>
  <RouterProvider router={router} />
  </AuthProvider>
  </React.StrictMode>,
)
