import { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { LangContext } from '../context/LangContext';
import Swal from 'sweetalert2'

const UserLogin:React.FC = () => {
  const [lang] = useContext(LangContext)
    const users=[
        {
            email: "roya@gmail.com",
            name: "Roya",
            password: "roya123"
        },
        {
            email: "samir@gmail.com",
            name: "Samir",
            password: "user123"
        },
        {
            email: "ayla@gmail.com",
            name: "Ayla",
            password: "user55"
        }
    ]

        const [email,setEmail] = useState("")
        const [pass,setPass] = useState("")
        const navigate = useNavigate();

        const emailChange =(e:any)=>{
                setEmail(e.target.value)
        }
        const passChange =(e:any)=>{
                setPass(e.target.value)
        }

        const formSubmit =(e:React.FormEvent)=>{
            e.preventDefault();
            if(email === "" || pass === ""){
                    Swal.fire(
                      'Input is empty',
                      'Fill in input, please!!!',
                      'warning'
                    )
            }else{ 
                const autoUser:any = users.find((right:any) => right?.email === email)
                if(email !== autoUser.email || pass !== autoUser.password ){
                   Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                  })
                }else{
                  Swal.fire({
                    position: 'center',
                      icon: 'success',
                      title: 'SUCCESSFULL!',
                      showConfirmButton: false,
                      timer: 1800
                    })
                    localStorage.setItem("user" , autoUser.name);
                    setTimeout(function() {            
                      navigate("/userinfo")
                      window.location.reload();                          
                    }, 1800);
                }
            }          
        }


  return (
    <div className="main">
    <div className="userLogin">
      <div className="container">

        <div className="d-flex align-items-center justify-content-center">
          <div className="center">

            <div className="d-flex justify-content-center title">
                  <h4>{lang === "EN" ? "LOGIN" : "GİRİŞ"}</h4>
            </div>

            <div className="d-flex justify-content-center loginForm">
                <div className="col-11 col-sm-10 col-md-7">
                <Form onSubmit={formSubmit}>
                    <Form.Group className="mb-3 userBox" controlId="formBasicEmail">
                      <Form.Label className='userLabel'>{lang === "AZ" ? "E-poçt ünvanı" : "Email address"}</Form.Label>
                      <Form.Control type="email" onChange={emailChange} className='userInput  outline-0' />
                    </Form.Group>

                  <Form.Group className="mb-3 passBox" controlId="formBasicPassword">
                    <Form.Label className='passLabel'>{lang === "AZ" ? "Parol" : "Password"}</Form.Label>
                    <Form.Control type="password" onChange={passChange}  className='passInput' />
                  </Form.Group>
                  <div className='d-flex justify-content-center buttonDiv'>
                    <Button variant="btn " type="submit">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      {lang === "EN" ? "Submit" : "Təqdim edin"}
                    </Button>
                  </div>
              </Form>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
  )
}

export default UserLogin