import { LinkContainer } from 'react-router-bootstrap'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useContext } from 'react';
import { LangContext } from '../context/LangContext';


const Contact = () => {
    const [lang] = useContext(LangContext)
  return (
    <div className="contact">
        {/* FIRST SECTION START */}
        <div className="main">
          <section className="first">
            <div className="container">

                <div className='d-flex flex-column align-items-center justify-content-center'>
                                        <h4>{lang === "AZ" ? "ƏLAQƏ" :"CONTACT US"}</h4>
                                        <div>
                                          <LinkContainer to="/home">                                         
                                            <span>{lang === "AZ" ? "Ana Səhvə" :"Home"}   /</span>
                                          </LinkContainer>
                                            <span> {lang === "AZ" ? "Əlaqə" :"Contact Us"}</span>
                                        </div>
                </div>

              </div>
          </section>
        </div>
        {/* FIRST SECTION END */}

        {/* LOCATION SECTION START */}
        <div className="main">

          <section className="location">
            <div className="container">
              <div className="row g-4">

                    <div className="col-12 col-sm-12 col-md-4">
                          <div className='container'>
                            <div className='iconDiv'><i className="fa-solid fa-phone"></i></div>
                            <div className="addressText">
                                  <h5>{lang === "AZ" ? "TELEFON": "PHONE"}</h5>
                                  <p>
                                    <span>{lang === "AZ" ? "Ödənişsiz:": "Toll-Free:"}</span> 0123 - 456 - 789<br></br>
                                    <span>{lang === "AZ" ? "Faks:": "Fax:"}</span>  0123 - 456 - 789
                                  </p>
                            </div>
                          </div>
                    </div>

                    <div className="col-12 col-sm-12 col-md-4">
                          <div className='container'>
                            <div className='iconDiv'><i className="fa-solid fa-envelope"></i></div>
                            <div className="addressText">
                                  <h5>{lang === "AZ" ? "E-POÇT": "EMAIL"}</h5>
                                  <p>
                                    mail@example.com<br></br>
                                    support@example.com
                                  </p>
                            </div>
                          </div>
                    </div>

                    <div className="col-12 col-sm-12 col-md-4">
                          <div className='container'>
                            <div className='iconDiv'><i className="fa-solid fa-location-arrow"></i></div>
                            <div className="addressText">
                                  <h5>{lang === "AZ" ? "ÜNVAN": "ADDRESS"}</h5>
                                  <p>
                                    <span>No:</span> 58 A, East Madison Street,
                                    Baltimore, MD, USA 4508
                                  </p>
                            </div>
                          </div>
                    </div>
               
              </div>
            </div>
          </section>

        </div>
        {/* LOCATION SECTION END */}

        {/* CONTACT FORM SECTION START */}
        <section className='mapAndForm'>
          <div className="container">
            <div className="row g-3">

                <div className="map col-12 col-sm-12 col-md-6">
                  <div className="d-flex justify-content-center">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2773479.1588229793!2d-123.52253773688622!3d47.24639979681825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485e5ffe7c3b0f9%3A0x944278686c5ff3ba!2zVmHFn2lucXRvbiwgQW1lcmlrYSBCaXJsyZnFn21pxZ8gxZ50YXRsYXLEsQ!5e0!3m2!1saz!2saz!4v1684074496995!5m2!1saz!2saz" width="600" height="450" loading="lazy"></iframe>
                  </div>
                </div>

                <div className="form col-12 col-sm 12 col-md-6">
                  <div className='d-flex flex-column justify-content-center align-items-center'>

                        <div className="d-flex justify-content-center">
                            <h4>{lang === "AZ" ? "ƏLAQƏ FORMU" : "CONTACT FORM"}</h4>
                        </div>

                      <Form className='col-12 col-sm-12 col-md-10'>
                        <Form.Group className="mb-3">
                          <Form.Control type="text" placeholder={lang === "AZ" ? "Adınız": "Name"} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Control type="email" placeholder={lang === "AZ" ? "E-poçt ünvanı": "Email Address"} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Control type="text" placeholder={lang === "AZ" ? "Telefon": "Phone"} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Control as="textarea" rows={4} placeholder={lang === "AZ" ? "Mesaj": "Message"} id="textArea" />
                        </Form.Group>
                        <Button type="submit">{lang === "AZ" ? "Göndər": "Send"}</Button>
                      </Form>

                  </div>
                </div>
                
            </div>
          </div>
        </section>
        {/* CONTACT FORM SECTION END */}
    </div>
  )
}

export default Contact