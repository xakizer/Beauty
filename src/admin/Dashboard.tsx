import { connect, useDispatch, useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';
import { LinkContainer } from 'react-router-bootstrap';
import { removeBlog } from '../redux/store/action/blogAction';

const Dashboard = () => {
      const dispatch = useDispatch()
      const selectdata:any = useSelector(state => state)

      const scrollTop=()=>{
        window.scrollTo({
          top:0,
          behavior: "smooth"
        })
  }
      
  return (
    <div className="main">
      {/* FIRST SECTION START */}
        <div className="first">
          <div className="container">
            <div className='d-flex flex-column align-items-center justify-content-center'>
                 <h4>ADMIN PANEL</h4>
                 <div>
                  <LinkContainer to="/dashboard">
                     <span>Dashboard   /</span>       
                  </LinkContainer>
                     <span> Admin Panel</span>
                 </div>
            </div>
          </div>
        </div>
      {/* FIRST SECTION END */}

      {/* DASHBOARD SECTION START */}
       <div className="dashboard">
        <div className="container">
        <Table striped bordered hover className='table'>
            <thead>
                <tr>
                <th>No</th>
                <th>Photo</th>
                <th>Title</th>
                <th>Description</th>
                <th>Edit</th>
                <th>Remove</th>
                </tr>
            </thead>
            <tbody>
                {[...selectdata].reverse().map((item:any,c:number)=>{
                  const {id} = item
                  return (
                    <tr key={c}>
                    <td className='dashNo'>{c+1}</td>
                    <td className='dashPhoto'><img src={item.photo} alt="image" width={100}/></td>
                    <td className='dashTitle'>{item.title}</td>
                    <td className='dashDesc'>{item.desc.substring(0,90)}...</td>
                    <td className='dashEditBtn'>
                      <LinkContainer to ={`/dashboard/edit/${id}`}>
                        <button className='btn' onClick={scrollTop}>Edit</button>         
                      </LinkContainer>
                    </td>
                    <td className='dashRemoveBtn'>
                        <button className='btn' onClick={()=>{
                          dispatch(removeBlog({id}))
                        }}>Remove</button>         
                    </td>
                    </tr>
                      )
                })}
            </tbody>
        </Table>

            <div className='d-flex justify-content-center addBtn py-5'>
        <LinkContainer to="/dashboard/add">
              <button className='btn border-none' onClick={scrollTop}>ADD</button>
        </LinkContainer>
            </div>
        </div>
       </div>
      {/* DASHBOARD SECTION END */}
    </div>
  )
}

const mapStateToProps=(state:string[])=>{
  return {
    pvalue: state
  }
}

export default connect(mapStateToProps)(Dashboard)