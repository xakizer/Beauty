import { createContext, useState } from "react";

interface LangType{
    mode:string
}

export const LangContext = createContext<any>(null);

export const LangProvider =({children}:any)=>{
        const [mode,setMode] = useState<string | any>(localStorage.getItem("lang"));

        return <LangContext.Provider value={[mode,setMode]}>{children}</LangContext.Provider>
}