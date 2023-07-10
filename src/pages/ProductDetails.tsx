import {useContext} from 'react'
import { useParams } from 'react-router-dom';
import { ProductContext } from '../context/Context';
import { useCart } from 'react-use-cart'
import { toast,ToastContainer } from 'react-toastify';
import { useWishlist } from "react-use-wishlist";
import { LangContext } from '../context/LangContext';


const ProductDetails = () => {
    const [products] = useContext(ProductContext)
    const {url} = useParams();
    const [lang] = useContext(LangContext)
    const productdetails = products.dataEn?.find((p:any)=>p.id == url);
    const productdetailsAz = products.dataAz?.find((p:any)=>p.id == url);

    const { addItem } = useCart();
    const {addWishlistItem} = useWishlist();
    

    const notify = () => toast.success("Added To Cart", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
  
      const noti=()=> toast.info('Added To Wishlist', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });



  return (
    <div className="main">
        <div className='productDetails'>
        {/* FIRST SECTION START  */}
        <section className='first'>
            <div className="container pt-4">
                <div className="top"> 
                    <div className='d-flex flex-column align-items-center justify-content-center'>
                        <h4>{lang === "EN" ? "PRODUCT" : "MƏHSUL"}</h4>
                        <div>
                            <span>{lang === "EN" ? "All" : "Hər biri"}   /</span>
                            <span> {lang === "EN" ? "Face Magic Souffle" : "Sehrli Məhsul"} </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* FIRST SECTION END */}

        {/* DETAILS PRODUCT SECTION START */}
        <section className='detailsProduct'>
            <div className="container-fluid">
            <div className="container">
                <div className="bottom">
                    {productdetails === undefined ? <div  className='d-flex justify-content-center align-items-center'><img src="https://freefrontend.com/assets/img/css-loaders/loading.gif" alt="image"/></div> :
                    lang === "EN" ?                
                    <div className="col-xxl-11 px-4 py-5">
                        <div className="row flex-lg-row-reverse align-items-start g-5 py-5">
    
                            <div className="col-lg-6 p-4">
                                        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">{productdetails.title}</h1>
                                        <p className="lead">{productdetails.description}</p>
                                        <div className='row'>
                                            <div  className='col-6 col-sm-6 col-md-4'>
                                                <p>Price:</p>
                                                <p>Color:</p>
                                                <p>Vendor:</p>
                                                <p>Type:</p>
                                            </div>
                                            <div  className='col-6 col-sm-6 col-md-6'>
                                                <p>$ {productdetails.price}</p>
                                                <p>{productdetails.color}</p>
                                                <p>{productdetails.vendor}</p>
                                                <p>{productdetails.type}</p>
                                            </div>
                                        </div>
                                        <div className='btn-group row g-1'>
                                            <div className='col-sm-8 col-md-8'>
                                                <button className='btn rounded-0' onClick={()=>{addItem(productdetails);notify()}}>Add To Cart</button>
                                            </div>
                                            <div className='col-sm-9 col-md-9'>
                                                <button className='btn rounded-0' onClick={()=>{addWishlistItem(productdetails);noti()}}>Add To Wishlist</button>
                                            </div>
                                        </div>
                            </div>
    
                            <div className="col-10 col-sm-10 col-lg-6 productImage">
                                <img src={productdetails.image} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width={700} height={500} loading="lazy" />
                            </div>
                        </div>
                    </div>                           
                    :
                    <div className="col-xxl-11 px-4 py-5">
                        <div className="row flex-lg-row-reverse align-items-start g-5 py-5">
    
                            <div className="col-lg-6 p-4">
                                        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">{productdetailsAz.title}</h1>
                                        <p className="lead">{productdetailsAz.description}</p>
                                        <div className='row'>
                                            <div  className='col-6 col-sm-6 col-md-4'>
                                                <p>Qiymət:</p>
                                                <p>Rəng:</p>
                                                <p>Vendor:</p>
                                                <p>Tip:</p>
                                            </div>
                                            <div  className='col-6 col-sm-6 col-md-6'>
                                                <p>{productdetailsAz.price} ₼</p>
                                                <p>{productdetailsAz.color}</p>
                                                <p>{productdetailsAz.vendor}</p>
                                                <p>{productdetailsAz.type}</p>
                                            </div>
                                        </div>
                                        <div className='btn-group row g-1'>
                                            <div className='col-sm-8 col-md-8'>
                                                <button className='btn rounded-0' onClick={()=>{addItem(productdetailsAz);notify()}}>Karta Əlavə Et</button>
                                            </div>
                                            <div className='col-sm-9 col-md-9'>
                                                <button className='btn rounded-0' onClick={()=>{addWishlistItem(productdetailsAz);noti()}}>Bəyən</button>
                                            </div>
                                        </div>
                            </div>
    
                            <div className="col-10 col-sm-10 col-lg-6 productImage">
                                <img src={productdetailsAz.image} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width={700} height={500} loading="lazy" />
                            </div>
                        </div>
                    </div>
                    
                    }
                </div>
                </div>
            </div>
        </section>
        {/* DETAILS PRODUCT SECTION END */}
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

export default ProductDetails