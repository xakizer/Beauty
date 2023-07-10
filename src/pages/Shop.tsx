import { useContext, useState} from 'react'
import { ProductContext } from '../context/Context'
import { LinkContainer } from 'react-router-bootstrap'
import ShopCard from '../components/ShopCard'
import Accordion from 'react-bootstrap/Accordion';
import { ToastContainer} from 'react-toastify';
import { LangContext } from '../context/LangContext';

const Shop = () => {
  const [products]= useContext(ProductContext);
  const [lang] = useContext(LangContext)
  const [data,setData] = useState(products.dataEn);
  const [dataAz,setDataAz] = useState(products.dataAz);
  
  // Category Filter Start
  const filterCategory =(cateItem:any)=>{
    const result = products.dataEn?.filter((item:any)=>{
     return item.title === cateItem
    });
    setData(result)
  }
  const filterCategoryAz =(cateItem:any)=>{
    const result = products.dataAz?.filter((item:any)=>{
     return item.title === cateItem
    });
    setDataAz(result)
  }
  // Category Filter End 

  // Color Filter Start
  const filterColor =(colorItem:any)=>{
    const result = products.dataEn?.filter((item:any)=>(
      item.color === colorItem
    ))
    setData(result)
  }
  const filterColorAz =(colorItem:any)=>{
    const result = products.dataAz?.filter((item:any)=>(
      item.color === colorItem
    ))
    setDataAz(result)
  }
  // Color Filter End

  //  Price Filter Start
  const [value , setValue] = useState(0);
  const handleChange=(e:any)=>{
    const value = e.target.value;
    const result = products.dataEn?.filter((item:any)=>{
      return item.price < value;
    });
    setData(result);
     const resultAz = products.dataAz?.filter((item:any)=>{
      return item.price < value
     });
     setDataAz(resultAz);
     setValue(value)

  }
  //  Price Filter End
  
  // Brand Filter Start
  const filterBrand = (brandItem:any)=>{
    const result = products.dataEn?.filter((item:any)=>(
      item.vendor === brandItem
    ))
    setData(result)
  }

  const filterBrandAz = (brandItem:any)=>{
    const result = products.dataAz?.filter((item:any)=>(
      item.vendor === brandItem
    ))
    setDataAz(result)
  }
  // Brand Filter End
  

  return (
    <div className='main'>
      <div className='shop'>

      {/* FIRST SECTION START */}
        <section className="first">
           <div className="container">
               <div className='d-flex flex-column align-items-center justify-content-center'>
                    <h4>{lang === "AZ" ? "KOLLEKSİYA" : "COLLECTION"}</h4>
                    <div>
                      <LinkContainer to="/home">
                        <span>{lang === "AZ" ? "Ana Səhvə" : "Home"}   /</span>
                      </LinkContainer>
                        <span> {lang === "AZ" ? "Məhsullar" : "Products"}</span>
                    </div>
               </div>
             </div>
        </section>
      {/* FIRST SECTION END */}


      {/* COLLECTION SECTION START */}
      <section className="collection">
        <div className="container">
          <div className="row">

              <div className='offCanvas'>
                <button className="btn btnCanvas" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                <i className="fa-solid fa-chevron-right"></i>
                </button>

                <div className="offcanvas offcanvas-start" tabIndex={-1} id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                  <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasExampleLabel"></h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
                  </div>
                  
                  <div className="offcanvas-body">
                              <div className='cateAccordion'>
                                  <h5>{lang === "EN" ? "CATEGORY" : "KATEQORİYA"}</h5>
                                  <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey="0">
                                      {lang === "EN" ? 
                                        <Accordion.Header onClick={()=>(setData(products.dataEn))}>All Cosmetics</Accordion.Header>
                                        :
                                        <Accordion.Header onClick={()=>(setDataAz(products.dataAz))}>Bütün Məhsullar</Accordion.Header>
                                      }
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                      <Accordion.Header>Gel</Accordion.Header>
                                      <Accordion.Body>
                                      {lang === "EN" ? 
                                        <ul>
                                            <li onClick={()=>{filterCategory("Hard Hair Gel")}}>Hard Hair Gel</li>
                                            <li onClick={()=>{filterCategory("Straight Hair Gel")}}>Straight Hair Gel</li>
                                            <li onClick={()=>{filterCategory("Whitening Gel")}}>Whitening Gel</li>
                                        </ul> 
                                        :
                                        <ul>
                                          <li onClick={()=>{filterCategoryAz("Quru Saçlar üçün Gel")}}>Quru Saçlar üçün Gel</li>
                                          <li onClick={()=>{filterCategoryAz("Düz Saçlar üçün Gel")}}>Düz Saçlar üçün Gel</li>
                                          <li onClick={()=>{filterCategoryAz("Ağardıcı Gel")}}>Ağardıcı Gel</li>
                                        </ul>
                                      }
                                      </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                      <Accordion.Header>Mist</Accordion.Header>
                                      <Accordion.Body>
                                      {lang === "EN" 
                                        ?                          
                                            <ul>
                                              <li onClick={()=>{filterCategory("Revitalizer Mist")}}>Revitalizer Mist</li>
                                              <li onClick={()=>{filterCategory("Protection Mist")}}>Protection Mist</li>
                                              <li onClick={()=>{filterCategory("Fine Mist Spray")}}>Fine Mist Spray</li>
                                            </ul>                                     
                                        : 
                                            <ul>
                                              <li onClick={()=>{filterCategoryAz("Canlandırıcı Mist")}}>Canlandırıcı Mist</li>
                                              <li onClick={()=>{filterCategoryAz("Qoruyucu Mist")}}>Qoruyucu Mist</li>
                                              <li onClick={()=>{filterCategoryAz("İncə Qoxulu Sprey")}}>İncə Qoxulu Sprey</li>
                                            </ul> 
                                      }
                                      </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="3">
                                      <Accordion.Header>{lang === "EN" ? "Foundation Cream" : "Qoruyucu Kremlər"}</Accordion.Header>
                                      <Accordion.Body>
                                      {lang === "EN" ?
                                        <ul>
                                          <li onClick={()=>{filterCategory("Perfect BB Cream")}}>Perfect BB Cream</li>
                                          <li onClick={()=>{filterCategory("Moistruze Cream")}}>Moistruze Cream</li>
                                          <li onClick={()=>{filterCategory("Complexion Cream")}}>Complexion Cream</li>
                                        </ul>                                     
                                        :
                                        <ul>
                                          <li onClick={()=>{filterCategoryAz("Mükəmməl BB Krem")}}>Mükəmməl BB Krem</li>
                                          <li onClick={()=>{filterCategoryAz("Nəmləndirici Krem")}}>Nəmləndirici Krem</li>
                                          <li onClick={()=>{filterCategoryAz("Dəri üçün Krem")}}>Dəri üçün Krem</li>
                                        </ul> 
                                        }
                                      </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="4">
                                    {lang === "EN" ?                    
                                      <Accordion.Header onClick={()=>{filterCategory("Saffron Face Gel")}}>Saffron Face Gel</Accordion.Header>
                                    :
                                      <Accordion.Header onClick={()=>{filterCategoryAz("Zəfəran Özlü Üz Geli")}}>Zəfəran Özlü Üz Geli</Accordion.Header>                         
                                    }
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="5">
                                    {lang === "EN" ?          
                                    <Accordion.Header onClick={()=>{filterCategory("Gentle Cleaner")}}>Gentle</Accordion.Header>
                                    :
                                    <Accordion.Header onClick={()=>{filterCategoryAz("Zərif Təmizləyici")}}>Zərif Təmizləyici</Accordion.Header>                    
                                    }
                                    </Accordion.Item>
                                  </Accordion>
                              </div>
                              <div className='cateColor'>
                                <h5>{lang === "EN" ? "COLOR" : "RƏNGLƏR" }</h5>

                                <div className="row">
                                {lang === "EN" ?                 
                                  <div>
                                      <span className='me-2' onClick={()=>{filterColor("Black")}}><i className="fa-solid fa-circle" /></span>
                                      <span className='me-2' onClick={()=>{filterColor("White")}}><i className="fa-solid fa-circle" /></span>
                                      <span className='me-2' onClick={()=>{filterColor("Gray")}}><i className="fa-solid fa-circle" /></span>
                                      <span className='me-2' onClick={()=>{filterColor("Purple")}}><i className="fa-solid fa-circle" /></span>
                                  </div> 
                                  :
                                  <div>
                                    <span className='me-2' onClick={()=>{filterColorAz("Qara")}}><i className="fa-solid fa-circle" /></span>
                                    <span className='me-2' onClick={()=>{filterColorAz("Bəyaz")}}><i className="fa-solid fa-circle" /></span>
                                    <span className='me-2' onClick={()=>{filterColorAz("Boz")}}><i className="fa-solid fa-circle" /></span>
                                    <span className='me-2' onClick={()=>{filterColorAz("Bənövşəyi")}}><i className="fa-solid fa-circle" /></span>
                                  </div>            
                                }             
                                </div>
                              </div>
                              <div className='cateSize'>
                                <h5>{lang === "EN" ? "SHOP BY SIZE" : "ÖLÇÜLƏR" }</h5>
                                  <div className='row mt-4'>
                                    
                                      <div className='col-2 col-sm-2 col-md-2 me-3'>
                                          <button className='btn'>S</button>
                                      </div>

                                      <div className='col-2 col-sm-2 col-md-3'>
                                          <button className='btn'>M</button>
                                      </div>

                                      <div className='col-2 col-sm-2 col-md-2 ms-4'>
                                          <button className='btn'>L</button>
                                      </div>
                                      
                                  </div>
                              </div>
                              <div className='catePrice'>
                                <h5>{lang === "EN" ? "SHORT BY PRICE" : "QİYMƏTLƏR"}</h5>
                                <div className='d-flex justify-content-evenly align-items-center rangeDiv'>
                                    <span>1</span> 
                                    <input type="range" className="range-style" value={value} onChange={handleChange} min={1} max={730}/>
                                    <span>730</span>
                                </div> 
                                <div className='sliderValue'>
                                  {lang === "EN" ? "Price:" : "Qiymət"} <span>to{lang === "EN" ? "to" : "qədər"} {value} $</span>                     
                                </div>                              
                              </div>
                              <div className="cateBrand">
                                <h5>{lang === "EN" ? "SHOP BY BRAND" : "BRENDLƏR"}</h5>
                                {lang === "EN" ? 
                                  <div className="row">
                                      <button className="btn" onClick={()=>{filterBrand("Cindrella")}}>Cindrella</button>
                                      <button className="btn" onClick={()=>{filterBrand("Laura")}}>Laura</button>
                                      <button className="btn" onClick={()=>{filterBrand("Nyka")}}>Nyka</button>
                                      <button className="btn" onClick={()=>{filterBrand("Mystique")}}>Mystique</button>
                                      <button className="btn" onClick={()=>{filterBrand("Liva")}}>Liva</button>
                                  </div>              
                                  :
                                  <div className="row">
                                      <button className="btn" onClick={()=>{filterBrandAz("Cindrella")}}>Cindrella</button>
                                      <button className="btn" onClick={()=>{filterBrandAz("Laura")}}>Laura</button>
                                      <button className="btn" onClick={()=>{filterBrandAz("Nyka")}}>Nyka</button>
                                      <button className="btn" onClick={()=>{filterBrandAz("Mystique")}}>Mystique</button>
                                      <button className="btn" onClick={()=>{filterBrandAz("Liva")}}>Liva</button>
                                  </div>
                                }
                              </div>
                              <div className="cateVendor"> 
                                <h5>{lang === "EN" ? "SHOP BY VENDOR": "SATICILAR"}</h5>
                                  <div className="row">
                                    <button className="btn">Tradino</button>
                                    <button className="btn">Latika</button>
                                    <button className="btn">YouBella</button>
                                    <button className="btn">Nakshi</button>
                                    <button className="btn">Maribel</button>
                                  </div>
                              </div>
                              <div className='miniSlide'>
                                  <h5>HOT DEALS</h5>

                                  <div id="carouselExample" className="carousel slide">
                                    <div className="carousel-inner">
                                    { lang === "EN" ?
                                      products.dataEn?.slice(6,10).map((item:any)=>{
                                        return (
                                          <div className="carousel-item active" key={item.id}>
                                            <img src={item.image} className="d-block w-100" alt="image" />
                                            <div className="carusel-body d-flex flex-column align-items-center mt-2">
                                              <h4>{item.title}</h4>
                                              <p>{item.price} $</p>
                                            </div>
                                          </div>
                                        )
                                      }) :
                                      products.dataAz?.slice(6,10).map((item:any)=>{
                                        return (
                                          <div className="carousel-item active" key={item.id}>
                                            <img src={item.image} className="d-block w-100" alt="image" />
                                            <div className="carusel-body d-flex flex-column align-items-center mt-2">
                                              <h4>{item.title}</h4>
                                              <p>{item.price} $</p>
                                            </div>
                                          </div>
                                        )
                                      })
                                    }
                                    </div>
                                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                                      <span className="carousel-control-prev-icon" aria-hidden="true" />
                                      <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                                      <span className="carousel-control-next-icon" aria-hidden="true" />
                                      <span className="visually-hidden">Next</span>
                                    </button>
                                  </div>
                              </div>
                  </div>

                </div>
              </div>


            <div className="col-12 col-sm-12 col-md-3 allCategories">

              {/* Accordion Start */}
              <div className='cateAccordion'>
                      <h5>{lang === "EN" ? "CATEGORY" : "KATEQORİYA"}</h5>
                      <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                          {lang === "EN" ? 
                          <Accordion.Header onClick={()=>(setData(products.dataEn))}>All Cosmetics</Accordion.Header>
                          :
                          <Accordion.Header onClick={()=>(setDataAz(products.dataAz))}>Bütün Məhsullar</Accordion.Header>
                          }
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                          <Accordion.Header>Gel</Accordion.Header>
                          <Accordion.Body>
                            {lang === "EN" ? 
                                <ul>
                                    <li onClick={()=>{filterCategory("Hard Hair Gel")}}>Hard Hair Gel</li>
                                    <li onClick={()=>{filterCategory("Straight Hair Gel")}}>Straight Hair Gel</li>
                                    <li onClick={()=>{filterCategory("Whitening Gel")}}>Whitening Gel</li>
                                </ul> 
                                :
                                <ul>
                                  <li onClick={()=>{filterCategoryAz("Quru Saçlar üçün Gel")}}>Quru Saçlar üçün Gel</li>
                                  <li onClick={()=>{filterCategoryAz("Düz Saçlar üçün Gel")}}>Düz Saçlar üçün Gel</li>
                                  <li onClick={()=>{filterCategoryAz("Ağardıcı Gel")}}>Ağardıcı Gel</li>
                                </ul>
                            }                                
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                          <Accordion.Header>Mist</Accordion.Header>
                          <Accordion.Body>
                            {lang === "EN" 
                            ?                          
                                <ul>
                                  <li onClick={()=>{filterCategory("Revitalizer Mist")}}>Revitalizer Mist</li>
                                  <li onClick={()=>{filterCategory("Protection Mist")}}>Protection Mist</li>
                                  <li onClick={()=>{filterCategory("Fine Mist Spray")}}>Fine Mist Spray</li>
                                </ul>                                     
                            : 
                                <ul>
                                  <li onClick={()=>{filterCategoryAz("Canlandırıcı Mist")}}>Canlandırıcı Mist</li>
                                  <li onClick={()=>{filterCategoryAz("Qoruyucu Mist")}}>Qoruyucu Mist</li>
                                  <li onClick={()=>{filterCategoryAz("İncə Qoxulu Sprey")}}>İncə Qoxulu Sprey</li>
                                </ul> 
                            }
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                          <Accordion.Header>{lang === "EN" ? "Foundation Cream" : "Qoruyucu Kremlər"}</Accordion.Header>
                          <Accordion.Body>
                            {lang === "EN" ?

                                <ul>
                                  <li onClick={()=>{filterCategory("Perfect BB Cream")}}>Perfect BB Cream</li>
                                  <li onClick={()=>{filterCategory("Moistruze Cream")}}>Moistruze Cream</li>
                                  <li onClick={()=>{filterCategory("Complexion Cream")}}>Complexion Cream</li>
                                </ul>                                     
                             :
                                <ul>
                                  <li onClick={()=>{filterCategoryAz("Mükəmməl BB Krem")}}>Mükəmməl BB Krem</li>
                                  <li onClick={()=>{filterCategoryAz("Nəmləndirici Krem")}}>Nəmləndirici Krem</li>
                                  <li onClick={()=>{filterCategoryAz("Dəri üçün Krem")}}>Dəri üçün Krem</li>
                                </ul> 
                             }
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                          {lang === "EN" ?                    
                          <Accordion.Header onClick={()=>{filterCategory("Saffron Face Gel")}}>Saffron Face Gel</Accordion.Header>
                          :
                          <Accordion.Header onClick={()=>{filterCategoryAz("Zəfəran Özlü Üz Geli")}}>Zəfəran Özlü Üz Geli</Accordion.Header>                         
                          }
                        </Accordion.Item>
                        <Accordion.Item eventKey="5">
                          {lang === "EN" ?          
                          <Accordion.Header onClick={()=>{filterCategory("Gentle Cleaner")}}>Gentle</Accordion.Header>
                          :
                          <Accordion.Header onClick={()=>{filterCategoryAz("Zərif Təmizləyici")}}>Zərif Təmizləyici</Accordion.Header>                    
                          }
                        </Accordion.Item>
                      </Accordion>
              </div>
              {/* Accordion End */}

              {/* Color Start */}
              <div className='cateColor'>
                <h5>{lang === "EN" ? "COLOR" : "RƏNGLƏR" }</h5>

                <div className="row">
                  {lang === "EN" ?                 
                  <div>
                      <span className='me-2' onClick={()=>{filterColor("Black")}}><i className="fa-solid fa-circle" /></span>
                      <span className='me-2' onClick={()=>{filterColor("White")}}><i className="fa-solid fa-circle" /></span>
                      <span className='me-2' onClick={()=>{filterColor("Gray")}}><i className="fa-solid fa-circle" /></span>
                      <span className='me-2' onClick={()=>{filterColor("Purple")}}><i className="fa-solid fa-circle" /></span>
                  </div> 
                  :
                  <div>
                    <span className='me-2' onClick={()=>{filterColorAz("Qara")}}><i className="fa-solid fa-circle" /></span>
                    <span className='me-2' onClick={()=>{filterColorAz("Bəyaz")}}><i className="fa-solid fa-circle" /></span>
                    <span className='me-2' onClick={()=>{filterColorAz("Boz")}}><i className="fa-solid fa-circle" /></span>
                    <span className='me-2' onClick={()=>{filterColorAz("Bənövşəyi")}}><i className="fa-solid fa-circle" /></span>
                  </div>            
                }
                </div>
              </div>
              {/* Color End */}
              
              {/* Size Start */}
              <div className='cateSize'>
                <h5>{lang === "EN" ? "SHOP BY SIZE" : "ÖLÇÜLƏR"}</h5>
                  <div className='row mt-4'>
                    
                      <div className='col-2 col-sm-2 col-md-2 me-3'>
                          <button className='btn'>S</button>
                      </div>

                      <div className='col-2 col-sm-2 col-md-3'>
                          <button className='btn'>M</button>
                      </div>

                      <div className='col-2 col-sm-2 col-md-2 ms-4'>
                          <button className='btn'>L</button>
                      </div>
                      
                  </div>
              </div>
              {/* Size End */}
              
              {/* Price Start */}
              <div className='catePrice'>
                <h5>{lang === "EN" ? "SHORT BY PRICE" : "QİYMƏTLƏR"}</h5> 

                <div className='d-flex justify-content-evenly align-items-center rangeDiv'>
                    <span>1</span> 
                    <input type="range" className="range-style" value={value} onChange={handleChange} min={1} max={730}/>
                    <span>730</span>
                </div> 

                <div className='sliderValue'>
                  {lang === "EN" ? "Price:" : "Qiymət:"}  <span>{lang === "EN" ? "to" : "qədər"} {value} $</span>                     
                </div> 
                                       
              </div> 
              {/* Price End */}

              {/* Brand Start */}
              <div className="cateBrand">
                <h5>{lang === "EN" ? "SHOP BY BRAND" : "BRENDLƏR"}</h5>
                {lang === "EN" ? 
                  <div className="row">
                      <button className="btn" onClick={()=>{filterBrand("Cindrella")}}>Cindrella</button>
                      <button className="btn" onClick={()=>{filterBrand("Laura")}}>Laura</button>
                      <button className="btn" onClick={()=>{filterBrand("Nyka")}}>Nyka</button>
                      <button className="btn" onClick={()=>{filterBrand("Mystique")}}>Mystique</button>
                      <button className="btn" onClick={()=>{filterBrand("Liva")}}>Liva</button>
                  </div>              
                  :
                  <div className="row">
                      <button className="btn" onClick={()=>{filterBrandAz("Cindrella")}}>Cindrella</button>
                      <button className="btn" onClick={()=>{filterBrandAz("Laura")}}>Laura</button>
                      <button className="btn" onClick={()=>{filterBrandAz("Nyka")}}>Nyka</button>
                      <button className="btn" onClick={()=>{filterBrandAz("Mystique")}}>Mystique</button>
                      <button className="btn" onClick={()=>{filterBrandAz("Liva")}}>Liva</button>
                  </div>
                }
              </div>
              {/* Brand End */}
              
              {/* Vendor Start */}
              <div className="cateVendor"> 
                <h5>{lang === "EN" ? "SHOP BY VENDOR": "SATICILAR"}</h5>
                  <div className="row">
                    <button className="btn">Tradino</button>
                    <button className="btn">Latika</button>
                    <button className="btn">YouBella</button>
                    <button className="btn">Nakshi</button>
                    <button className="btn">Maribel</button>
                  </div>
              </div>
              {/* Vendor End */}
              
              {/* Slide Start */}
              <div className='miniSlide'>
                <h5>{lang === "EN" ? "OTHER" : "DİGƏR"}</h5>

                <div id="carouselExample" className="carousel slide">
                  <div className="carousel-inner">

                    { lang === "EN" ?
                    products.dataEn?.slice(6,10).map((item:any)=>{
                      return (
                        <div className="carousel-item active" key={item.id}>
                          <img src={item.image} className="d-block w-100" alt="image" />
                          <div className="carusel-body d-flex flex-column align-items-center mt-2">
                            <h4>{item.title}</h4>
                            <p>{item.price} $</p>
                          </div>
                        </div>
                      )
                    }) :
                    products.dataAz?.slice(6,10).map((item:any)=>{
                      return (
                        <div className="carousel-item active" key={item.id}>
                          <img src={item.image} className="d-block w-100" alt="image" />
                          <div className="carusel-body d-flex flex-column align-items-center mt-2">
                            <h4>{item.title}</h4>
                            <p>{item.price} $</p>
                          </div>
                        </div>
                      )
                    })
                    }
                  </div>
                  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>


              </div>
              {/* Slide End */}
                                        
            </div>

              {/* Shop Products Start */}
              <div className="col-12 col-sm-12 col-md-9 shopProducts">
                <div>
                  <div className="top">
                    <div className="container">
                      <div className="row">

                        <div className="col-4 col-sm-4 col-md-3">
                            <div className='lists'>
                              <span><i className="fa-solid fa-table-cells" /></span>
                              <span><i className="fa-solid fa-list" /></span>
                            </div>
                        </div>

                        <div className="col-4 col-sm-4 col-md-4">
                        <div className="d-flex justify-content-center">
                          <div className="btn-group">
                            <button className="btn btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                             {lang === "AZ" ? "Səhvə seçin" : "Paginate by"}
                            </button>
                            <ul className="dropdown-menu">
                              <li>9</li>
                              <li>12</li>
                              <li>16</li>
                              <li>20</li>
                              <li>24</li>
                              <li>30</li>
                              <li>48</li>
                            </ul>
                          </div>
                        </div>
                                                
                        </div>

                        <div className="col-4 col-sm-4 col-md-5">
                          <div className='d-flex justify-content-center'>
                          <div className="btn-group">
                            <button className="btn btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                              {lang === "AZ" ? "Sıralayın" : "Sort by"}
                            </button>
                            {lang === "EN" ?                      
                            <ul className="dropdown-menu">
                              <li>Featured</li>
                              <li>Best selling</li>
                              <li>Alphabetically,A-Z</li>
                              <li>Alphabetically,Z-A</li>
                              <li>Price,low to high</li>
                              <li>Price,high to low</li>
                              <li>Date,old to new</li>
                              <li>Date,new to old</li>
                            </ul>
                            : 
                            <ul className="dropdown-menu">
                              <li>Seçilən</li>
                              <li>Ən çox satılan</li>
                              <li>Əlifba üzrə,A-Z</li>
                              <li>Əlifba üzrə,Z-A</li>
                              <li>Qiymət,min-max</li>
                              <li>Qiymət,max-min</li>
                              <li>Tarix,köhnədən yeniyə</li>
                              <li>Tarix,yenidən köhnəyə</li>
                            </ul>
                            }
                          </div>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>

                  <div className="products mt-4">
                  <div className="row g-4">
                          {
                            lang === "EN" ?
                          data?.slice(0,15).map((item:any)=>{
                            return(       
                              <ShopCard
                                key={item.id}
                                id={item.id}
                                alldata={item}
                                allItem={item}
                                title={item.title}
                                description={item.description}
                                image={item.image}
                                hovimg={item.hovimg}
                                price={item.price}
                            />
                            )
                          }) :
                          dataAz?.slice(0,15).map((item:any)=>{
                            return(       
                              <ShopCard
                                key={item.id}
                                id={item.id}
                                alldata={item}
                                allItem={item}
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
              </div>
              {/* Shop Products End */}
          </div>
        </div>
      </section>
      {/* COLLECTION SECTION END */}
      
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
   </div>
  )
}

export default Shop