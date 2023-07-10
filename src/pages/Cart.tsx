import { useCart } from "react-use-cart"
import { useWishlist } from "react-use-wishlist";
import { toast,ToastContainer } from 'react-toastify';
import BuyButton from "../components/BuyButton";
import { useContext } from "react";
import { LangContext } from "../context/LangContext";


const Cart = () => {

    const {items ,isEmpty , cartTotal,removeItem,updateItemQuantity} = useCart();
    const {addWishlistItem} = useWishlist();
    const [lang] = useContext(LangContext)

    const notify=()=> toast.info('Added To Wishlist', {
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
        <div className="addToCart">
         {isEmpty ? <div className="d-flex align-items-center justify-content-center py-5"><img src="https://cdn.shopify.com/s/files/1/0012/0782/8575/t/3/assets/cart.gif?1253" style={{width:250}} alt="image"/></div> :
    
        <div className="container py-5">
            <div className="row g-4">
            {items.map((item:any)=>{
                return(
                    <div className='col-12 col-sm-6 col-md-4' key={item.id}>
                        <div className="card rounded-0">
                            <img src={item.image} className="" alt="image" />

                            <div className="card-body">
                                <h5 className="card-title">{item.title}</h5>
                                <p className="card-text">{item.price.toFixed()*item.quantity} $</p>
                                <div className='quantity'>
                                    <button className="me-2" onClick={() => updateItemQuantity(item.id, item.quantity - 1)}><i className="fa-solid fa-minus"></i></button>
                                    <span>{item.quantity}</span>
                                    <button className="ms-2" onClick={() => updateItemQuantity(item.id, item.quantity + 1)}><i className="fa-solid fa-plus"></i></button>
                                </div>
                            </div>

                            <button className="btn removeBtn" onClick={() => removeItem(item.id)}>
                                <i className="fa-solid fa-xmark"></i>
                            </button>

                            <button className="btn wishBtn" onClick={()=>{addWishlistItem(item);notify()}}>
                                <i className="fa-regular fa-heart"></i>
                            </button>
                            
                        </div>
                    </div>
                )
            })}
            </div>
            <div className="totalPriceAndBtn my-4 d-flex flex-column justify-content-center align-items-center">
                <p>{lang === "AZ" ? "Yekun Qiymət:" : "Total Price:"} {cartTotal} $</p>
                <BuyButton/>
            </div>
        </div>
        }
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

export default Cart