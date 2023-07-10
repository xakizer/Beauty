import { LinkContainer } from 'react-router-bootstrap';
import { ToastContainer,toast} from 'react-toastify';
import { useCart } from 'react-use-cart';
import { useWishlist } from 'react-use-wishlist'
import { LangContext } from '../context/LangContext';
import { useContext } from "react"

const Wishlist = () =>{
  const {isWishlistEmpty, items,removeWishlistItem} = useWishlist();
    const { addItem } = useCart()
    const [lang] = useContext(LangContext)

    const notify = () => toast.success("Added products", {
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
        <div className="wishList">

          {/* FIRST SECTION START */} 
          <div className="first">
              <div className='container'>
                  <div className='d-flex flex-column align-items-center justify-content-center'>
                    <h4>{lang === "AZ" ? "BƏYƏNİLƏNLƏR" :  "WISHLIST"}</h4>
                    <div>
                      <LinkContainer to="/home">
                        <span>{lang === "AZ" ? "Ana Səhvə" :  "Home"}   /</span>
                      </LinkContainer>
                        <span> {lang === "AZ" ? "Bəyənilənlər" :  "Wishlist"}</span>
                    </div>
                  </div>
              </div>
          </div>
          {/* FIRST SECTION END */}


          {/* TABLE SECTION START */}
          <section className='wishTable'>
              <div className="container">
              {isWishlistEmpty ? <div className='d-flex align-items-center justify-content-center py-5'><img src="https://static.vecteezy.com/system/resources/thumbnails/009/381/154/small/broken-heart-clipart-design-illustration-free-png.png" alt="" style={{width:300}} /></div> :
                  <div className='col-12 col-sm-12 col-md-12'>
                    <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">No</th>
                        <th scope="col">{lang === "AZ" ? "ŞƏKİL" : "PHOTO"}</th>
                        <th scope="col">{lang === "AZ" ? "BAŞLIQ" : "TITLE"}</th>
                        <th scope="col">{lang === "AZ" ? "QİYMƏT" : "PRICE"}</th>
                        <th scope="col">{lang === "AZ" ? "ALIŞ" : "PURCHASE"}</th>
                        <th scope="col">{lang === "AZ" ? "SİLİN" : "REMOVE"}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {items.map((item:any,c:number)=>{
                        return(
                          <tr key={c}>
                          <th scope="row">{c+1}</th>
                          <td className='wishPhoto'><img width={80} src={item.image} alt="IMAGE" /></td>
                          <td className='wishTitle'>{item.title}</td>
                          <td className='wishPrice'>$ {item.price}</td>
                          <td className='wishCart'><button className='btn btnCart' onClick={()=>{addItem(item);notify()}}>{lang === "AZ" ? "Əlavə Edin" : "Add To Cart"}</button></td>
                          <td className='wishRemove'><button className='btn removeBtn' onClick={() => removeWishlistItem(item.id)}>{lang === "AZ" ? "Silin" : "Remove"}</button></td>
                       </tr>
                        )
                      })}
                    </tbody>
                    </table>
                  </div>
                  }
              </div>
          </section>
          {/* TABLE SECTION END */}

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
        theme="dark"
      />
    </div>
  )
}

export default Wishlist