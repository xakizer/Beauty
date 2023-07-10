import {useContext} from 'react'
import { LangContext } from '../context/LangContext'

const Footer = () => {
    const [lang] = useContext(LangContext)
  return (
    <footer>
        <div className="container">
            <div className="top p-5">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-4 left">
                        <div className='centerContact'>
                            <ul>
                                <p>{lang === "EN" ? "CONTACT US" : "ƏLAQƏ"}</p>
                                    <li>
                                        <span>
                                            <i className="fa-solid fa-house-chimney" />
                                        </span> 
                                        <p className='address'>
                                            No: 58 A, East Madison <br></br>
                                            Street, Baltimore, MD,<br></br> USA 4508 
                                        </p>
                                    </li>
                                    <div>
                                        <li><i className="fa-solid fa-phone" /> 0123456789</li>
                                        <li><i className="fa-regular fa-clock" />{lang === "EN" ? "9.30AM - 7.30PM" : "9.30 - 7.30"}</li>
                                        <li><i className="fa-solid fa-envelope" /> xakiabbasova@gmail.com</li>
                                    </div>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-8 right">
                        <div className="row">
                            <ul className='col-6 col-sm-6 col-md-3'>
                                <p>{lang === "EN" ? "HELP" : "YARDIM"}</p>
                                <li>{lang === "EN" ? "Search" : "Arayın"}</li>
                                <li>{lang === "EN" ? "Help" : "Yardım"}</li>
                                <li>{lang === "EN" ? "Information" : "Məlumat"}</li>
                                <li>{lang === "EN" ? "Privacy Policy" : "Gizlilik Siyasəti"}</li>
                                <li>{lang === "EN" ? "Shipping Details" : "Təfərrüatlar"}</li>
                            </ul>
                            <ul className='col-6 col-sm-6 col-md-3'>
                                <p>{lang === "EN" ? "SUPPORT" : "DƏSTƏK"}</p>
                                <li>{lang === "EN" ? "Contact Us" : "Əlaqə"}</li>
                                <li>{lang === "EN" ? "About Us" : "Haqqımızda"}</li>
                                <li>{lang === "EN" ? "Careers" : "Karyera"}</li>
                                <li>{lang === "EN" ? "Refunds & Returns" : "Geri dönüşlər"}</li>
                                <li>{lang === "EN" ? "Deliveries" : "Çatdırılmalar"}</li>
                            </ul>
                            <ul className='col-6 col-sm-6 col-md-3'>
                                <p>{lang === "EN" ? "INFORMATION" : "MƏLUMAT"}</p>
                                <li>{lang === "EN" ? "Search Terms" : "Axtarş şərtləri"}</li>
                                <li>{lang === "EN" ? "Advanced Search" : "Təməl Axtarıış"}</li>
                                <li>{lang === "EN" ? "Help & Faq's" : "Yardım & Faks"}</li>
                                <li>{lang === "EN" ? "Store Location" : "Mağaza Ünvanı"}</li>
                                <li>{lang === "EN" ? "Orders & Returns" : "Digər & Dönüşlər"}</li>
                            </ul>
                            <ul className='col-6 col-sm-6 col-md-3'>
                                <p>{lang === "EN" ? "QUICK" : "ÇEVİK"}</p>
                                <li>{lang === "EN" ? "Top Brands" : "Brendlər"}</li>
                                <li>{lang === "EN" ? "Terms & Conditions" : "Şərtlər & Qaydalar"}</li>
                                <li>{lang === "EN" ? "LookBook" : "Kitabça"}</li>
                                <li>{lang === "EN" ? "Blog" : "Bloq"}</li>
                                <li>{lang === "EN" ? "Consultant" : "Məsləhətçi"}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        <hr className='text-light pt-3'></hr>

        <div className="bottom">

            <div className="row">

                <div className="col-12 col-sm-12 col-md-3">
                    <p>{lang === "EN" ? "NEWSLETTERS" : "MƏKTUBLAR"}</p>
                </div>

                <div className="col-12 col-sm-12 col-md-6">

                    <div className="center">

                        <div className="input-group mb-3">
                            <input type="email" className="form-control rounded-0" placeholder={lang === "EN" ? "Your Email Address" : "E-poçt Ünvanınız"} aria-label="Recipient's username" aria-describedby="button-addon2" />
                            <button className="btn rounded-0" type="button" id="button-addon2">{lang === "EN" ? "Subscribe" : "Abunə olun"}</button>
                        </div>

                    </div>

                </div>


                <div className="col-12 col-sm-12 col-md-3">

                    <div className="row">
                        <div className="col-12 col-sm-4 col-md-2">
                            <a href="https://www.facebook.com/" target='_blank'>
                                <i className="fa-brands fa-facebook-f" />
                            </a>
                        </div>
                        <div className="col-12 col-sm-4  col-md-2">
                            <a href="https://www.youtube.com/" target="_blank">                                           
                                <i className="fa-brands fa-youtube" />
                            </a>
                        </div>
                        <div className="col-12 col-sm-4  col-md-2">
                            <a href="https://instagram.com">
                              <i className="fa-brands fa-instagram" />
                            </a>
                        </div>
                    </div>

                </div>


            </div>

        </div>



        </div>
    </footer>
  )
}

export default Footer