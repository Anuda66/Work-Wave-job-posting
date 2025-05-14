import { createContext } from "react";
import { useState } from "react";
import axios from 'axios'

export const AppContext = createContext()

const AppContextProvider = (props) => {

  const backendUrl = import.meta.env.VITE_BACKEND_URL

  const [Ctoken, setCToken] = useState(localStorage.getItem('Ctoken') ? localStorage.getItem('Ctoken') : false)

  const  value = {
    backendUrl,
    Ctoken, setCToken,
  }

    return(
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )

}

export default AppContextProvider