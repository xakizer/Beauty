import { LinkContainer } from "react-router-bootstrap"
import { LangContext } from "../context/LangContext"
import {useContext} from "react"

const NotFoundPage = () => {
  const [lang] = useContext(LangContext)
  return (
    <div className='notFound'>
        <div className="container">
          <div>
            <h4>Oops!</h4>
            <p>{lang === "EN" ? "404-PAGE NOT FOUND" : "404-SƏHVƏ MÖVCUD DEYİL"}</p>
            <LinkContainer to="/home">    
                <button className='btn'>{lang === "EN" ? "Go To Home Page" : "Ana Səhvəyə Gedin"}</button>
            </LinkContainer>
          </div>
        </div>
    </div>
  )
}

export default NotFoundPage