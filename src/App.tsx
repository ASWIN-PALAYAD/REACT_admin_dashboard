import Home from "./pages/home/Home"
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Users from "./pages/users/Users";
import Products from "./pages/products/Products";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Menu from "./components/menu/Menu";
import './styles/global.scss'
import User from "./pages/user/User";
import Product from "./pages/product/Product";


function App() {
  
  //layout
  const Layout = () => {
    return (
      <div className="main">
        <Navbar/>
        <div className="container">
          <div className="menuContainer">
              <Menu/>
          </div>
          <div className="contentContainer">
            <Outlet/>
          </div>  
        </div>
        <Footer/>
      </div>
    )
  }

//for normal routing without layout
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: (
  //       <Home/>
  //     ),
  //   },
  //   {
  //     path: "users",
  //     element: <Users/>,
  //   },
  //   {
  //     path: "products",
  //     element: <Products/>,
  //   },
  // ]);

  //routing using with layout

  const router = createBrowserRouter([
    {
      path : '/',
      element: <Layout/>,
      children:[
        {path:'/', element:<Home/>},
        {path:'/users', element:<Users/>},
        {path:'/products',element:<Products/>},
        {path:'/users/:id',element:<User/>},
        {path:'/products/:id',element:<Product/>}
      ]
    }
  ]);

  return (
    <RouterProvider router={router}/>
  )
}

export default App
