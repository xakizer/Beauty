const blog:any[] = [];

export const blogReducer =(state=blog,action:any)=>{
    switch (action.type) {
        // ADD
        case "ADD_BLOG":
          return [...state,action.blog];

        // UPDATE
        case "UPDATE_BLOG":
            return state.map(item=>{
                if(item.id === action.id){
                    return {...item , ...action.update}
                }else{
                    return item;
                }
            })
            
        // REMOVE
        case "REMOVE":
          return state.filter(({id}:any)=>{
                return id !== action.id
            });

        case "SET_BLOGS":
            return action.blogs;
            
        default:
            return state
    }

}