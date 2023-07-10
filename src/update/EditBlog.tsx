import { connect} from "react-redux";
import BlogForm from "../components/BlogForm";
import { useNavigate } from "react-router-dom";
import { editBlogFromDataBase } from "../redux/store/action/blogAction";


const EditBlog:React.FC = (props:any) => {
    const navigate = useNavigate()

  return (
    <div className="main">
        <div className="editBlog">
            
        <div className="first">
              <div className="container">
                <div className='d-flex flex-column align-items-center justify-content-center'>
                      <h4>EDIT BLOG</h4>
                      <div>
                      </div>
                  </div>
              </div>
            </div>

                <BlogForm editblog={props.pvalue}
                    onFormSubmit={(fd:any)=>{
                        props.dispatch(editBlogFromDataBase(props.pvalue.id,fd))
                        navigate('/dashboard')
                    }}
                />
        </div>
    </div>
  )
}

const mapStateToProps=(state:any)=>{
    const link = window.location.pathname.slice(16,99);
    
    return({
        pvalue:state.find((p:any)=>p.id ===link)
    })

}

export default connect(mapStateToProps)(EditBlog)