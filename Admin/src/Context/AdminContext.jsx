import { createContext, useState } from "react";
import axios from 'axios'
import {toast} from 'react-toastify'

export const AdminContext = createContext()

const AdminContextProvider = (props) => {
    
    const backendUrl = import.meta.env.VITE_BACKEND_URL

    const [aToken, setAToken] = useState(localStorage.getItem('aToken')?localStorage.getItem('aToken'):'')
    const [jobs, setJobs] = useState()
    const [dashData, setDashData] = useState(false)

    const getAllJobs = async () => {
        try{
            const {data} = await axios.post(backendUrl + '/api/admin/all-jobs', {}, {headers:{aToken}})
            if (data.success){
                setJobs(data.jobs)
                console.log(data.jobs );  
            }
            else{
                toast.error(data.message)
            }
        }
        catch (error){
            toast.error(error.message)
        }
    }

    const getDashData = async () => {
        try{
            const {data} = await axios.get(backendUrl + '/api/admin/dashboard', {headers:{aToken}})

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
 
    const value = {
        aToken,setAToken,
        backendUrl,jobs,
        getAllJobs,
        dashData,getDashData
    }

    return (
        <AdminContext.Provider value={value}>
            {props.children}
        </AdminContext.Provider>
    )
}
export default AdminContextProvider