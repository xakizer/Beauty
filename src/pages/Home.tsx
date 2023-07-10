import React,{useContext, useEffect} from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { ProductContext } from '../context/Context'
import SingleCard from '../components/SingleCard'
import SliderCards from '../components/SliderCards'
import { Swiper, SwiperSlide } from "swiper/react";
import AOS from 'aos'
import "aos/dist/aos.css"
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "../sass/style.css";
import { EffectCoverflow, Pagination } from "swiper";
import BestSellerCards from '../components/BestSellerCards'
import BlogCard from '../components/BlogCard'
import { ToastContainer} from 'react-toastify';
import { connect } from 'react-redux'
import { LangContext } from '../context/LangContext'

const Home:React.FC= (props:any) => {

      const [products] = useContext(ProductContext);
      const [lang] = useContext(LangContext)

      useEffect(()=>{
        AOS.init()
      },[])
      
  return (
    <div>
      {/* HERO SECTION START */}
      
          <div className='main'>
              <div className="container">

                  <div id="carouselExampleFade" className="carousel slide carousel-fade">
                      <div className="carousel-inner pt-4">

                        <div className="carousel-item active firstimg ">
                          <img src="https://cdn.shopify.com/s/files/1/1286/1471/t/3/assets/slide-image-1.jpg?v=62848313625720313721665991248" className="d-block w-100" alt="img" />
                              <div className="firstText">
                                      <span>{lang === "AZ" ? "Yeni kolleksiya 2022" : "New collection 2022"}</span>
                                      <h3>{lang === "AZ" ? "ƏN YAXŞI KOSMETİKALAR" : "BEST COSMETICS"}</h3>
                                      <p>       
                                        {lang=== "AZ" ? "Kosmetika və dəriyə qulluq brendləri ilə Mükəmml Gözəlliyi Nümayiş etdirin":"Unveil Beauty Perfection with this Glamorous WordPress Theme for Cosmetics and Skincare Brands"}
                                      </p>
                                      <LinkContainer to="/shop">
                                          <button>{lang === "AZ" ? "İNDİ ALIN " : "SHOP NOW"}</button>
                                      </LinkContainer>
                              </div>
                        </div>

                        <div className="carousel-item secondimg">
                          <img src="https://cdn.shopify.com/s/files/1/1286/1471/t/3/assets/slide-image-2.jpg?v=32308484223091589701665991249" className="d-block w-100" alt="img" />
                                <div className="secondText">
                                      <span>{lang === "AZ" ? "Yeni kolleksiya 2022" : "New collection 2022"}</span>
                                      <h3>{lang === "AZ" ? "ƏN YAXŞI KOSMETİKALAR" : "BEST COSMETICS"}</h3>
                                      <p>
                                       
                                        {lang=== "AZ" ? "Kosmetika və dəriyə qulluq brendləri ilə Mükəmml Gözəlliyi Nümayiş etdirin":"Unveil Beauty Perfection with this Glamorous WordPress Theme for Cosmetics and Skincare Brands"}
                                      </p>
                                      <LinkContainer to="/shop">
                                          <button>{lang === "AZ" ? "İNDİ ALIN " : "SHOP NOW"}</button>
                                      </LinkContainer>
                                </div>
                        </div>
                        
                        <div className="carousel-item thirdimg">
                          <img src="https://cdn.shopify.com/s/files/1/1286/1471/t/3/assets/slide-image-3.jpg?v=68888786435983696731665991250" className="d-block w-100" alt="img" />
                                <div className="thirdText">
                                      <span>{lang === "AZ" ? "Yeni kolleksiya 2015" : "New collection 2015"}</span>
                                      <h3>{lang === "AZ" ? "ƏN YAXŞI KOSMETİKALAR" : "BEST COSMETICS"}</h3>
                                      <p>
                                       
                                        {lang=== "AZ" ? "Kosmetika və dəriyə qulluq brendləri ilə Mükəmml Gözəlliyi Nümayiş etdirin":"Unveil Beauty Perfection with this Glamorous WordPress Theme for Cosmetics and Skincare Brands"}
                                      </p>
                                      <LinkContainer to="/shop">
                                          <button>{lang === "AZ" ? "İNDİ ALIN " : "SHOP NOW"}</button>
                                      </LinkContainer>
                                </div>
                        </div>
                      </div>
                      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="visually-hidden">Previous</span>
                      </button>
                      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="visually-hidden">Next</span>
                      </button>
                  </div>
              </div>
          </div>

      {/* HERO SECTION END */}

      {/* BEAUTY SECTION START */}

          <section className='beauty'>
            <div className="conta pt-5">
              <div className="row g-3">

                <div className='col-12 col-sm-12 col-md-4 left'>

                  <div className="d-flex flex-column align-items-center justify-content-between">
                      <div className='lipstick'>
                          <img src="https://cdn.shopify.com/s/files/1/0014/5673/4311/files/img-1_941b8c8f-3a37-4b13-aa57-ae661a43e6a7_470x.jpg?v=1613525859" alt="image" />
                          <p>{lang === "AZ"? "POMADA" :"LIPSTICK"}</p>
                      </div>

                      <div className='brush'>
                          <img src="https://cdn.shopify.com/s/files/1/0014/5673/4311/files/img-2_355c73f6-79b5-4a87-acab-e886d110b6e1_470x.jpg?v=1613525859" alt="image" />
                          <p>{lang === "AZ"? "FIRÇA" :"BRUSH"}</p>
                      </div>
                  </div>

                </div>


                <div className='col-12 col-sm-12 col-md-4 middle'>
                    <div className='d-flex align-items-center justify-content-center'>
                          <div className='girl'>
                              <img src="https://cdn.shopify.com/s/files/1/0014/5673/4311/files/img-5_25a683aa-88b3-4d73-b4f9-d8b830f02135_360x.jpg?v=1613525859" alt="image" />
                              <p className='text-center'>{lang === "AZ"? "ÜZ GÖZƏLLİYİ" :"FACE BEAUTY"}</p>
                          </div>
                    </div>
                </div>


                <div className='col-12 col-sm-12 col-md-4 right'>

                  <div className="d-flex flex-column justify-content-evenly">
                      <div className='eyeliner'>
                          <img src="https://cdn.shopify.com/s/files/1/0014/5673/4311/files/img-3_ec89805f-bfb7-4455-8076-770c72522702_470x.jpg?v=1613525859" alt="img" />
                          <p>{lang === "AZ"? "LAYNER" :"EYELINER"}</p>
                      </div>
                      
                      <div className='mascara'>
                              <img src="https://cdn.shopify.com/s/files/1/0014/5673/4311/files/img-4_d4b1864f-58d8-4ee6-b82e-5f1beed461b7_470x.jpg?v=1613525859" alt="img" />
                              <p>{lang === "AZ"? "MASKARA" :"MASCARA"}</p>
                      </div>
                  </div>
                                
                </div>
              </div>
            </div>
          </section>

      {/* BEAUTY SECTION END */}

      {/* LOTION SECTION START */}

          <section className='lotion pb-4'>
            <div className="container">

                <div className="top">

                  <div className="row">
                          <div className="col-6 col-sm-6 col-md-7">
                                <h4>{lang === "AZ"? "GÖZƏLLİK LASİONU" :"BEAUTY LOTION "}</h4>
                          </div>

                          <div className="col-6 col-sm-6 col-md-5">
                                  <div className="col-11 col-sm-11 col-md-11">
                                              <p>{lang === "AZ"? "Ən Çox Satılanlar" :"Best Sellers"}</p>
                                  </div>                           
                          </div>
                  </div>
                  
                </div>

                
                <div className="products">
                      <div className="row">

                      {products.length === 0 ? <div className="d-flex align-items-center justify-content-center"><img src="https://freefrontend.com/assets/img/css-loaders/loading.gif" alt="gif"/></div>:
                                  lang === "AZ" ?
                                  products.dataAz?.slice(0,6).map((item:any)=>{
                                    return( 
                                    <SingleCard
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
                                    products.dataEn?.slice(0,6).map((item:any)=>{
                                      return( 
                                      <SingleCard
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
          </section>

      {/* LOTION SECTION END */}

      {/* ARRIVALS SECTION START */}

          <section className='arrivals'>

            <div className="container">

              <div className="top">
                          <div className='d-flex align-items-center justify-content-center'>
                                <h4>{lang === "AZ" ? "YENİ GƏLƏNLƏR" : "NEW ARRIVALS"}</h4>
                          </div>
              </div>

              <div className="sliderProducts">
                  <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={"auto"}
                    coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                  }}
                  pagination={true}
                  modules={[EffectCoverflow, Pagination]}
                  className="mySwiper"
                >
                {lang === "AZ" ?
                products.dataAz?.slice(6,16).map((data:any)=>{
                  return(                    
                      <SwiperSlide key={data.id}>
                        <SliderCards
                              alldata={data}   
                              allItem={data}                          
                              id={data.id}
                              title={data.title}
                              description={data.description}
                              image={data.image}
                              hovimg={data.hovimg}
                              price={data.price}
                        />
                      </SwiperSlide> 
                      )
                }):
                products.dataEn?.slice(6,16).map((data:any)=>{
                  return(                    
                      <SwiperSlide key={data.id}>
                        <SliderCards
                              alldata={data}   
                              allItem={data}                          
                              id={data.id}
                              title={data.title}
                              description={data.description}
                              image={data.image}
                              hovimg={data.hovimg}
                              price={data.price}
                        />
                      </SwiperSlide> 
                      )
                })
              }        
              </Swiper>
                    
        
          
              </div>

            </div>

          </section>

      {/* ARRIVALS SECTION END */}

      {/* TOP SELLER SECTION START */}
      
          <section className='topSeller'>

            <div className="container">

                <div className="conta">

                    <div className="title d-flex justify-content-center">
                      <h4>{lang === "AZ"? "ƏN ÇOX SATILANLAR" : "TOP SELLER"}</h4>
                    </div>

                  <div className="bestSellerProducts">

                      <div className="container">
                        <div className="row">

                              <div className="col-12 col-sm-12 col-md-5">

                                    <div className="cart">

                                        <div className="row">

                                              <div className="col-12 col-sm-12 col-md-11">

                                                  <div className="d-flex align-items-center justify-content-center">
                                                    <img src="https://cdn.shopify.com/s/files/1/0014/5673/4311/products/p16_733d7926-b401-48bd-9a11-b747ecd0243a.jpg?v=1535448457" alt="image" className="card-img-top" />
                                                  </div>

                                                  <div className="card-body">
                                                      <h5 className="card-title text-center">{lang === "AZ"? "Quru Saçlar üçün Gel" : "Hard Hair Gel"}</h5>
                                                      <p className="card-text">329.00 $</p>
                                                  </div>
                                                  <div className="hoverPhoto col-12 col-sm-12 col-md-11">
                                                    <img src="https://cdn.shopify.com/s/files/1/0014/5673/4311/products/p17.jpg?v=1535445416" alt="image" />
                                                  </div>

                                              
                                              </div>

                                        </div>

                                    </div>

                              </div>

                              <div className="col-12 col-sm-12 col-md-7 products">
                                <div className="row g-5 g-sm-4">
                                  {lang === "AZ" ? 
                                  products.dataAz?.slice(13,22).map((data:any)=>{
                                    return(
                                      <BestSellerCards
                                        key={data.id}
                                        id={data.id}
                                        photo={data.image}
                                        hovPhoto={data.hovimg}
                                        title={data.title}
                                        price={data.price}
                                        prevPrice={data.prevPrice}
                                        />
                                    )
                                  }) :
                                  products.dataEn?.slice(13,22).map((data:any)=>{
                                    return(
                                      <BestSellerCards
                                        key={data.id}
                                        id={data.id}
                                        photo={data.image}
                                        hovPhoto={data.hovimg}
                                        title={data.title}
                                        price={data.price}
                                        prevPrice={data.prevPrice}
                                        />
                                    )
                                  })
                                }
                                </div>
                              </div>

                        </div>
                      </div>
                  </div>
                </div>
            </div>
          </section>

      {/* TOP SELLER SECTION END */}
      

      {/* SALE SECTION START */}

          <section className='saleCards'>

              <div className="container">

                    <div className="row">
                      
                        {products.dataEn?.slice(33,35).map((data:any)=>{
                          return(
                            <div className="col-12 col-sm-6 col-md-6" key={data.id}>
                                    <LinkContainer to="/shop">
                                                <div className='cards' data-aos="zoom-in">
                                                      <img src={data.image} alt="image" />                                         
                                                </div>
                                    </LinkContainer>
                            </div>
                          )
                        })}
                  
                    </div>
              
              </div>

          </section>

      {/* SALE SECTION END */}

      {/* FROM THE BLOG SECTION START*/}

          <section className="fromTheBlog">
            
            <div className="container">
              
                <div className="title">
                  <h4>FROM THE BLOG</h4>
                </div>

                <div className="infoCards">
                    <div className="row g-sm-0 g-md-4">
                            {props.pvalue.slice(0,3).map((data:any)=>{
                              return(
                                <div className="col-12 col-sm-12 col-md-4"  key={data.id}>
                                  <BlogCard
                                  id={data.id}
                                  image={data.photo}
                                  title={data.title}
                                  desc={data.desc}
                                  />
                                </div>
                              )
                            })}
                    </div>
                </div>
            </div>

          </section>

      {/* FROM THE BLOG SECTION END */}
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
const mapStateToProps = (state:any) => {
  return {
    pvalue:state
  }
}

export default connect(mapStateToProps)(Home)