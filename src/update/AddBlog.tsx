import { useNavigate } from "react-router-dom"
import BlogForm from "../components/BlogForm"
import { connect } from "react-redux"
import { addBlogToDataBase } from "../redux/store/action/blogAction"


const AddBlog:React.FC = (props:any) => {
    const navigate = useNavigate()

  return (
    <div className="main">
      <div className="addBlog pt-5">
        
            <div className="first">
              <div className="container">
                <div className='d-flex flex-column align-items-center justify-content-center'>
                      <h4>ADD NEW BLOG</h4>
                      <div>
                      </div>
                  </div>
              </div>
            </div>
            
            <BlogForm onFormSubmit={(fd:any) => {
            props.dispatch(addBlogToDataBase(fd))
            navigate('/dashboard')

      }} editblog={null}
      />
        </div>
    </div>
  )
}

export default connect()(AddBlog)