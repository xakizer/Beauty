import { createStore,applyMiddleware ,compose } from "redux";
import { blogReducer } from "../reducers/blogReducer";
import thunk from "redux-thunk";


const composeEnhancers:any = compose;

const configureStore:any = ()=>{
    const store:any = createStore(
        blogReducer,
        composeEnhancers(applyMiddleware(thunk))
    );
    return store;
}

export default configureStore
