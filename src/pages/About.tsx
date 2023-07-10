import {useContext} from "react"
import { ProductContext } from "../context/Context"
import { LinkContainer } from "react-router-bootstrap"
import { LangContext } from "../context/LangContext"

const About = () => {
  const [products] = useContext(ProductContext)
  const [lang] = useContext(LangContext)
  return (
    <div className="about">

      {/* FIRST SECTION START */}

      <div className="main">
        <section className="first">
            <div className="container">

                <div className='d-flex flex-column align-items-center justify-content-center'>
                  <h4>{lang === "AZ" ? "HAQQIMIZDA" : "ABOUT US"}</h4>
                  <div>
                    <LinkContainer to="/home">                                   
                      <span>{lang === "AZ" ? "Ana Səhvə" : "Home" }  /</span>
                    </LinkContainer>
                      <span> {lang === "AZ" ? "Haqqımızda" : "About Us"}</span>
                  </div>
                </div>

            </div>
        </section>
      </div>

      {/* FIRST SECTION END */}

      {/* INFORMATION SECTION START */}
      <div className="main">

        <section className="information">

            <div className="container">
                <h4 className="text-center">{lang === "AZ" ? "GÖZƏLLİK DÜNYASINA XOŞ GƏLMİSİNİZ" : "WELCOME TO BEAUTY WORLD"}</h4>
                <div className="row">

                            <div className="col-12 col-sm-12 col-md-6">

                                <div className="d-flex justify-content-end">

                                    <div className="faceCream">
                                          <img src="https://cdn.shopify.com/s/files/1/0014/5673/4311/files/abo-01_600x.jpg?v=1632384047" alt="image" />

                                          <div className="opacity"></div>
                                          
                                          <div className="textLeft">
                                            <h3>{lang === "AZ" ? "İnanılmaz Parlaqlıq" : "Incredible Radiance"}</h3>
                                            <span>{lang === "AZ" ? "Ən Yaxşı Üz Kremləri" : "Best Face Creams"}</span>
                                            <p>
                                              Amet volutpat consequat mauris nunc congue. Convallis a cras<br></br> 
                                              semper auctor neque vitae tempus.Nibh ipsum consequat nisl vel<br></br> 
                                              pretium. Amet mattis vulputate enim.
                                            </p>
                                          </div>
                                    </div>
                                    
                                </div>

                            </div>

                            <div className="col-12 col-sm-12 col-md-6">

                               <div className="photos">
                              
                                  <div className="lipstickImage">
                                    <img src="https://cdn.shopify.com/s/files/1/0014/5673/4311/files/abo-02_baa63b64-d04d-4afd-8b21-9bdd633d1189_600x.jpg?v=1632384175" alt="image"/>
                                    
                                    <div className="opacity"></div>

                                    <div className="lipstickText">
                                      <span>{lang === "AZ" ? "Təbii Nəmləndirici Pomada" : "Natural Moisturizing Lipstick"}</span>
                                      <h3>{lang === "AZ" ? "Qüsursuz Yaş" : "Age Flawless"}</h3>
                                      <p>
                                        Sed vestibulum nulla elementum auctor tincidunt. Aliquam sit amet<br></br> 
                                        cursus mauris. Sed vitae mattis ipsum. Vestibulum enim nulla,<br></br> 
                                        sollicitudin ac hendrerit nec tempor quis nisl.
                                      </p>
                                    </div>

                                  </div>

                                  <div className="paletteImage">
                                    <img src="https://cdn.shopify.com/s/files/1/0014/5673/4311/files/img-3-1_600x.jpg?v=1613525865" alt="image" />
                                    <div className="opacity"></div>
                                    <div className="paletteText">
                                      <span>{lang === "AZ" ? "Toz Göz Kölgəsi Palitrası" : "Dust Eye Shadow Palette"}</span>
                                      <h3>{lang === "AZ" ? "Mükəmməl Gözəllik" : "Perfect Beauty"}</h3>
                                      <p>
                                        Turpis egestas pretium aenean pharetra magna. Varius quam quisque id diam vel quam<br></br>
                                        elementum. Pulvinar mattis nunc sed blandit libero volutpat sed.<br></br> 
                                        Nec feugiat nisl pretium.
                                      </p>
                                    </div>
                                  </div>

                               </div>
                            </div>

                </div>
            </div>

        </section>

      </div>
      {/* INFORMATION SECTION END */}


      {/* STORE SECTION START */}
      <section className="store">
          <div className="container">
                <h4 className="text-center">{lang === "AZ" ? "Unikal Kosmetika Mağazası" : "Unique Cosmetic Store"}</h4>
                <div className="icon-boxes">

                  <div className="d-flex flex-wrap justify-content-center">
                    
                      <div className="icon-box col-12 col-sm-6 col-md-4">
                        <div className="row">
                          <div className="icon-image col-4 col-md-4">
                            <div className="d-flex justify-content-center my-3">
                              <i className="fa fa-book"></i>
                            </div>
                          </div>
                          <div className="col-8 col-md-8">
                            <h4>{lang === "AZ" ? "Ekoloji cəhətdən təmiz" : "Eco-Friendly"}</h4>
                            <p>
                              Quam pellentesque nec nam 
                              aliquam sem. Risus viverra 
                              adipiscing at in tellus integer
                              feugiat scelerisque varius.
                              Fermentum et sollicitudin ac orci 
                              phasellus. Venenatis cras sed.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="icon-box col-12 col-sm-6 col-md-4">
                        <div className="row">
                            <div className="icon-image col-4 col-md-4">
                              <div className="d-flex justify-content-center my-3">
                                <i className="fa fa-bullseye"></i>
                              </div>
                            </div>
                            <div className="col-8 col-md-8">
                              <h4>{lang === "AZ" ? "Təravətliliyi artırın" : "Increase Freshness"}</h4>
                              <p>
                                Quam pellentesque nec nam
                                aliquam sem. Risus viverra 
                                adipiscing at in tellus integer 
                                feugiat scelerisque varius. 
                                Fermentum et sollicitudin ac orci
                                phasellus. Venenatis cras sed.
                              </p>
                            </div>
                        </div>
                      </div>

                      <div className="icon-box col-12 col-sm-6 col-md-4">
                        <div className="row">
                            <div className="icon-image col-4 col-md-4">
                              <div className="d-flex justify-content-center my-3">
                                <i className="fa fa-plane"></i>
                              </div>
                            </div>
                            <div className="col-8 col-md-8">
                              <h4>{lang === "AZ" ? "Ənənəvi Hazırlamalar" : "Traditional Makings"}</h4>
                              <p>
                                Id consectetur purus ut faucibus       
                                pulvinar elementum integer enim.
                                Sed viverra tellus in hac. Tincidunt 
                                nunc pulvinar sapien et ligula      
                                ullamcorper. Massa vitae tortor      
                                condimentum.
                              </p>
                            </div>
                        </div>
                      </div>

                      <div className="icon-box col-12 col-sm-6 col-md-4">
                        <div className="row">
                          <div className="icon-image col-6 col-md-6">
                              <div className="d-flex justify-content-center my-4">
                                  <i className="fa fa-user"></i>
                              </div>
                          </div>
                          <div className="col-8 col-md-8">
                            <h4>{lang === "AZ" ? "Təbii Aroma" : "Natural Aroma"}</h4>
                            <p>
                              Id consectetur purus ut faucibus
                              pulvinar elementum integer enim.
                              Sed viverra tellus in hac. Tincidunt
                              nunc pulvinar sapien et ligula 
                              ullamcorper. Massa vitae tortor 
                              condimentum.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="icon-box col-12 col-sm-6 col-md-4">
                        <div className="row">
                            <div className="icon-image col-4 col-md-4">
                              <div className="d-flex justify-content-center my-3">
                                  <i className="fa fa-bookmark"></i>
                              </div>
                            </div>
                            <div className="col-8 col-md-8">
                              <h4>{lang === "AZ" ? "Üz Aksesuarları" : "Face Accessories"}</h4>
                              <p>
                                Enim nulla aliquet porttitor lacus
                                luctus accumsan. Eu augue ut
                                lectus arcu bibendum at varius vel.
                                Elementum tempus egestas sed 
                                sed risus pretium quam vulputate.
                              </p>
                            </div>
                        </div>
                      </div>

                      <div className="icon-box col-12 col-sm-6 col-md-4">
                            <div className="row">
                              <div className="icon-image col-4 col-md-4">
                                <div className="d-flex justify-content-center my-3">
                                  <i className="fa fa-graduation-cap"></i>
                                </div>
                              </div>
                              <div className="col-8 col-md-8">
                                <h4>{lang === "AZ" ? "Nəmləndirici Krem" : "Moisture Cream"}</h4>
                                <p>
                                  Enim nulla aliquet porttitor lacus
                                  luctus accumsan. Eu augue ut
                                  lectus arcu bibendum at varius vel. 
                                  Elementum tempus egestas sed
                                  sed risus pretium quam vulputate.
                                </p>
                              </div>
                            </div>
                      </div>

                  </div>
                </div>
          </div>
      </section>
      {/* STORE SECTION END */}

      {/* BRAND SECTION START*/}
      <div className="brand">
          <div className="container">

            <div className="d-flex align-items-center justify-content-center">
              <h4 className="text-center">{lang === "AZ" ? "BREND KOSMETİK MƏLUMATLAR İSTEHSALI" : "BRANDED COSMETIC MANUFACTURER"}</h4>
            </div>

            <div className="glamour-look">
                    <div className="row">

                      <div className="col-12 col-sm-12 col-md-5">
                        <div className="d-flex align-items-center justify-content-center flex-column">
                            <h5>{lang === "AZ" ? "QLAMOR GÖRÜNÜŞ" : "THE GLAMOROUS LOOK"}</h5>
                            <p>
                              Sed vestibulum nulla elementum auctor<br></br> 
                              tincidunt. Aliquam sit amet cursus mauris. Sed<br></br> 
                              vitae mattis ipsum. Vestibulum enim nulla,<br></br> 
                              sollicitudin ac hendrerit nec, tempor quis nisl
                            </p>
                        </div>
                      </div>

                      <div className="col-12 col-sm-12 col-md-5">
                        <div className="d-flex flex-column align-items-center">
                          <ul>
                            <li><span><i className="fa-regular fa-circle-dot"></i></span> {lang === "AZ" ? "Kimyəvi Tərkibsiz" : "Chemical Free"}</li>
                            <li><span><i className="fa-regular fa-circle-dot"></i></span> {lang === "AZ" ? "Bitki Mənşəli Losion" : "Herbal Lotion"}</li>
                            <li><span><i className="fa-regular fa-circle-dot"></i></span> {lang === "AZ" ? "100% Təbii" : "100% Natural"}</li>
                            <li><span><i className="fa-regular fa-circle-dot"></i></span> {lang === "AZ" ? "Yağsız" : "Oil Free"}</li>
                            <li><span><i className="fa-regular fa-circle-dot"></i></span> {lang === "AZ" ? "Ekstremal Performans" : "Extreme Performance"}</li>
                          </ul>
                        </div>
                      </div>

                    </div>
            </div>
          </div>
      </div>
      {/* BRAND SECTION END */}

      {/* COSMETIC TEAM SECTION START */}
      <section className="cosmeticTeam">
        <div className="container">
          <div className="row g-3">
            {lang === "AZ" ? 
              products.dataAz?.slice(47,51).map((data:any)=>{
              return(
                <div className="col-12 col-sm-6 col-md-3" key={data.id}>
              
                  <div className="d-flex flex-column align-items-center">
                  <div className="teamCards">
                    <div className="imgTeam">
                        <img src={data.image} alt="image" /> 
                    </div>                
                    <div className="card-body">
                      <h5>{data.title}</h5>
                      <p>{data.description}</p>
                    </div>
                  </div>
                  </div>

                </div>
              )
            }) :
            products.dataEn?.slice(47,51).map((data:any)=>{
              return(
                <div className="col-12 col-sm-6 col-md-3" key={data.id}>
              
                  <div className="d-flex flex-column align-items-center">
                  <div className="teamCards">
                    <div className="imgTeam">
                        <img src={data.image} alt="image" /> 
                    </div>                
                    <div className="card-body">
                      <h5>{data.title}</h5>
                      <p>{data.description}</p>
                    </div>
                  </div>
                  </div>

                </div>
              )
            })
          }
          </div>
        </div>
      </section>
      {/* COSMETIC TEAM SECTION END */}
    </div>
  )
}

export default About