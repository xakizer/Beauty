import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';


interface BlogFormType{
    onFormSubmit: any;
    editblog:any;
  }

const BlogForm:React.FC<BlogFormType> = ({onFormSubmit,editblog}) => {
    const [iphoto,setiPhoto] = useState(editblog ? editblog.photo : "");
    const [ititle,setiTitle] = useState(editblog ? editblog.title : "");
    const [idesc,setiDesc] = useState(editblog ? editblog.desc : "");


    const blogSubmit=(e:React.FormEvent)=>{
        e.preventDefault()
        if(!iphoto || !ititle || !idesc){
            alert("please,fill in input")
        }
        else{
            onFormSubmit({
                photo:iphoto,
                title:ititle,
                desc:idesc
            })
        }
    }

    const scrollTop=()=>{
        window.scrollTo({
          top:0,
          behavior: "smooth"
        })
  }

  return (
        <div className="blogForm pb-5 container-fluid">
            <div className="container">
            <div className="d-flex align-items-center justify-content-center">
                <div className="formBlog">
                <div className="d-flex justify-content-center">
                <div className="col-11 col-sm-10 col-md-8">
                <Form onSubmit={blogSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Photo</Form.Label>
                        <Form.Control 
                        type="text"
                        value={iphoto} 
                        placeholder="Enter photo link" 
                        onChange={e=>{setiPhoto(e.target.value)}}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Title</Form.Label>
                        <Form.Control 
                        type="text" 
                        value={ititle}
                        placeholder="Enter title" 
                        onChange={e=>{setiTitle(e.target.value)}} 
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Description</Form.Label>
                        <Form.Control 
                        className='areaDesc'
                        as="textarea" 
                        type="text" 
                        value={idesc}
                        placeholder="Enter description" 
                        onChange={e=>{setiDesc(e.target.value)}} 
                        />
                    </Form.Group>

        
                    <div className='d-flex justify-content-center pt-4'>
                        <Button className='btn btnShare' type="submit" onClick={scrollTop}>
                            SHARE
                        </Button>
                    </div>
                </Form>
                </div>
                </div>
                </div>
            </div>
            </div>
        </div>

  )
}

export default BlogForm