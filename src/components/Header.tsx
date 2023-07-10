import React, { useContext, useEffect } from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import { useCart } from 'react-use-cart'
import { useWishlist } from 'react-use-wishlist'
import { ThemeContext } from '../context/ThemeContext'
import { LangContext } from '../context/LangContext'
import LogBtn from './LogBtn'


const Header:React.FC = () => {

  const scrollTop=()=>{
    window.scrollTo({
      top:0,
      behavior: "smooth"
    })
  }
  const {totalItems} = useCart();
  const {totalWishlistItems} = useWishlist()
  
  // Onscroll Start
  window.onscroll = function() {myFunction()}

  function myFunction(){
    const header:any =  document.getElementById("bottom")
    if(document.documentElement.scrollTop > 200){
      header.className = "sticky";
    }else{
      header.className = "bottom"
    }
  }
  // Onscroll End

  // Mode and Language Start
  const [mode,setMode] = useContext(ThemeContext);
  const [lang,setLang] = useContext(LangContext);
  useEffect(()=>{
    if(localStorage.getItem("mode") === null || localStorage.getItem("lang") === null){
      localStorage.setItem("mode","dark")
      localStorage.setItem("lang","EN")
    }
  },[])
  // Mode and Language End



  return (
    <div className='main'>
        <header>

            <div className="container top">
              <div className="row pt-3">
                <div className='col-12 col-sm-12 col-md-4'>

                   <div className="d-flex justify-content-center">
                            <img src="https://cdn.shopify.com/s/files/1/0014/5673/4311/files/logo_1.png?v=1625135966" alt="logo" />
                   </div>

                </div>

                  <div className='col-12 col-sm-12 col-md-4 icons'>
                    <div>

                      <LinkContainer to="/search">
                             <button className='btn border-0 col-2 col-sm-3' onClick={scrollTop}><i className="fa-solid fa-magnifying-glass"></i></button>
                      </LinkContainer>

                      <LinkContainer to="/cart">
                            <button className='btn border-0 col-2 col-sm-3' onClick={scrollTop}><i className="fa-solid fa-cart-shopping"></i>({totalItems})</button>
                      </LinkContainer>

                      <LinkContainer to="/wishlist">
                            <button className='btn border-0 col-2 col-sm-3' onClick={scrollTop}><i className="fa-solid fa-heart">({totalWishlistItems})</i></button>
                      </LinkContainer>

                    </div>
                  </div>

                  <div className="col-12 col-sm-12 col-md-4">

                    <div className='col-11 col-sm-8 col-md-9 mx-auto'>

                      <div className="button-group">
                        <button type="button" className='mode btn' onClick={()=>
                        {  mode === "dark"? setMode("light")  : setMode("dark") 
                           mode === "dark"? localStorage.setItem("mode","light") : localStorage.setItem("mode","dark")
                        }
                                  
                        }>
                        {mode === "light"? "dark":"light"}                                      
                        </button>

                        <button className="btn" type="button"  
                        onClick={()=>
                          {  lang === "EN"? setLang("AZ")  : setLang("EN") ;
                             lang === "EN"? localStorage.setItem("lang","AZ") : localStorage.setItem("lang","EN");
                          }   
                          }
                        >
                          {lang === "AZ" ? "EN" : "AZ"}
                        </button>
                        <LogBtn/>                           

                      </div>

                    </div>

                  </div>

              </div>
            </div>


            <div className="bottom" id="bottom">

                      <nav className="navbar navbar-expand-lg bg-body-tertiary mt-5 container">
                      <div className="container-fluid">
                          <button className="navbar-toggler navbar-toggle-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                                  <LinkContainer to="/home">
                                      <li className="nav-item">
                                        <a className="nav-link" aria-current="page" onClick={scrollTop}>{lang === "EN" ? "HOME" : "ANA SƏHVƏ"}</a>
                                      </li>
                                  </LinkContainer>
                                  <LinkContainer to="/shop">
                                        <li className="nav-item">
                                          <a className="nav-link" onClick={scrollTop}>{lang === "EN" ? "SHOP" : "MAĞAZA"}</a>
                                        </li>
                                  </LinkContainer>
                                <LinkContainer to="/about">
                                        <li className="nav-item">
                                          <a className="nav-link" onClick={scrollTop}>{lang === "EN" ? "ABOUT US" : "HAQQIMIZDA"}</a>
                                        </li>
                                </LinkContainer>
                                  <LinkContainer to="/blog">
                                        <li className="nav-item">
                                          <a className="nav-link" onClick={scrollTop}>{lang === "EN" ? "BLOG" : "BLOQ"}</a>
                                        </li>
                                  </LinkContainer>
                                  <LinkContainer to="/contact">
                                        <li className="nav-item">
                                          <a className="nav-link" onClick={scrollTop}>{lang === "EN" ? "CONTACT" : "ƏLAQƏ"}</a>
                                        </li>
                                  </LinkContainer>                        
                          </ul>
                        </div>
                      </div>
                    </nav>

            </div>
        </header>
    </div>
  )
}

export default Header