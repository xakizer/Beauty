import { useNavigate } from 'react-router-dom'
import { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Swal from 'sweetalert2'
import { LangContext } from '../context/LangContext';

const BuyButton= () => {
    const userData:any =  localStorage.getItem("user");
    const navigate = useNavigate();
    const [lang] = useContext(LangContext);
    const [show, setShow] = useState(false);

    const handleClose = () => {
        localStorage.removeItem("react-use-cart")
        window.location.reload()
        setShow(false)
    };

    const handleShow = () => {
        if(userData === null || localStorage.getItem("admin")){
            Swal.fire({
              position: 'center',
                icon: 'info',
                title: 'YOU MUST LOGIN AS USER',
                showConfirmButton: false,
                timer: 1700
              })

              localStorage.removeItem("admin")
                window.scrollTo({
                  top:0,
                  behavior: "smooth"
                })
              setTimeout(function() {            
                navigate("/login")                         
              }, 1700);
        }else{
            setShow(true)
        }
    };

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="buybtn border-none rounded-0">
          {lang === "EN" ? "Buy Now" : "İndi Alın"}
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        className="rounded-0"
      >
        <Modal.Body className="rounded-0">
          <i className="fa-regular fa-circle-check"></i>  {lang === "EN" ? "Your Shopping Successfully Completed!!!" : "Alış Verişiniz Uğurla Tamamlandı!!!"}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>
            <i className="fa-solid fa-check"></i>
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default BuyButton