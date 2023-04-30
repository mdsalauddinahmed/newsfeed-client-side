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
import PrivateRoutes from './Routes/PrivateRoutes';
import Terms from './pages/Login/Terms';
 
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
      },
      {
        path:'terms',
        element:<Terms></Terms>
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
        loader:({params})=> fetch(`https://newsfeed-server-mdsalauddinahmed.vercel.app/categories/${params.id}`)
      },
    ]
  },
  {
    path:'news',
    element:<NewsLayout></NewsLayout>,
    children:[
      {
        path:':id',
        element:<PrivateRoutes><News></News></PrivateRoutes>,
        loader:({params})=>fetch(`https://newsfeed-server-mdsalauddinahmed.vercel.app/news/${params.id}`)
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
