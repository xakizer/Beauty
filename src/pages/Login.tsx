import { useState , useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import { LangContext } from '../context/LangContext';

const users=[
    {
        email: "roya@gmail.com",
        name: "Roya",
        isAdmin: false,
        password: "roya123"
    },
    {
        email: "samir@gmail.com",
        name: "Samir",
        isAdmin: false,
        password: "user123"
    },
    {
        email: "ayla@gmail.com",
        name: "Ayla",
        isAdmin: false,
        password: "user55"
    },
    {
        email: "xakizarabbasova@gmail.com",
        name: "Xakizar",
        isAdmin: true,
        password: "xakizar99"
    }
  ]
  
const Login = () => {
    const [lang] = useContext(LangContext)
    const [email,setEmail] = useState("")
    const [pass,setPass] = useState("")
    const navigate = useNavigate();

    const scrollTop=()=>{
      window.scrollTo({
        top:0,
        behavior: "smooth"
      })
    }

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
            const autoUser:any = users.find((corr:any)=> corr?.email === email)
            if(!autoUser || pass !== autoUser.password ){
                Swal.fire(
                  'Oopss!!!',
                  'Something went false',
                  'error'
                )
            }
            else if(email === autoUser.email && pass === autoUser.password && autoUser.isAdmin === false){
              Swal.fire({
                position: 'center',
                  icon: 'success',
                  title: 'SUCCESSFULL!',
                  showConfirmButton: false,
                  timer: 1700
                })
                localStorage.setItem("user" , autoUser.name);
                setTimeout(function() {            
                  navigate("/userinfo")
                  window.location.reload();                          
                }, 1700);
            }
            else if(email === autoUser.email && pass === autoUser.password && autoUser.isAdmin === true){
              Swal.fire({
                position: 'center',
                  icon: 'success',
                  title: 'SUCCESSFULL!',
                  showConfirmButton: false,
                  timer: 1700
                })
                localStorage.setItem("admin" , autoUser.name);
                setTimeout(function() {            
                  navigate("/dashboard")
                  window.location.reload();                          
                }, 1700);
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
                                  <Button variant="btn " type="submit" onClick={scrollTop}>
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
  
  export default Login