import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Main from './Layouts/Main.jsx';
import Home from './pages/Home/Home.jsx';
import Category from './pages/Home/Category/Category';
import NewsLayout from './Layouts/NewsLayout';
import News from './pages/News/News';
const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/category/:id",
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
        element:<News></News>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <RouterProvider router={router} />
  </React.StrictMode>,
)
