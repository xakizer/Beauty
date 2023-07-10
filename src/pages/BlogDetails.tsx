import { useParams } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { connect } from 'react-redux';

const BlogDetails = ({pvalue}:any) => {
    const {id} = useParams();
    const blogdetails = pvalue.find((p:any)=>p.id == id);

  return (
    <div className="main">
      <div className="blogDetails">
      {/* FIRST SECTION START */}
      <section className='first'>
          <div className="container pt-4">
                {blogdetails === undefined ?  <div className='d-flex justify-content-center align-items-center'><img src="https://freefrontend.com/assets/img/css-loaders/loading.gif" alt="image"/></div> :
                <div className="top"> 
                  <div className='d-flex flex-column align-items-center justify-content-center'>
                      <h4>{blogdetails.title}</h4>
                      <div>
                        <LinkContainer to="/home">           
                          <span>Home   /</span>
                        </LinkContainer>

                        <LinkContainer to="/blog">
                          <span >News /</span>
                        </LinkContainer>
                          <span> {blogdetails.title}</span>
                      </div>
                  </div>
                </div> 
            }
          </div>
      </section>
      {/* FIRST SECTION END */}

      {/* DETAILS SECTION START */}
      <section className='bDetails'>
        <div className="container">
              {blogdetails === undefined ? <div className='d-flex justify-content-center align-items-center'><img src="https://freefrontend.com/assets/img/css-loaders/loading.gif" alt="image"/></div> :
                <div className="px-4 py-5 mt-5 text-center">
                <img className="d-block mx-auto mb-4" src={blogdetails.photo} alt='image'  />

                <h2 className="display-5 fw-bold text-body-emphasis text-start">{blogdetails.title}</h2>

                <p className="icons text-start">
                  <span className="iconUser"><i className="fa-regular fa-user me-2"></i>By Ram M</span> | <span className="iconCalendar"><i className="fa-solid fa-calendar-days me-2"></i>August 28, 2018</span>
                </p>

                  <div className="col-lg-12 allDesc text-start">
                    <p className="lead mb-4">{blogdetails.desc}</p>
                  </div>

                </div>
              }
        </div>
      </section>
      {/* DETAILS SECTION END */}
   </div>
    </div>
  )
}

const mapStateToProps = (state:any) => {
  return {
    pvalue:state
  }
}

export default connect(mapStateToProps)(BlogDetails)