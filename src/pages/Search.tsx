import React, { useContext, useState } from 'react'
import { ProductContext } from '../context/Context'
import ShopCard from '../components/ShopCard';
import { ToastContainer } from 'react-toastify';
import { LangContext } from '../context/LangContext';


const Search:React.FC=() => {
  const [products] = useContext(ProductContext);
  const [query, setQuery] = useState()
  const [lang] = useContext(LangContext)
  return (
    <div className="main">

      <div className="search">
        <div className="container">
          
          <div className="top">
            
                  <div className="container">
                      <div className='d-flex flex-column align-items-center justify-content-center'>
                        <h4>{lang === "AZ" ?"MƏHSULLAR": "PRODUCTS"}</h4>
                        <div>
                            <span>{lang === "AZ" ? "Hamısı": "All"}   /</span>
                            <span> {lang === "AZ" ? "Üz üçün Sehrli Sufle": "Face Magic Souffle"}</span>
                        </div>
                      </div>
                  </div>

                  <div className="d-flex align-items-center justify-content-center">
                    <div className="col-12 col-sm-8 col-md-5">
                        <div className="d-flex align-items-center justify-content-center">
                        <div className="input-groups my-5">
                          <input type="text"  className="form-control" placeholder="Type Here" onChange={(e:any)=>setQuery(e.target.value)} />
                          <div><i className="fa-solid fa-magnifying-glass"></i></div>
                        </div>
                        </div>
                    </div>
                  </div>

          </div>
          
          <div className="row searchProduct">
              {
                lang === "EN" ?
                products.dataEn?.slice(0,30).filter((fd:any)=> fd.title?.toLocaleLowerCase().includes(query)).map((item:any)=>{
                  return(
                    <ShopCard
                      alldata={item}
                      allItem={item}
                      key={item.id}
                      id={item.id}
                      title={item.title}
                      description={item.description}
                      image={item.image}
                      hovimg={item.hovimg}
                      price={item.price}
                  />
                  )
                }) :

                products.dataAz?.slice(0,30).filter((fd:any)=> fd.title?.toLocaleLowerCase().includes(query)).map((item:any)=>{
                  return(
                    <ShopCard
                      alldata={item}
                      allItem={item}
                      key={item.id}
                      id={item.id}
                      title={item.title}
                      description={item.description}
                      image={item.image}
                      hovimg={item.hovimg}
                      price={item.price}
                  />
                  )
                })
              }
          </div>

          
        </div>
      </div>

      <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />     
    </div>


  )
}

export default Search