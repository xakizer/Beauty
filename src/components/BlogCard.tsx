import { LinkContainer } from "react-router-bootstrap"

interface Types{
    id:string,
    image:string,
    title:string,
    desc:string
}

const BlogCard = ({id,title,desc,image}:Types) => {
  const scrollTop=()=>{
    window.scrollTo({
      top:0,
      behavior: "smooth"
    })
  }
  
  return (
        <div className="card rounded-0 border-0 mt-5">
        <img src={image} className="card-img-top rounded-0" alt="infoCard" />
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="icons">
              <span className="iconUser"><i className="fa-regular fa-user me-2"></i>By Ram M</span> | <span className="iconCalendar"><i className="fa-solid fa-calendar-days me-2"></i>August 28, 2018</span>
            </p>
            <p className="card-text">{desc.substring(0,97)}...</p>
            <LinkContainer to={`/blog/${id}`}>
                <button className="btn rounded-0" onClick={scrollTop}>Read More <i className="fa-solid fa-angles-right"></i></button>
            </LinkContainer>
        </div>
        </div>
  )
}

export default BlogCard