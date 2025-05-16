import { createContext } from "react";
import { useState } from "react";
import axios from 'axios'
import { toast } from "react-toastify";

export const AppContext = createContext()

const AppContextProvider = (props) => {

  const backendUrl = import.meta.env.VITE_BACKEND_URL
  const [Ctoken, setCToken] = useState(localStorage.getItem('Ctoken') ? localStorage.getItem('Ctoken') : false)
  const [dashData, setDashData] = useState(false)

  const getDashData = async () => {
        try{
            const {data} = await axios.get(backendUrl + '/api/company/dashboard', {headers:{Ctoken}})

            if (data.success){
                setDashData(data.dashData)
                console.log(data.dashData);
                
            }
            else{
                toast.error(data.message)
            }
        }
        catch(error){
            toast.error(error.message)
        }
    }


  const  value = {
    backendUrl,
    Ctoken, setCToken,
    dashData, getDashData,
  }

    return(
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )

}

export default AppContextProvider