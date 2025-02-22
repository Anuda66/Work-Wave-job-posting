import { createContext } from "react";   
import { jobs } from "../assets/assets";

export const AppContext = createContext()

const AppContextProvider = (props)=>{
const value = {
        jobs
    }
return(
    <AppContext.Provider value={value}>
        {props.children}
    </AppContext.Provider>
)
}
export default AppContextProvider 