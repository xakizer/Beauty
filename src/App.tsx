import React, { useContext } from 'react'
import { BrowserRouter ,Routes ,Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Shop from './pages/Shop'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Header from './components/Header'
import Search from './pages/Search'
import Login from './pages/Login'
import Footer from './components/Footer'
import { ProductProvider } from './context/Context'
import ProductDetails from './pages/ProductDetails'
import { CartProvider } from 'react-use-cart'
import { WishlistProvider } from "react-use-wishlist"
import Cart from './pages/Cart'
import Wishlist from './pages/Wishlist'
import BlogDetails from './pages/BlogDetails'
import Dashboard from './admin/Dashboard'
import AddBlog from './update/AddBlog'
import EditBlog from './update/EditBlog'
import NotFoundPage from './pages/NotFoundPage'
import { ThemeContext, ThemeProvider } from './context/ThemeContext'
import { LangProvider } from './context/LangContext'
import UserInfo from './pages/UserInfo'


const Main =()=>{
  const [mode] = useContext(ThemeContext);
    return (
      <div className={mode}>
        <ProductProvider>         
          <WishlistProvider>
            <CartProvider>
                <Header/>
                    <Routes>
                        <Route path='/' element={<Home/>}></Route>
                        <Route path='/home' element={<Home/>}></Route>
                        <Route path='/home/:url' element={<ProductDetails />}></Route>
                        <Route path='/home/blog/:url' element={<BlogDetails/>}></Route>
                        <Route path='/shop' element={<Shop/>}></Route>
                        <Route path='/about' element={<About/>}></Route>
                        <Route path='/blog' element={<Blog/>}></Route>
                        <Route path='/blog/:id' element={<BlogDetails/>}></Route>
                        <Route path='/dashboard' element={<Dashboard/>}></Route>
                        <Route path='/dashboard/add' element={<AddBlog/>}></Route>
                        <Route path='/userinfo' element={<UserInfo/>}></Route>
                        <Route path='/dashboard/edit/:id' element={<EditBlog/>}></Route>
                        <Route path='/contact' element={<Contact/>}></Route>
                        <Route path='/search' element={<Search/>}></Route>
                        <Route path='/cart' element={<Cart/>}></Route>
                        <Route path='/login' element={<Login/>}></Route>
                        <Route path='/wishlist' element={<Wishlist/>}></Route>
                        <Route path='*' element={<NotFoundPage/>}></Route>
                    </Routes>
                <Footer/>
              </CartProvider>
          </WishlistProvider>
        </ProductProvider>
      </div>
    )
}



const App:React.FC = () => {
  return (
    <div>
        <BrowserRouter>
          <LangProvider>
            <ThemeProvider>
              <Main/>
            </ThemeProvider>
          </LangProvider>
        </BrowserRouter>
    </div>
  )
}

export default App