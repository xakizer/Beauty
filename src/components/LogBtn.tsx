import { LinkContainer } from "react-router-bootstrap"
import { LangContext } from "../context/LangContext"
import { useContext } from "react";

const LogBtn = () => {
  const [lang] = useContext(LangContext)
  const userData:any =  localStorage.getItem("user")
  const adminData:any =  localStorage.getItem("admin")

  const nameFunc=()=>{
    window.location.reload()
    localStorage.removeItem("user")
  }
  const adminFunc=()=>{
    window.location.reload();
    localStorage.removeItem("admin")
  }

  const logFunc =()=>{
    if(userData === null && adminData === null){
      return(
        <LinkContainer to="/login">
        <button className="btn" type="button">
          {lang === "EN" ? "Login" : "Giriş"}
        </button>
      </LinkContainer>
      )
    }
    else if(localStorage.getItem("user") && adminData === null){
      return(
        <LinkContainer to="/userinfo">
        <div className="dropdown">
              <button className="btn dropdown-toggle" style={{width:90}} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="fa-solid fa-user"></i> {localStorage.getItem("user")}
              </button>

                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" onClick={nameFunc}>{lang === "EN" ? "Log Out" : "Çıxış"}</a></li>
                    <LinkContainer to="/login">                        
                      <li><a className="dropdown-item">{lang === "EN" ? "Change User" : "Dəyişin"}</a></li>
                    </LinkContainer>
                </ul>
        </div>
      </LinkContainer>
      )
    }else if(localStorage.getItem("admin") && userData === null){
      return(
        <LinkContainer to="/dashboard">
          <div className="dropdown">
                <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Admin: {localStorage.getItem("admin")}
                </button>
                  <ul className="dropdown-menu">
                    <LinkContainer to="/login">                 
                      <li><a className="dropdown-item" onClick={adminFunc}>{lang === "EN" ? "Log Out" : "Çıxış"}</a></li>
                    </LinkContainer>
                  </ul>
          </div>
        </LinkContainer>
      )
    }
  }
  return (
    <>
        {logFunc()}
    </>
  )
}

export default LogBtn