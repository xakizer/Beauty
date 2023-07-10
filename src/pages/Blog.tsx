import { LinkContainer } from "react-router-bootstrap"
import { useContext} from 'react'
import { ProductContext } from '../context/Context'
import {connect} from "react-redux"
import BlogCard from "../components/BlogCard";
import { LangContext } from "../context/LangContext";

interface propType{
  pvalue:any
}

const Blog:React.FC<propType> = (props) => {
  const [products ]= useContext(ProductContext);
  const [lang] = useContext(LangContext)

  return (
    <div className="blogPage">
      {/* FIRST SECTION START */}
        <div className="main">
          <section className="first">
              <div className="container">

                  <div className='d-flex flex-column align-items-center justify-content-center'>
                      <h4>{lang === "EN" ? "NEWS" : "XƏBƏRLƏR"}</h4>
                      <div>
                        <LinkContainer to="/home">
                          <span>{lang === "EN" ? "Home" : "Ana Səhvə"}   /</span>                              
                        </LinkContainer>
                          <span> {lang === "EN" ? "News" : "Xəbərlər"}</span>
                      </div>
                  </div>

              </div>
          </section>
        </div>
      {/* FIRST SECTION END  */}

      {/* NEWS SECTION START */}
      <div className="main">

        <section className="news">
          <div className="container">
            <div className="row">

            {/* OFFCANVAS START */}
            <div className="offCanvas">
                      <div>
                        <button className="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                          <i className="fa-solid fa-chevron-right"></i>
                        </button>
                        <div className="offcanvas offcanvas-start" tabIndex={-1} id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                          <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasExampleLabel"></h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
                          </div>
                          <div className="offcanvas-body">

                          <div className="col-12">
                            <div className="recent">
                              <h5>Recent Articles</h5>
                                {lang === "EN" ?
                                products.dataEn?.slice(35,40).map((data:any)=>{
                                  const {id} = data
                                  return(
                                    <div className="row" key={id}>
                                      <div className="col-12 col-sm-12 col-md-5 blogImg">
                                        <img src={data.image} alt="image"/>
                                      </div>
                                      <div className="col-12 col-sm-12 col-md-7 recentBody">
                                        <h6>{data.title}</h6>
                                        <p>{data.descriptionFirst.substring(0,30)}...</p>
                                      </div>
                                    </div>
                                  )
                                }) :
                                products.dataAz?.slice(35,40).map((data:any)=>{
                                  const {id} = data
                                  return(
                                    <div className="row" key={id}>
                                      <div className="col-12 col-sm-12 col-md-5 blogImg">
                                        <img src={data.image} alt="image"/>
                                      </div>
                                      <div className="col-12 col-sm-12 col-md-7 recentBody">
                                        <h6>{data.title}</h6>
                                        <p>{data.descriptionFirst.substring(0,25)}...</p>
                                      </div>
                                    </div>
                                  )
                                })
                                }
                            </div>

                            <div className="tags">
                            <h5>{lang === "EN" ? "Tags" : "Etiketlər"}</h5>
                              <p>{lang === "EN" ? "Brust" : "Qabarıq"}</p>
                              <p>{lang === "EN" ? "Compact Powder" : "Kompakt Toz"}</p>
                              <p>{lang === "EN" ? "Eye Shades" : "Göz Kolgəsi"}</p>
                              <p>{lang === "EN" ? "Foundation" : "Örtücü"}</p>
                              <p>{lang === "EN" ? "Makeup" : "Vizaj"}</p>
                              <p>{lang === "EN" ? "Shades" : "Kölgələr"}</p>
                            </div>

                            <div className="bestSeller">
                              <h5>Best Sellers</h5>
                              {lang === "EN" ?
                              products.dataEn?.slice(25,29).map((data:any)=>{
                                const {id} = data
                                return(
                                  <div className="row" key={id}>
                                      <div className="col-12 col-sm-12 col-md-5 bSellerImg">
                                        <img src={data.image} alt="image"/>
                                      </div>
                                      <div className="col-12 col-sm-12 col-md-7 bsBody">
                                        <h6>{data.title}</h6>
                                        <p>$ {data.price}</p>
                                      </div>
                                </div>
                                )
                              })  :
                              products.dataAz?.slice(25,29).map((data:any)=>{
                                const {id} = data
                                return(
                                  <div className="row" key={id}>
                                      <div className="col-12 col-sm-12 col-md-5 bSellerImg">
                                        <img src={data.image} alt="image"/>
                                      </div>
                                      <div className="col-12 col-sm-12 col-md-7 bsBody">
                                        <h6>{data.title}</h6>
                                        <p>{data.price} ₼</p>
                                      </div>
                                </div>
                                )
                              })
                              }
                            </div>
                          </div>
                          </div>
                        </div>
                      </div>       
            </div>
            {/* OFFCANVAS END */}




            <div className="col-12 col-sm-12 col-md-4 canvasBody">
              <div className="recent">
                <h5>{lang === "EN" ? "Recent Articles" : "Son Məqalələr"}</h5>
                  {
                  lang === "EN" ?
                  products.dataEn?.slice(35,40).map((data:any)=>{
                    const {id} = data
                    return(
                      <div className="row" key={id}>
                        <div className="col-12 col-sm-12 col-md-5 blogImg">
                          <img src={data.image} alt="image"/>
                        </div>
                        <div className="col-12 col-sm-12 col-md-7 recentBody">
                          <h6>{data.title}</h6>
                          <p>{data.descriptionFirst.substring(0,30)}...</p>
                        </div>
                       </div>
                    )
                  }) :
                  products.dataAz?.slice(35,40).map((data:any)=>{
                    const {id} = data
                    return(
                      <div className="row" key={id}>
                        <div className="col-12 col-sm-12 col-md-5 blogImg">
                          <img src={data.image} alt="image"/>
                        </div>
                        <div className="col-12 col-sm-12 col-md-7 recentBody">
                          <h6>{data.title}</h6>
                          <p>{data.descriptionFirst.substring(0,25)}...</p>
                        </div>
                       </div>
                    )
                  })
                  }
              </div>

              <div className="tags">
                <h5>{lang === "EN" ? "Tags" : "Etiketlər"}</h5>
                  <p>{lang === "EN" ? "Brust" : "Qabarıq"}</p>
                  <p>{lang === "EN" ? "Compact Powder" : "Kompakt Toz"}</p>
                  <p>{lang === "EN" ? "Eye Shades" : "Göz Kolgəsi"}</p>
                  <p>{lang === "EN" ? "Foundation" : "Örtücü"}</p>
                  <p>{lang === "EN" ? "Makeup" : "Vizaj"}</p>
                  <p>{lang === "EN" ? "Shades" : "Kölgələr"}</p>
              </div>

              <div className="bestSeller">
                <h5>Best Sellers</h5>
                {lang === "EN" ?
                products.dataEn?.slice(25,29).map((data:any)=>{
                  const {id} = data
                  return(
                    <div className="row" key={id}>
                        <div className="col-12 col-sm-12 col-md-5 bSellerImg">
                          <img src={data.image} alt="image"/>
                        </div>
                        <div className="col-12 col-sm-12 col-md-7 bsBody">
                          <h6>{data.title}</h6>
                          <p>$ {data.price}</p>
                        </div>
                  </div>
                  )
                }) :
                products.dataAz?.slice(25,29).map((data:any)=>{
                  const {id} = data
                  return(
                    <div className="row" key={id}>
                        <div className="col-12 col-sm-12 col-md-5 bSellerImg">
                          <img src={data.image} alt="image"/>
                        </div>
                        <div className="col-12 col-sm-12 col-md-7 bsBody">
                          <h6>{data.title}</h6>
                          <p>{data.price} ₼</p>
                        </div>
                  </div>
                  )
                })
                }
              </div>
            </div>

            <div className="col-12 col-sm-12 col-md-8 infoCards">
              <div className="row">
              {props.pvalue.map((item:any)=>{
                return(
                  <div className="col-12 col-sm-12 col-md-6"  key={item.id}>
                    <BlogCard
                        id={item.id}
                        image={item.photo}
                        title={item.title}
                        desc={item.desc}
                    />
                  </div>
                )
              })}
              </div>
            </div>

            </div>
          </div>
        </section>

      </div>
      {/* NEWS SECTION START */}
    </div>
  )
}

const mapStateToProps =(state:string)=>{
  return{
    pvalue:state
  }
}

export default connect(mapStateToProps)(Blog)