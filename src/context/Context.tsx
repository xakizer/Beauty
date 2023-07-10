import axios from "axios";
import { useEffect, useState } from "react";
import { createContext } from "react";

interface propType{
  children:any
}

interface productType{
  id:number;
  image:string;
  hovimg:string;
  title:string;
  price:number;
}

export const  ProductContext = createContext<productType[] | any[]>([]);

export const ProductProvider = (props:propType)=>{
  
  const [products,setProducts] = useState<productType[]>([]);
  useEffect(()=>{
        axios
        .get("https://mocki.io/v1/ac09905e-5fce-416e-88d7-ac9a9172c8ab")
        .then((res:any)=>{setProducts(res.data)})
  },[])


   return  <ProductContext.Provider value={[products,setProducts]}>
          {props.children}
        </ProductContext.Provider>
}