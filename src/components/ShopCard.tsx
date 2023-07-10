import { LinkContainer } from "react-router-bootstrap"
import { useCart } from 'react-use-cart'
import { toast } from 'react-toastify';
import { useWishlist } from "react-use-wishlist";


interface propType{
    alldata:any,
    allItem:any,
    id:number,
    title:string,
    description:string,
    image:string,
    hovimg:string,
    price:number,
}

function  ShopCard({image,title,price,hovimg,id,alldata,allItem}:propType){

      const scrollTop=()=>{
            window.scrollTo({
              top:0,
              behavior: "smooth"
            })
          }

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

 
      const handleCard=()=>{
            addItem(alldata)
            notify()
      }

      const handleWish=()=>{
            addWishlistItem(allItem)
            noti()
      }
  
    return (
      
      <div className="col-12 col-sm-6 col-md-4">
                                              
      <div className='cards'>
  
            <img src={image} className="card-img-top" alt="image" />
            <div className="card-body">
                  <h5 className="card-title">{title}</h5>
                  <p className="card-text">{price} $</p>
            </div>

            <div className='hover'>
                  <img src={hovimg} className="card-img-top" alt="image" />
                  <div className="card-body">
                        <div className="col-4 col-sm-2 col-md-2">                                            
                              <button className='btn' onClick={handleCard}>
                                    <i className="fa-solid fa-basket-shopping" />
                              </button>
                        </div>
                  <LinkContainer to={`/home/${id}`}>
                        <div className="col-4 col-sm-2 col-md-2">
                              <button className='btn' onClick={scrollTop}>
                                  <i className="fa-brands fa-readme"></i>
                              </button>             
                        </div>
                  </LinkContainer>                                                           
                  <LinkContainer to="/search">
                        <div className="col-4 col-sm-2 col-md-2">
                              <button className='btn' onClick={scrollTop}>
                                  <i className="fa-solid fa-magnifying-glass" />
                              </button>
                        </div>
                  </LinkContainer>
                        <div className="col-4 col-sm-2 col-md-2">
                              <button className='btn' onClick={handleWish}>
                                  <i className="fa-regular fa-heart"></i>
                              </button>
                        </div> 
                  </div>                                        
            </div>
      </div>                             
                   
      </div>

    )
  }

export default ShopCard