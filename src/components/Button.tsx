import { useNavigate } from 'react-router-dom';
import { LinkContainer } from "react-router-bootstrap"
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';


const Button = () => {
    const userData:any =  localStorage.getItem("user")

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const nameFunc=()=>{
      localStorage.removeItem("user")
      window.location.reload()
    }
    
    const userName =()=>{
      if(userData === null){
        return(
          <LinkContainer to="/user">
            <button className="btn" type="button">
              user
            </button>
          </LinkContainer>
        )
      }else{
        return (
          <LinkContainer to="/userinfo">
            <div className="dropdown">
                  <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="fa-solid fa-user"></i> {localStorage.getItem("user")}
                  </button>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" onClick={nameFunc}>log out</a></li>
                        <LinkContainer to="/user">                        
                          <li><a className="dropdown-item">change</a></li>
                        </LinkContainer>
                    </ul>
            </div>
          </LinkContainer>
        )
      }
  }
 
  return (
    <>
      <button  >Login</button>
      {/* <Button>
        Login
      </Button> */}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Body>
          Admin or User?
        </Modal.Body>
        <Modal.Footer>
          <button onClick={handleClose}>
            Close
          </button>
          <button >Understood</button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Button
