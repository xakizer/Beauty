import  database  from "../../../firebase/fireBaseConfig";

export const addBlog = (blog:any)=>({
    type: "ADD_BLOG",
    blog
})

export const addBlogToDataBase = (blogData = {}) =>{
    return (dispatch:any) => {
        const {title='' , desc='', photo=''}:any = blogData;
        const blog = {photo,title,desc};

        database.ref("blog").push(blog).then((res:any) => {
            dispatch(addBlog({
                id: res.key,
                ...blog
            }))
        })
    }
}

export const editBlog=(id:number,update:any)=>({
    type:"EDIT_BLOG",
    id,
    update
})


export const editBlogFromDataBase = (id:number,update:any) => {
    return (dispatch:any)=>{
        return database.ref(`${id}`).update(update).then(()=>{
            dispatch(editBlog(id,update))
        })
    }
}

export const removeBlog =({id}:any)=>({
    type:"REMOVE",
    id:id
})

export const removeBlogFromDataBase= (id:any) => {
    return (dispatch:any) => {
        return database.ref(`blog/${id}`).remove().then(()=>{
            dispatch(removeBlog(id))
        })
    }
}

export const setBlogs = (blogs:any) => ({
    type: "SET_BLOGS",
    blogs
})

export const getBlogsFromDataBase=()=>{
    return (dispatch:any)=>{
        return database.ref("blog").once("value").then((snapshot)=>{
            const blogs:any[] = [];

            snapshot.forEach((blog)=>{
                blogs.push({
                    id: blog.key,
                    ...blog.val()
                })
            })
            dispatch(setBlogs(blogs));
        })
    }
}

